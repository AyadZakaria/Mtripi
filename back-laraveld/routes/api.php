<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\UserController;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

 
Route::post('login', [AuthController::class,'login']);
Route::post('signup', [AuthController::class,'registre']);
Route::put('user/{id}',[UserController::class,'update'] );
Route::patch('editpost/{id}',[PostController::class,'postUpdate'] );
Route::post('addpost',[PostController::class,'store'] );
Route::get('Profile',[PostController::class,'show'] );
Route::get('profile/{id}',[PostController::class,'showprofile'] );
Route::get('posts',[PostController::class,'index'] );
Route::delete('destroypost/{id}',[PostController::class,'destroyPost'] );


Route::group(['middleware'=>'api'],function(){
    Route::post('logout', [AuthController::class,'logout']);
    Route::post('refresh', [AuthController::class,'refresh']);
    Route::post('me', [AuthController::class,'me']);

});

