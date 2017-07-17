<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Auth;

class ProfileController extends Controller
{
    /**
     * User's profile
     *
     * @return \Illuminate\Http\Response
     */

    public function index()
    {
        return view('profile.index')->with(['user' => Auth::user()]);
    }

    public function store(Request $request)
    {
        $messages = [
            'first_name.required'   =>  'Your First Name is required.',
            'last_name.required'    =>  'Your Last Name is required.'
        ];

        $this->validate($request, [
            'first_name' => 'required|alpha_num|max:32',
            'last_name' => 'required|alpha_num|max:32'
        ], $messages);

        $user = User::findOrFail(Auth::id());

        $data = ['first_name' => $request->first_name,
                'last_name' => $request->last_name,
                ];

        $user->update($data);
        $user->save();

        return redirect()->action('ProfileController@index');
    }

    public function show($username)
    {
    	$username = ltrim($username, '@');

    	$user = User::where(['username' => $username])->firstOrFail();

    	return view('profile.show')->with(['user' => Auth::user()]);
    }
}
