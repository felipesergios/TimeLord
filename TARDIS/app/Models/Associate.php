<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Associate extends Model
{
   // use HasFactory;
   protected $fillable = [
    'id',
    'trigger_id',
    'user_id',
];

public function getTriggers(){
    return $this->belongsTo(Triggers::class,'trigger_id','id');
}
}
