<?php

namespace App\Http\Controllers;

use App\Models\Pozicio;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PozicioController extends Controller
{
    public function index(){
        return DB::table('pozicios as p')
            ->select(
                'p.pozkod',
                'p.terulet',
                'p.pozicio')
            ->get();
    }

    public function show($id){
        return Pozicio::findOrFail($id);
    }

    public function store(Request $request){
        $pozi = new Pozicio();
        $pozi->fill($request->all());
        $pozi->save();
        return response()->json(['message' => 'Sikeres mentés'], 200);
    }

    public function update(Request $request, $id){
        $pozi = Pozicio::findOrFail($id);
        $pozi->fill($request->all());
        $pozi->save();
        return response()->json(['message' => 'Sikeres mentés'], 200);
    }

    public function destroy($id){
        Pozicio::findOrFail($id)->delete();
    }

}
