<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends ApiController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $User = User::where('active', '=', 1)
                    ->select('id', 'name', 'phone', 'date_birth', 'profile_picture', 'height', 'weight')
                    ->get();

            return $this->sendResponse($User, "Usuarios obtenidos correctamente");
        } catch (\Exception $e) {
            return $this->sendError($e, "Error controlado al mostrar los Usuarios", 200);
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {
            $User = new User();
            $User->name = $request->input('name');
            $User->phone = $request->input('phone');
            $User->date_birth = $request->input('date_birth');
            $User->profile_picture = $request->input('profile_picture');
            $User->height = $request->input('height');
            $User->weight = $request->input('weight');
            $User->save();
            return $this->sendResponse($User, "Usuario creado correctamente");
        } catch (\Exception $e) {
            return $this->sendError($e, "Error al crear el Usuario", 200);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        try {
            $User = User::where('id', $id)
                    ->select('id', 'name', 'phone', 'date_birth', 'profile_picture', 'height', 'weight')
                    ->get();
            return $this->sendResponse($User, "Usuario obtenido correctamente");
        } catch (\Exception $e) {
            return $this->sendError($e, "Error al obtener el Usuario");
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
