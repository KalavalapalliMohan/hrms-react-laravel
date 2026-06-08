<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\EmployeeController;

/*
|--------------------------------------------------------------------------
| Public Routes
|--------------------------------------------------------------------------
*/

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

/*
|--------------------------------------------------------------------------
| Protected Routes
|--------------------------------------------------------------------------
*/

Route::middleware('auth:sanctum')->group(function () {

    // Auth
    Route::get('/profile', [AuthController::class, 'profile']);
    Route::post('/logout', [AuthController::class, 'logout']);

    /*
    |--------------------------------------------------------------------------
    | Admin + HR
    |--------------------------------------------------------------------------
    */

    Route::get(
        '/employees',
        [EmployeeController::class, 'index']
    )->middleware('role:admin,hr');

    Route::get(
        '/employees/{employee}',
        [EmployeeController::class, 'show']
    )->middleware('role:admin,hr');

    Route::post(
        '/employees',
        [EmployeeController::class, 'store']
    )->middleware('role:admin,hr');

    /*
    |--------------------------------------------------------------------------
    | Admin Only
    |--------------------------------------------------------------------------
    */

    Route::put(
        '/employees/{employee}',
        [EmployeeController::class, 'update']
    )->middleware('role:admin');

    Route::delete(
        '/employees/{employee}',
        [EmployeeController::class, 'destroy']
    )->middleware('role:admin');
});