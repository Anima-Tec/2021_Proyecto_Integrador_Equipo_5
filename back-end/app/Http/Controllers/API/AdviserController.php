<?php

namespace App\Http\Controllers\API;

use App\Models\Adviser;
use Illuminate\Http\Request;
use App\Http\Controllers\ApiController;

class AdviserController extends ApiController
{
    public function index()
    {
        return Adviser::all();
    }

    public function show($id)
    {
        return Adviser::find($id);
    }

    public function update(Request $request, $id)
    {
        $adviser =  Adviser::find($id);
        $fields = $request->validate([
            'email' => 'string',
            'password' => 'string|confirmed'
        ]);

        $adviser->update([
            'email' => $fields['email'],
            'password' => bcrypt($fields['password'])
        ]);
        $adviser->save();

        $response = [
            'account' => $adviser,
        ];

        return response($response,200);
    }
}
