<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Imc extends Model
{
    use HasFactory;

    protected $fillable = [
        'client_id',
        'height',
        'weight',
        'value',
    ];

    public function client()
    {
        return $this->belongsTo(Client::class);
    }

    public function calculate_imc($height, $weight) {
        return $this->attributes['value'] = $weight/($height*$height);
    }
}
