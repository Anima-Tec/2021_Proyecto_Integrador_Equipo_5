<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $fillable = [
        'name',
        'last_name',
        'phone',
        'date_birth',
        'profile_picture',
        'role',
        'client_id',
        'adviser_id',
        'password',
        'password_confirmation'
    ];

    public function comments()
    {
        return $this->hasMany(Comment::class);
    }

    public function client()
    {
        return $this->hasOne(Client::class);
    }

    public function adviser()
    {
        return $this->hasOne(Adviser::class);
    }
}
