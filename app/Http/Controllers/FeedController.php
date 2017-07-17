<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FeedController extends Controller
{
	/**
     * Show user's activity feed
     *
     * @return \Illuminate\Http\Response
     */

    public function index()
    {
        return view('feed');
    }
}
