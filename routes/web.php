<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
 */

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
});

Route::get('/contact', function () {
    return Inertia::render('Contact');
})->name('contact');

Route::get('/portfolio', function (Request $request) {
    return Inertia::render('Portfolio', array(
        'ip' => $request->ip(),
    ));
});

Route::get('/blog', function (Request $request) {
    return Inertia::render('Blog', array(
        'ip' => $request->ip(),
    ));
});

Route::get('/blog/{slug}/{post_id}', function (Request $request, $slug, $post_id) {
    try {
        $curl = curl_init();
        curl_setopt_array($curl, array(
            CURLOPT_URL => "https://dev.to/api/articles/$post_id",
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

        return Inertia::render('Post', array(
            'ip' => $request->ip(),
            "slug" => $slug,
            "post_id" => $post_id,
            "post" => json_decode($response),
        ));
    } catch (Exception $exception) {
        Log::error($exception->getMessage());
        throw new Exception($exception->getMessage());
    }
});

Route::post('/contact', "App\Http\Controllers\HomeController@contactForm");

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__ . '/auth.php';
