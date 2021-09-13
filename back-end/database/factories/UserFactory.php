<?php

namespace Database\Factories;

use App\Models\Client;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UserFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = User::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $user_roles = ['Client', 'Adviser'];
        $user = User::create([
            'name' => $this->faker->firstName(),
            'last_name' => $this->faker->lastName(),
            'date_birth' => '2003-12-30',
            'role' => $user_roles[rand(0,1)],
            'email' => $this->faker->unique()->safeEmail,
            'password' => Hash::make(Str::random(8)),
        ]);
        $user->client()->save(Client::factory()->create());
    }
}
