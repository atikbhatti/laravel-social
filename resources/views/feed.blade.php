@extends('layouts.app')

@section('title', 'Activity Feed')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-3">
            <div class="panel panel-default">
                <div class="panel-heading">Profile <a href="/profile" class="pull-right" style="color: #FFF; font-size: 14px;">Edit</a></div>

                <div class="panel-body">
                    {{ Auth::user()->first_name .' '. Auth::user()->last_name }}
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="panel panel-default">
                <div class="panel-heading">Stay updated... Your activity feed here!</div>

                <div class="panel-body">
                    
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="panel panel-default">
                <div class="panel-heading">People</div>

                <div class="panel-body">
                    People
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
