<?php

namespace App\Http\Controllers;

use App\Models\Imc;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $fields = $request->validate([
            'name' => 'required|string',
            'last_name' => 'required|string',
            'email' => 'required|string|unique:users,email',
            'date_birth' => 'required|date',
            'height' => 'required|integer',
            'weight' => 'required|integer',
            'password' => 'required|string|confirmed'
        ]);

        $user = User::create([
            'name' => $fields['name'],
            'last_name' => $fields['last_name'],
            'email' => $fields['email'],
            'date_birth' => $fields['date_birth'],
            'password' => bcrypt($fields['password'])
        ]);

        $user->client()->create([
            'user_id' => $user->id,
            'imc_id' => Imc::create([
                'client_id' => $this->id,
                'height' => $fields['height'],
                'weight' => $fields['weight'],
                'value' => $this->calculate_imc($fields['height'], $fields['weight']),
            ])
        ]);

        $token = $user->createToken('user_token')->plainTextToken;

        $response = [
            'user' => $user,
            'client' => $user->client(),
            'token' => $token
        ];

        Mail::to($user->email)->send(new \App\Mail\UserRegister($response));
        return response($response, 201);
    }

    public function login(Request $request)
    {
        $fields = $request->validate([
            'email' => 'required|string|',
            'password' => 'required|string|'
        ]);

        $user = User::where('email', $fields['email'])->first();

        if (!$user || !Hash::check($fields['password'], $user->password)) {
            return response([
                'message' => 'Bad creds'
            ], 401);
        }

        $token = $user->createToken('user_token')->plainTextToken;

        $response = [
            'user' => $user,
            'token' => $token
        ];

        Mail::to($user->email)->send(new \App\Mail\UserLogin($response));
        return response($response, 201);
    }

    public function logout(Request $request)
    {
        auth()->user()->tokens()->delete();

        return [
            'message' => 'Logged out'
        ];
    }
}
