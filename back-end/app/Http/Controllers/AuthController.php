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
            'role_user' => 'required|string',
            'role_adviser' => 'string',
            'password' => 'required|string|confirmed|min:8'
        ]);

        $user = User::create([
            'name' => $fields['name'],
            'last_name' => $fields['last_name'],
            'email' => $fields['email'],
            'date_birth' => $fields['date_birth'],
            'role' => $fields['role_user'],
            'password' => bcrypt($fields['password'])
        ]);

        switch ($fields['role']) {
            case 'client':
                $user->client()->create([
                    'user_id' => $user->id,
                ]);
                break;

            case 'adviser':
                $user->adviser()->create([
                    'user_id' => $user->id,
                    'role' => $fields['role_adviser']
                ]);
                break;
            default:
                return $this->sendError('Error');
        }

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
