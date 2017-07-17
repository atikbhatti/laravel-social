@component('mail::message')
# Verify Your Email

Hello, {{ $user->first_name .' '. $user->last_name }}

Your username is <strong>{{ $user->username }}</strong>

You need to verify your email in order to complete registration process with us. Kindly click "Verify" button below to verify your email.

@component('mail::button', ['url' => URL::to('register/verify/' . $token), 'color' => 'green'])
Verify
@endcomponent

Thanks,<br/>
{{ config('app.name') }}

<hr/>
<p style="font-family:Avenir,Helvetica,sans-serif;box-sizing:border-box;text-align:left;margin-top:0;color:#74787e;font-size:12px;line-height:1.5em">
If you're having trouble clicking the "Verify" button, copy and paste the URL below into your web browser:</p>
<p style="font-family:Avenir,Helvetica,sans-serif;box-sizing:border-box;text-align:left;margin-top:0;color:#74787e;font-size:12px;line-height:1.5em">
	<a style="font-family:Avenir,Helvetica,sans-serif;box-sizing:border-box;color:#3869d4" href="{{ URL::to('register/verify/' . $token) }}" target="_blank">
	    {{ URL::to('register/verify/' . $token) }}
	</a>
</p>
@endcomponent