@extends('layouts.app')

@section('title', Auth::user()->first_name .' '. Auth::user()->last_name)

@section('content')
<div class="container" id="profile">
    <div class="row">
        <div class="col-md-3">
            <ul class="nav nav-pills nav-stacked">
                <li role="presentation" class="active"><a href="javascript:;">About</a></li>
                <li role="presentation"><a href="javascript:;">Work and Education</a></li>
                <li role="presentation"><a href="javascript:;">My Followers</a></li>
                <li role="presentation"><a href="javascript:;">People Following Me</a></li>
            </ul>
        </div>
        <div class="col-md-9">
            <div class="panel panel-default">
                <div class="panel-heading" id="section-title">About</div>

                <div class="panel-body">
                    <form class="form-horizontal profile-forms" role="form" method="POST" action="{{ url('/profile') }}">
                        
                        {{ csrf_field() }}

                        <div class="form-group{{ $errors->has('first_name') ? ' has-error' : '' }}">
                            <label for="name" class="col-md-4 control-label">First Name</label>

                            <div class="col-md-6">
                                <input id="name" type="text" class="form-control" name="first_name" value="{{ old('first_name') ?? $user->first_name }}" maxlength="32" required autofocus>

                                @if ($errors->has('first_name'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('first_name') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group{{ $errors->has('last_name') ? ' has-error' : '' }}">
                            <label for="name" class="col-md-4 control-label">Last Name</label>

                            <div class="col-md-6">
                                <input id="name" type="text" class="form-control" name="last_name" value="{{ old('last_name') ?? $user->last_name }}" maxlength="32" required autofocus>

                                @if ($errors->has('last_name'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('last_name') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <hr/>

                        <div class="form-group">
                            <label for="username" class="col-md-4 control-label">Username</label>

                            <div class="col-md-6">
                                <p class="form-control-static">
                                    <a href="/{{ '@'.$user->username }}">{{ '@'.$user->username }}</a>
                                </p>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="email" class="col-md-4 control-label">Email</label>

                            <div class="col-md-6">
                                <p class="form-control-static">
                                    {{ $user->email }}
                                    <small><a href="javascript:;">Change</a></small>
                                </p>
                            </div>
                        </div>

                        <button type="submit" class="col-xs-4 col-xs-offset-8 col-sm-2 col-sm-offset-10 btn btn-primary save-button"><i class="fa fa-floppy-o"></i> Save</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
