<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Adviser extends Model
{
    use HasFactory;

    protected $fillable = [
        'role'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
