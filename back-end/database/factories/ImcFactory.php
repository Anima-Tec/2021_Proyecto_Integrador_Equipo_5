<?php

namespace Database\Factories;

use App\Models\Client;
use App\Models\Imc;
use Illuminate\Database\Eloquent\Factories\Factory;

class ImcFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Imc::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'height' => rand(100, 220),
            'weight' => rand(20, 200),
            'value' => 24,
        ];
    }
}
