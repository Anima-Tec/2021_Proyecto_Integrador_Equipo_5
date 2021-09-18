<?php

namespace Database\Seeders;

use App\Models\Adviser;
use App\Models\Client;
use App\Models\Comment;
use App\Models\Imc;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        User::factory()->times(10)->create();
        // Client::factory()->times(User::where('role', 'Client')->count())->create();
        // Imc::factory()->times(Client::all()->count())->create();
        // Adviser::factory()->times(10)->create();
        // Comment::factory()->times(10)->create();
    }
}
