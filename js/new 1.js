function myfun()
{
		alert(" Rakesh ");
		var w = document.getElementById("name").value; 
		var y = document.getElementById("email").value; 
		var x = document.getElementById("pwd").value; 
		var z = document.getElementById("pwd1").value; 
		var namech = /^[A-Za-z]{3,20}$/;
		
		 if(x==z&&w!=""&& y!=""&&z!="")
		 {
				/*var email =  email();
				var t = true;*/
				
				if (namech.test(w))
				{	
					var passwordch =  /^[A-Za-z0-9!@#$%^&*()_]{6,15}$/;
					
						if(passwordch.test(x))
						{		
								var emailch = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
									if(emailch.test(y))
									{
												var listvalues = {"rak":[{ "name": w, "email": y, "pwd":z }]};
												localStorage.setItem('lists', JSON.stringify(listvalues)); 
												window.location="suc.html";
									}
									else
									{	
										alert("Enter Valid Email ID :");
									}
						}
						else
						{
							alert("Enter The Password MIN 6Chars and MAX 15 Chars ");
						}
				}
				else
				{
					alert("Please Enter Name Correctly ");
				}
		 }
		else
		{
			alert("Please Fill All Fields or \n Password Not Matched");
		}
}
