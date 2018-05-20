$(document).ready(function(){
	$('#login').click(function(){
	
	var email,pwd,loginChk,obi,json,obj;
	email = $('#email').val();
	pwd = $('#pwd').val();
	loginChk = localStorage.getItem(email);
	obi = JSON.parse(loginChk);
	console.log(loginChk);
	console.log(typeof loginChk);
	if(!loginChk)
	{
	alert("Please Enter Valid Email ID or Register");
	}
	else
	{
		if(pwd == obi.pwd )
		{
			window.location="userprofile.html";
			json = {"email":email};
			obj  = JSON.stringify(json);
			localStorage.setItem("email",obj);
		}
		else
		{
			alert("Please Enter Valid Password");
		}
	}
});
});