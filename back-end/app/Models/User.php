<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use HasFactory, Notifiable;
    protected $connection='proyecto_anima_2021';
    protected $table='users';
    protected $primaryKey = "id";
    public $timestamps=false;

    protected $fillable = [
        'name',
        'phone',
        'date_birth',
        'profile_picture',
        'height',
        'weight',
        'password',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
}
