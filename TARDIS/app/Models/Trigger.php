<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Trigger extends Model
{
    //use HasFactory;
    protected $fillable = [
        'id',
        'severity',
        'level',
        'description',
    ];
    return $this->hasMany(Associate::class, 'id');
}
