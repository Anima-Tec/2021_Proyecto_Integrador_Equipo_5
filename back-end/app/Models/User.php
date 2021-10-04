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
        'date_birth',
        'email',
        'role',
        'client_id',
        'adviser_id',
        'password',
        'password_confirmation'
    ];

    protected $hidden = [
        'password',
        'password_confirmation',
        'remember_token'
    ];

    public function client()
    {
        return $this->hasOne(Client::class);
    }

    public function adviser()
    {
        return $this->hasOne(Adviser::class);
    }
}
