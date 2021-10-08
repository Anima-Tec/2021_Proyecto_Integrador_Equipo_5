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
        User::factory()->times(40)->create();
        $users = User::where('role', 'ADVISER')->whereNull('adviser_id')->distinct('id')->get();
        foreach ($users as $user) {
            $adviser_factory = Adviser::factory()->create(['user_id' => $user->id]);
            $adviser = Adviser::find($adviser_factory->id);

            $user->adviser_id = $adviser->id;
            $user->save();
        }
        $users = User::where('role', 'CLIENT')->whereNull('client_id')->distinct('id')->get();
        foreach ($users as $user) {
            $client_factory = Client::factory()->create(['user_id' => $user->id]);
            $client = Client::find($client_factory->id);

            $user->client_id = $client->id;
            $user->save();
        }
        $clients = Client::all();
        foreach ($clients as $client) {
            $imc_factory = Imc::factory()->create(['client_id' => $client->id]);
            $imc = Imc::find($imc_factory->id);

            $client->imc_id = $imc->id;
            $client->save();
        }
    }
}
