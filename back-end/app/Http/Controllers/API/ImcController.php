<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\ApiController;
use App\Models\Imc;
use Illuminate\Support\Facades\Auth;

class ImcController extends ApiController
{
    public function index()
    {
        return Imc::all();
    }

    public function store(Request $request)
    {
        $fields = $request->validate([
            'height' => 'required',
            'weight' => 'required'
        ]);

        $client = Auth::user()->client;
        $imc = Imc::create([
            'client_id' => $client->id,
            'height' => $fields['height'],
            'weight' => $fields['weight'],
            'value' => $this->calculate_imc($fields['height'], $fields['weight'])
        ]);
        $client->imc_id = $imc->id;
        $client->save();
        return response($imc, 201);

    }

    public function show($id)
    {
        return Imc::find($id);
    }

    private function calculate_imc($height, $weight) {
        $height = $height / 100;
        return round($weight/($height*$height), 2);
    }
}
