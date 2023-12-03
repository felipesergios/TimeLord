<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\ContractController;
use App\Http\Controllers\AdditiveController;
use App\Http\Controllers\SeiController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/* Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
}); */

   
    /* Route::get('/', function (Request $request) {
        return response()->json(['api_name'=>'APP-V0.0.1','api_auth_type'=>'JWT']);
    }); */

    Route::get('teste', [ContractController::class,'teste']);

    Route::post('login', [AuthController::class,'login']);
   
    Route::post('logout', [AuthController::class,'logout']);

    Route::post('register', [RegisterController::class,'register']);


    Route::group(['middleware'=>'jwt.auth'],function(){

        Route::get('/', function (Request $request) {
            return response()->json(['api_name'=>'APP-V0.0.1','api_auth_type'=>'JWT']);
        });

        Route::post('me', [AuthController::class,'me']);
       
       // Route::resource('contract', ContractController::class)->only([
       //     'index', 'store' , 'show'
       // ]);
        Route::resource('contract',ContractController::class);
        Route::post('additives/register', [AdditiveController::class,'store']);

    });
    
