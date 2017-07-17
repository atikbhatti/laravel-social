@extends('layouts.app')

@section('title', Auth::user()->first_name .' '. Auth::user()->last_name)

@section('content')
<div class="container" id="profile">
    <div class="row panel">
        <div class="col-md-4 bg_blur ">
            <a href="#" class="follow_btn hidden-xs">Follow</a>
        </div>
        <div class="col-md-8  col-xs-12">
           <img src="http://lorempixel.com/output/people-q-c-100-100-1.jpg" class="img-thumbnail picture hidden-xs" />
           <img src="http://lorempixel.com/output/people-q-c-100-100-1.jpg" class="img-thumbnail visible-xs picture_mob" />
           <div class="header">
                <h1>{{ $user->first_name.' '.$user->last_name }}</h1>
                <h4>Full Stack Developer</h4>
                <span>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</span>
           </div>
        </div>
    </div>   
    
    <div class="row nav">    
        <div class="col-md-4"></div>
        <div class="col-md-8 col-xs-12" style="margin: 0px;padding: 0px;">
            <div class="col-md-4 col-xs-4 well"><i class="fa fa-weixin fa-lg"></i> 16</div>
            <div class="col-md-4 col-xs-4 well"><i class="fa fa-heart-o fa-lg"></i> 14</div>
            <div class="col-md-4 col-xs-4 well"><i class="fa fa-thumbs-o-up fa-lg"></i> 26</div>
        </div>
    </div>
</div>
@endsection
