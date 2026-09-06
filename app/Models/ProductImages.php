<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductImages extends Model
{
    use HasFactory;
    public $timestamps = false;

    protected $hidden = [];
    protected $appends = ['image_url'];

    public function getImageUrlAttribute(){
        if($this->image){
            if (\Illuminate\Support\Str::startsWith($this->image, ['http://', 'https://'])) {
                $image_url = $this->image;
            } else {
                $image_url = asset('storage/'.$this->image);
            }
            return $image_url;
        }
        return $this->image;
    }
}
