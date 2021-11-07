<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Answers extends Model
{
    use HasFactory;

    protected $fillable = [
        'answer_desc',
        'question_id'
    ];

    // protected $hidden = [
    //     'id',
    //     'created_at'
    // ];
}
