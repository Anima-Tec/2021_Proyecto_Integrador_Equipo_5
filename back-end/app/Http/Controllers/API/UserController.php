<?php

namespace App\Http\Controllers\API;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\ApiController;

class UserController extends ApiController
{
    public function index()
    {
        return User::all();
    }

    public function show($id)
    {
        return User::find($id);
    }

    public function update(Request $request, $id)
    {
        $user =  User::find($id);
        $fields = $request->validate([
            'email' => 'string',
            'password' => 'string|confirmed'
        ]);

        $user->update([
            'email' => $fields['email'],
            'password' => bcrypt($fields['password'])
        ]);
        $user->save();

        $response = [
            'account' => $user,
        ];

        return response($response,200);
    }
}
