<?php

namespace App\Http\Controllers;

use App\Models\Contract;
use App\Models\Associate;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Auth;
class ContractController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
       $user=Auth::user();
       $all_services_per_user = Contract::with('addtive')->with('user')->where('id_user', '=', $user->id)->get();
       return response()->json($all_services_per_user);

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $rules = [
            'company_name' => 'required',
            'process_number' => 'required',
            'supervisor' => 'required',
            'validity'=>'required',
            'serial_contract'=>'required',
            'object'=>'required',
            'notes'=>'required'

        ];
        $validator = Validator::make($request->all(), $rules);
        
        if($validator->fails()){
            return($validator->messages());
        }else{
            $user=Auth::user();
            $data = $request->all();
            $data['id_user'] = $user->id;
            $newCT = Contract::create($data);
            return response()->json(['newCT'=>$newCT]);
        }
       
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Contract  $contract
     * @return \Illuminate\Http\Response
     */
    public function show($contract)
    {
        try {
            $register = Contract::with('addtive')->FindorFail($contract);
            return response()->json(['contrato'=>$register]);
        } catch (\Throwable $th) {
            return response()->json(['msg'=>$th]);
        }
       
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Contract  $contract
     * @return \Illuminate\Http\Response
     */
    public function edit(Contract $contract)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Contract  $contract
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Contract $contract)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Contract  $contract
     * @return \Illuminate\Http\Response
     */
    public function destroy($contract)
    {
        try {
            Contract::FindorFail($contract)->delete();
            return response()->json(['msg'=>'Registro destruido']);
        } catch (\Throwable $th) {
            //throw $th;
            return response()->json(['msg'=>$th]);
        }
    }
}
