<?php

namespace App\Services\Auth;

use DateTime;
use Illuminate\Support\Facades\Auth;
use Tymon\JWTAuth\Contracts\Providers\Auth as ProvidersAuth;
use Tymon\JWTAuth\Facades\JWTAuth;

class LoginService
{
    
    public function execute(array $credentials)
    {
       
       //$token = Auth::attempt($credentials);
       $token = Auth::attempt($credentials);
    

       //dd($token);
       if(!$token)
       {
        throw new \Exception($message="Not Authorized",$code=401);
       }
       return [
        'access_token'=>$token,
        'type'=>'Bearer',
        'user'=>Auth::user()
       ];
    }
}

?>