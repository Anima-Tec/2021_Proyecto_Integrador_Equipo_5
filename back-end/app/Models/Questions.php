<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Questions extends Model
{
    use HasFactory;

    protected $fillable = [
        'question_desc',
    ];

    // protected $hidden = [
    //     'id',
    //     'created_at',
    //     ];
}
