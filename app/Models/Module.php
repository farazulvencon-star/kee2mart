<?php

namespace App\Models;

use App\Traits\HasTranslations;
use Illuminate\Database\Eloquent\Model;

class Module extends Model
{
    use HasTranslations;

    protected $table = 'modules';

    protected $fillable = ['name', 'image', 'description', 'status', 'row_order', 'slug'];

    protected $translatable = ['name', 'description'];

    protected $translationModel = 'ModuleTranslation';

    protected $appends = ['image_url', 'translations'];

    public function getImageUrlAttribute(){
        if($this->image){
            return asset('storage/' . $this->image);
        }
        return '';
    }
}
