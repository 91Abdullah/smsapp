<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Keyword extends Model
{
    protected $fillable = ['key'];

    public function messages() {
        return $this->hasMany('App\Message');
    }

    /**
    * Get the route key for the model.
    *
    * @return string
    */
    public function getRouteKeyName() {
        return 'key';
    }
}
