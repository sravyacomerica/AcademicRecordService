 
 
 
 function registerReset()
 {
	 var i ;
	 for(i=0;i<=14;i++)
	 {
		 document.getElementById("c+"+i).value="";
	 }
	 document.getElementById("male").checked = false;
	 document.getElementById("female").checked = false;
	 alert("Reset Successful");
 }
 
 
 
 function register()
 {
	 
	 var txtFldData,gender,a = [],obj,obj1,myJSON,myJSON1;
	 var passwordCh =  /^[A-Za-z0-9!@#$%^&*()_]{6,15}$/;
	 var emailCh = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	 var nameCh = /^[A-Za-z]{3,20}$/;
	 var phoneNo = /^\d{6,10}$/;
	 var zipCh = /^\d{6}$/;
	 var dob =/^([0-9]{1,2})\/([0-9]{1,2})\/([0-9]{4})$/;
	 for(i=0;i<=14;i++)
	 {
		txtFldData = document.getElementById("c+"+i);
		a[i] = txtFldData.value;
	 }
	 
	 if(document.getElementById("male").checked)
	 {
		 console.log(document.getElementById("male").checked);
		 gender = 'male';		 
	 }
	 else if(document.getElementById("female").checked)
	 {
		 console.log(document.getElementById("female").checked)
		 gender = 'female';
	 }
	 
	 
	 if(nameCh.test(a[0]))
	 {
		 if(nameCh.test(a[1]))
		{
			if(nameCh.test(a[2]))
			{
				if(nameCh.test(a[3]))
				{
					if(phoneNo.test(a[4]))
					{
						if(dob.test(a[5]))
						{
							if(nameCh.test(a[8]))
							{
								if(nameCh.test(a[9]))
								{
										if(nameCh.test(a[10]))
										{
												if(zipCh.test(a[11]))
												{
													if(emailCh.test(a[12]))
													{
														if(passwordCh.test(a[13])&& a[13]==a[14])
														{
															if(gender)
															{																														
																 if(a[6]&& a[6]!=" ")
																 {
																	 if(a[7]&&a[7]!= " ")
																	 {
																		obj = { "firstname":a[0], "lastname":a[1],"middlename":a[2],"nickname":a[3],"mobile":a[4],"bday":a[5],"gender":gender,"address":a[6],"address1":a[7],"city":a[8],"country":a[9],"state":a[10],"zip":a[11]}; 
																		 obj1 = { "email":a[12],"pwd":a[13],"cnfpwd":a[14]};
																		//console.log(a[0]);
																		 myJSON = JSON.stringify(obj);
																		 myJSON1 = JSON.stringify(obj1);
																		localStorage.setItem('a'+a[12], myJSON);
																		localStorage.setItem(a[12], myJSON1);
																		alert("Register Successful") ;
																		 
																		 
																		 
																	 }
																	 else
																	 {
																		 alert("Please Enter Valid Address1")
																	 }
																 }
																 else
																 {
																	 alert("Please Enter Valid Address")
																 }														
															}
															else
															{
																alert("Please select Gender");
															}
															
															
														}
														else
														{
															alert("Please Check Your Password MIN 6 and MAX 15")
														}
													}
													else
													{
														alert("Please Enter Valid Mail ID");
													}
												}
												else
												{
													alert("please enter valid ZIP");
												}
										}
										else
										{
											alert("Please Enter Valid state");
										}
									
								}
								else
								{
									alert("Please Enter valid Counry ");
								}
								
							}
							else
							{
								alert("Please Enter Valid CityTown");
							}
													
						}
						else
						{
							alert(" Please Enter Valid DOB");
						}
						
					}
					else
					{
						alert("Please Ente valid Phone Number");
					}
				}
				 else
				{
					alert(" Please Enter valid nick Name:");
				}
	
				
				
			}
			else
			{
					alert(" Please  Enter valid Middle Name:");
			}
			
		}
		  else
		{
			alert(" Please Enter valid Lastname:");
		}
	
	 }
	 else
	 {
		 alert("Please Enter Valid FirstName:");
	 }
	 
	 
	 
	 
}
 
 
 function addeduDetails()
 
 {
	 var object,email,eduDetails, arrayToStoreData = [],j,myJSON,obj,obj1;
	 email = localStorage.getItem("email") ;
	 object = JSON.parse(email);
	 for(j=0;j<4;j++)
	 {
		 eduDetails = document.getElementById("d+"+j);
		 arrayToStoreData[j] = eduDetails.value;
	 }
	myJSON = {"school":arrayToStoreData[0],"degree":arrayToStoreData[1],"study":arrayToStoreData[2],"cdate":arrayToStoreData[3]};
	obj = JSON.stringify(myJSON);
	localStorage.setItem("ab"+object.email,obj);
	obj1 = localStorage.getItem('ab'+object.email);
	eduDetails = JSON.parse(obj1);
	console.log(eduDetails);
	 document.getElementById("a+0").innerHTML = eduDetails.school;
	 document.getElementById("a+1").innerHTML = eduDetails.degree;
	 document.getElementById("a+2").innerHTML = eduDetails.study;
	 document.getElementById("a+3").innerHTML = eduDetails.cdate;
		
		 for(j=0;j<4;j++)
	 {
		 eduDetails = document.getElementById("d+"+j);
		 eduDetails.value ="";
		 
	 }
	 
 }
 
 
 
 
 
 
 function deleteEduDetaisl()
 {
	var email,object;
	email = localStorage.getItem("email") ;
	object = JSON.parse(email);
	localStorage.removeItem("ab"+object.email);
 }

 
 
 
 
 
 function logout()
 {
	
	localStorage.removeItem("email");
	window.location="logout.html";
	for(i=0;i<12;i++)
	{
		document.getElementById("b+"+i).value = "";
	}
	
		document.getElementById("male").checked = false;
		document.getElementById("female").checked = false;
		alert("Logged Out Successful");
		

}
 
 
 
 
 
 function login()
 {
	var email,pwd,loginChk,obi,json,obj;
	email = document.getElementById("email").value;
	pwd = document.getElementById("pwd").value;
	loginChk = localStorage.getItem(email);
	obi = JSON.parse(loginChk);
	console.log(loginChk);
	console.log(typeof loginChk);
	if(!loginChk)
	{
	//document.getElementById("error").innerHTML = 'email wrong';
	console.log("if entered");
	alert("Please Enter Valid Email ID or Register");
	}
	else
	{
		if(pwd == obi.pwd )
		{
			console.log("Password id correct");
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
	
	
	 }
	 
	 
	 
	 
	 
	 
 function userData()
 {
	var email,obj,userDetails,obj1,obj2,eduDetails;
	email = localStorage.getItem("email") ;
	obj = JSON.parse(email);
	userDetails = localStorage.getItem('a'+obj.email);
	obj1 = JSON.parse(userDetails);
	console.log(userDetails);
	document.getElementById("b+0").value = obj1.firstname;
	document.getElementById("b+1").value = obj1.lastname;
	document.getElementById("b+2").value = obj1.middlename;
	document.getElementById("b+3").value = obj1.nickname;
	document.getElementById("b+4").value = obj1.mobile;
	document.getElementById("b+5").value = obj1.bday;
	document.getElementById("b+6").value = obj1.address
	document.getElementById("b+7").value = obj1.address1;
	document.getElementById("b+8").value = obj1.city;
	document.getElementById("b+9").value = obj1.country;
	document.getElementById("b+10").value = obj1.state;
	document.getElementById("b+11").value = obj1.zip;
	
	if(obj1.gender == 'male')
	{
		document.getElementById("male").checked = true;
	}
	else
	{
		document.getElementById("female").checked = true;
	}
	
	obj2 = localStorage.getItem('ab'+obj.email);
	 console.log(obj2);
	eduDetails = JSON.parse(obj2);
	 console.log(eduDetails);
	 document.getElementById("a+0").innerHTML = eduDetails.school;
	 document.getElementById("a+1").innerHTML = eduDetails.degree;
	 document.getElementById("a+2").innerHTML = eduDetails.study;
	 document.getElementById("a+3").innerHTML = eduDetails.cdate;
 
 }
 
 function update()
 {
	 var i = 0,a = [] ,e,obj,myJSON,email,gender;
	 var passwordCh =  /^[A-Za-z0-9!@#$%^&*()_]{6,15}$/;
	 var emailCh = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	 var nameCh = /^[A-Za-z]{3,20}$/;
	 var phoneNo = /^\d{6,10}$/;
	 var zipCh = /^\d{6}$/;
	 var dob =/^([0-9]{1,2})\/([0-9]{1,2})\/([0-9]{4})$/;
	 for( i = 0; i <12;i++)
	 {
		 e = 'b+'+i; 
		 a[i] = document.getElementById(e).value;
		 console.log(e);
		 console.log(a[i]);
	 }
	 
	 if(document.getElementById("male").checked)
	 {
		 gender = "male";
	 }
	 else if(document.getElementById("female").checked)
	 {
		 gender = "female";
	 }
	 
	 
	 if(nameCh.test(a[0]))
	 {
		 if(nameCh.test(a[1]))
		{
			if(nameCh.test(a[2]))
			{
				if(nameCh.test(a[3]))
				{
					if(phoneNo.test(a[4]))
					{
						if(dob.test(a[5]))
						{
							if(nameCh.test(a[8]))
							{
								if(nameCh.test(a[9]))
								{
										if(nameCh.test(a[10]))
										{
												if(zipCh.test(a[11]))
												{
													if(gender)
													{															
														if(a[6]&& a[6]!=" ")
														{
															if(a[7]&&a[7]!= " ")
															{
																	obj = { "firstname":a[0], "lastname":a[1],"middlename":a[2],"nickname":a[3],"mobile":a[4],"bday":a[5],"gender":gender,"address":a[6],"address1":a[7],"city":a[8],"country":a[9],"state":a[10],"zip":a[11]}; 
																	myJSON = JSON.stringify(obj);
																	email = localStorage.getItem("email");
																	obj1 = JSON.parse(email);
																	localStorage.setItem("a"+obj1.email,myJSON);														 
																		 
														    }
																 else
																{
																		 alert("Please Enter Valid Address1")
																}
														}
														else
														{
															 alert("Please Enter Valid Address")
														}											
													}
													else
													{
																alert("Please select Gender");
													}
													
												}
												else
												{
													alert("please enter valid ZIP");
												}
										}
										else
										{
											alert("Please Enter Valid state");
										}
									
								}
								else
								{
									alert("Please Enter valid Counry ");
								}
								
							}
							else
							{
								alert("Please Enter Valid CityTown");
							}
													
						}
						else
						{
							alert(" Please Enter Valid DOB");
						}
						
					}
					else
					{
						alert("Please Ente valid Phone Number");
					}
				}
				 else
				{
					alert(" Please Enter valid nick Name:");
				}
	
				
				
			}
			else
			{
					alert(" Please  Enter valid Middle Name:");
			}
			
		}
		  else
		{
			alert(" Please Enter valid Lastname:");
		}
	
	 }
	 else
	 {
		 alert("Please Enter Valid FirstName:");
	 }
	 
 }
 
 
 
 
 function updatepassword()
 {
	var obj,email,emailId,pwd,cnfPwd,json,strgy;
	var passwordCh =  /^[A-Za-z0-9!@#$%^&*()_]{6,15}$/;
	  email = localStorage.getItem("email") ;
	  obj = JSON.parse(email);
	  emailId = document.getElementById("p+1").value;
	  pwd = document.getElementById("p+2").value;
	 cnfPwd = document.getElementById("p+3").value;
	if(passwordCh.test(pwd))
	{
		if(obj.email == emailId)
		{
		 if (pwd == cnfPwd)
		 {
			json = {"email":emailId,"pwd":pwd,"cnfpwd":cnfPwd};
			strgy = JSON.stringify(json);
			localStorage.setItem(obj.email,strgy);
			alert("Password Changed Successfully");
		 }
		 else
		 {
			alert("Password Is Not matched ");
		 }
		 
	}
	 else
	 {
		 alert("Please Enter Valid Email ID");
	 }
	}
	else
	{
		alert("Enter Valid Password");
	}
 }
 