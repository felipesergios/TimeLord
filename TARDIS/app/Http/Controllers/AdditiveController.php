<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Additive;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class AdditiveController extends Controller
{
    public function store(Request $req)
    {
        $data = $req->all();
        {
            $rules = [
                'id_contract' => 'required',
                'process_number' => 'required',
                'validity' => 'required',
                'notes'=>'required'
            ];
            $validator = Validator::make($req->all(), $rules);
            
            if($validator->fails()){
                return($validator->messages());
            }else{
                $data = $req->all();
                $newAdditive = Additive::create($data);
                return response()->json(['newCT'=>$newAdditive]);
            }
    }
}
}
