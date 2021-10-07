<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Route;

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

Route::get('/posts', function () {
    try {
        $curl = curl_init();
        curl_setopt_array($curl, array(
            CURLOPT_URL => 'https://dev.to/api/articles/me',
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => '',
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 600,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => 'GET',
            CURLOPT_HTTPHEADER => array(
                'api-key: eu5yT5cYajfrGjj9WKR492eK',
            ),
        ));

        $response = curl_exec($curl);

        curl_close($curl);

        return response()->json(
            json_decode($response)
        );
    } catch (Exception $exception) {
        Log::error($exception->getMessage());
        return response()->json([], 500);
    }
});
