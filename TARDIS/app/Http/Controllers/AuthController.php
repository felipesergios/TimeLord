<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\Auth\LoginService;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    private $loginService;
    public function __construct(LoginService $loginService)
    {
        $this->loginService = $loginService;
    }
    public function login(Request $req)
    {
        try {
            $credentials = $req->only('email','password');
            $auth = $this->loginService->execute($credentials);
            return response()->json(['status'=>true,$auth],200);
        } catch (\Exception $exception) {
            return response()->json(['error'=>true,'message'=>$exception->getMessage()],$exception->getCode());
        }
    }


    public function me(Request $req)
    {
        try {
            return response()->json([Auth::user()],200);
        } catch (\Exception $exception) {
            return response()->json(['error'=>true,'message'=>$exception->getMessage()],$exception->getCode());
        }
    }

    public function logout(Request $req)
    {
        try {
            Auth::logout(true);
        } catch (\Exception $exception) {
            return response()->json(['error'=>true,'message'=>$exception->getMessage()],$exception->getCode());
        }
    }
}
