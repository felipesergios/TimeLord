<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;

class RegisterController extends Controller
{
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'email'=>'required|string|email|max:200|unique:users',
            'name'=>'required',
            'password'=>'required'
        ]);
        if($validator->fails())
        {
            return response()->json($validator->errors());
        }
        $new_user = User::create([
            'name'=> $request->get('name'),
            'email'=> $request->get('email'),
            'password'=> bcrypt($request->get('password')),
        ]);

        $token = JWTAuth::fromUser($new_user);

        return response()->json([$token]);
        

    }
}
