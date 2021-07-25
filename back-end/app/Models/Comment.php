<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory;
    protected $connection='proyecto_anima_2021';
    protected $table='comments';
    protected $primaryKey = "id";
    public $timestamps=false;

    protected $fillable = [
        'title',
        'text',
        'date',
    ];
}
