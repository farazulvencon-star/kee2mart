<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Module;
use App\Helpers\CommonHelper;
use App\Services\LanguageService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class ModulesApiController extends Controller
{
    protected $languageService;

    public function __construct(LanguageService $languageService)
    {
        $this->languageService = $languageService;
    }

    /**
     * Fetch list of active modules.
     */
    public function index()
    {
        $request = request();
        $modules = Module::withAllTranslations()->orderBy('row_order', 'ASC');
        if ($request->has('all')) {
            $modules = $modules->get();
        } else {
            $modules = $modules->where('status', 1)->get();
        }
        return CommonHelper::responseWithData($modules);
    }

    /**
     * Update module.
     */
    public function update(Request $request)
    {
        $defaultLanguage = $this->languageService->getDefaultLanguage();
        $isDefaultLang = $request->language_id == $defaultLanguage->id;

        $rules = [
            'id' => 'required|exists:modules,id',
            'name' => 'required|string',
            'description' => 'nullable|string',
            'status' => 'required|integer|in:0,1',
            'language_id' => 'required|exists:languages,id',
            'image' => 'nullable|mimes:jpeg,jpg,png,gif,webp,svg|max:2048'
        ];

        if ($isDefaultLang) {
            $rules['slug'] = 'sometimes|required|string';
        }

        $validator = Validator::make($request->all(), $rules);

        if ($validator->fails()) {
            return CommonHelper::responseError($validator->errors()->first());
        }

        $module = Module::find($request->id);
        if (!$module) {
            return CommonHelper::responseError('Module not found');
        }

        if ($request->status == 0) {
            $activeCount = Module::where('id', '!=', $module->id)->where('status', 1)->count();
            if ($activeCount === 0) {
                return CommonHelper::responseError('At least one module must be active');
            }
        }

        if ($isDefaultLang) {
            $module->name = $request->name;
            if ($request->has('slug')) {
                if ($request->filled('slug')) {
                    $module->slug = \Illuminate\Support\Str::slug($request->slug);
                } else {
                    $module->slug = \Illuminate\Support\Str::slug($request->name);
                }
            }
            $module->description = $request->description;
            $module->status = $request->status;

            if ($request->hasFile('image')) {
                // Delete old image
                if ($module->image) {
                    @Storage::disk('public')->delete($module->image);
                }
                $file = $request->file('image');
                $fileName = time() . '_' . uniqid() . '.' . $file->getClientOriginalExtension();
                $image = Storage::disk('public')->putFileAs('modules', $file, $fileName);
                $module->image = $image;
            }

            $module->save();
        }

        $module->saveTranslation($request->language_id, [
            'name' => $request->name,
            'description' => $request->description,
        ]);

        return CommonHelper::responseSuccess('Module updated successfully!');
    }
}
