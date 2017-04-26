$(document).ready(function() {
$('#submit').click(function(ev){
			var user_name=$('#create-email').val();
			if(user_name){
			$.ajax({
					url: "ajax/check_user.php",
					data:{'user_name':user_name},
					success:function(responseText){
					if(responseText)
					{
					$('#create-email').val('');
					$('#create-email').css('border-color','red');
					$('#create-email').focus();
					}
					else
					{
						$('#create-email').css('border-color','');
					}
					},
				})
			}
			});
$('#changesubmit').click(function(ev){
			var user_name=$('#create-email').val();
			if(user_name){
			$.ajax({
					url: "ajax/check_user.php",
					data:{'user_name':user_name},
					success:function(responseText){
					if(responseText)
					{
					alert('user name exist');
					$('#create-email').val('');
					$('#create-email').css('border-color','red');
					$('#create-email').focus();
					return false;
					}
					else
					{
						$('#create-email').css('border-color','');
						$('#changForm').submit();
					}
					},
				})
			}
			});
window.fbAsyncInit = function() {
  FB.init({
    appId      : 405771722849136, // App ID
    channelUrl : 'http://localhost/nexpick_0.4/', // Channel File
    cookie     : true,  // enable cookies to allow the server to access 
                       // the session
	status     : false,
    xfbml      : true,  // parse social plugins on this page
    version    : 'v2.1' // use version 2.1
  });

  // Now that we've initialized the JavaScript SDK, we call 
  // FB.getLoginStatus().  This function gets the state of the
  // person visiting this page and can return one of three states to
  // the callback you provide.  They can be:
  //
  // 1. Logged into your app ('connected')
  // 2. Logged into Facebook, but not your app ('not_authorized')
  // 3. Not logged into Facebook and can't tell if they are logged into
  //    your app or not.
  //
  // These three cases are handled in the callback function.
  
  /*FB.getLoginStatus(function(response) {
  console.log('pardeep'+response.status);
   // statusChangeCallback(response);
  });*/

  };
  $('.fblogin').click(function(){
			FB.login(facebookLoginCall,{scope: 'email'});
  });

  // Load the SDK asynchronously
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

}); 

function facebookLoginCall (response)
{
if(response.authResponse) {
				/*if($("#myModal").css('display')=='block') {
					window.location.hash = "loading";
				}*/
				var access_token =   FB.getAuthResponse()['accessToken'];
				FB.api('/me', function(response) {
				if(response.id)
					{
					var email=response.email;
					var  image= 'http://graph.facebook.com/' + response.id + '/picture/?width=180&height=180';
					var first_name=response.first_name;
					var second_name=response.last_name;
					$.ajax({
					url: "ajax/fblogin.php",
					data:{'email':email,'image':image,'first_name':first_name,'second_name':second_name},
					success:function(responseText){
					if(responseText)
					{
					window.location.href ='profile.php';
					}
					},
						error:function(){
							//$('#myModal').modal('hide');
							//TimesCity.loginHeader.viewChangedToLoggedOut();
						}
					})
					}
					else
					{
					alert('problem in fb login');
					return false;
					}
				});
			}
			
			
	
}