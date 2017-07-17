<?php

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
	if (Auth::guard()->check()) {
        return redirect('/feed');
    }
    return view('welcome');
});

Auth::routes();

// User email verification
Route::get('register/verify/{token}', 'Auth\RegisterController@verify')->name('verify');

// User's activity feed
Route::get('/feed', 'FeedController@index')->name('feed')->middleware('auth');

// User profile
Route::get('/profile', 'ProfileController@index')->name('profile');
Route::post('/profile', 'ProfileController@store');
Route::get('/{username}', 'ProfileController@show');
