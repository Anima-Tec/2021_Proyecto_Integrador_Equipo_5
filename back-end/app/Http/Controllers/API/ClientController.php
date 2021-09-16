<?php

namespace App\Http\Controllers\API;

use App\Models\Client;
use Illuminate\Http\Request;
use App\Http\Controllers\ApiController;

class ClientController extends ApiController
{
    public function index()
    {
        return Client::all();
    }

    public function show($id)
    {
        return Client::find($id);
    }

    public function update(Request $request, $id)
    {
        $client =  Client::find($id);
        $fields = $request->validate([
            'email' => 'string',
            'password' => 'string|confirmed'
        ]);

        $client->update([
            'email' => $fields['email'],
            'password' => bcrypt($fields['password'])
        ]);
        $client->save();

        $response = [
            'account' => $client,
        ];

        return response($response,200);
    }
}
