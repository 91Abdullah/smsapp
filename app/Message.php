<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Message extends Model
{
    use SoftDeletes;

    protected $fillable = ['body', 'reciever', 'sender'];
    protected $dates = ['deleted_at'];

    public function keyword() {
        return $this->belongsTo('App\Keyword');
    }
}
