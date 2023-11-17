<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contract extends Model
{
    //use HasFactory;
     //use HasFactory;
     protected $fillable = [
        'id_user',
        'company_name',
        'process_number',
        'supervisor',
        'validity',
        'serial_contract',
        'object',
        'sector',
        'id_contract',
    ];
    public function addtive()
    {
        return $this->hasMany(Additive::class, 'id_contract');
    }
    public function user()
    {
        return $this->belongsTo(User::class, 'id_user', 'id');
    }

}
