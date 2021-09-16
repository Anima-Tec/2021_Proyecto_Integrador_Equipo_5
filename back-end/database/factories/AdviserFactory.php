<?php

namespace Database\Factories;

use App\Models\Adviser;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class AdviserFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Adviser::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $adviser_types = ['Psychologist', 'Nutritionist'];
        Adviser::create([
            'role' => $adviser_types[rand(0, 1)]
        ]);
    }
}
