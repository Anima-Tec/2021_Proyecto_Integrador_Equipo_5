<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'height',
        'weight'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function imc()
    {
        return $this->hasOne(Imc::class);
    }
}
