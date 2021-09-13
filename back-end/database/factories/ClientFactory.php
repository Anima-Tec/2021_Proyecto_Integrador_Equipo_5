<?php

namespace Database\Factories;

use App\Models\Client;
use App\Models\Imc;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class ClientFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Client::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        dd(User::where('role', 'Client')->distinct());
        $client = Client::create([
            'user_id' => User::where('role', 'Client')->distinct()->get()
        ]);
        $client->imc()->save(Imc::factory()->create());
    }
}
