<?php

namespace App\Http\Controllers;

use App\Models\Adviser;
use App\Models\Client;
use App\Models\Imc;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;

class AuthController extends ApiController
{
    public function register(Request $request)
    {
        $fields = $request->validate([
            'name' => 'required|string',
            'last_name' => 'required|string',
            'email' => 'required|string|unique:users,email',
            'date_birth' => 'required|date',
            'role_adviser' => 'string',
            'password' => 'required|string|confirmed|min:8'
        ]);

        $user = User::create([
            'name' => $fields['name'],
            'last_name' => $fields['last_name'],
            'email' => $fields['email'],
            'date_birth' => $fields['date_birth'],
            'password' => bcrypt($fields['password'])
        ]);

        $token = $user->createToken('user_token')->plainTextToken;

        /* switch ($fields['role_user']) {
            case 'CLIENT':
                $client = $user->client()->create([
                    'user_id' => $user->id,
                ]);

                $user->client_id = $client->id;
                $user->save();

                $response = [
                    'user' => $user,
                    'client' => Client::find($client->id),
                    'token' => $token
                ];

                Mail::to($user->email)->send(new \App\Mail\UserRegister($response));
                break;

            case 'ADVISER':
                $adviser = $user->adviser()->create([
                    'user_id' => $user->id,
                    'role' => $fields['role_adviser']
                ]);

                $user->adviser_id = $adviser->id;
                $user->save();

                $response = [
                    'user' => $user,
                    'adviser' => Adviser::find($adviser->id),
                    'token' => $token
                ];

                Mail::to($user->email)->send(new \App\Mail\UserRegister($response));
                break;
            default:
                return $this->sendError('Error');
        }
        */
        $client = $user->client()->create([
            'user_id' => $user->id,
        ]);
        $user->client_id = $client->id;
                $user->save();
        $response = [
            'user' => $user,
            'client' => Client::find($client->id),
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
