 
$(document).ready(function(){
	$('#register').click(function(){
	 
	 var txtFldData,gender,a = [],obj,obj1,myJSON,myJSON1,count = 0;
	 var passwordCh =  /^[A-Za-z0-9!@#$%^&*()_]{6,15}$/;
	 var emailCh = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	 var nameCh = /^[A-Za-z]{3,20}$/;
	 var phoneNo = /^\d{6,10}$/;
	 var zipCh = /^\d{6}$/;
	 var dob =/^([0-9]{1,2})\/([0-9]{1,2})\/([0-9]{4})$/;
	 for(i=0;i<=14;i++)
	 {
		a[i] = $('#c'+i).val();
	 }
	 console.log('taking data completed.\n');
	 
	 for( i = 0 ; i <= 10 ; i++){
		 if( i == 4){
			 i = 7;
			 }
		 else if(nameCh.test(a[i])){
			}
		 else{
			 fos(i);
			 }
	}
	 
	 	 
	 if($('#c15').is(':checked'))
	 {
		 gender = 'male';		 
	 } 
	 else if($('#c16').is(':checked'))
		{
		 gender = 'female';
		}
	 else 
	 {	
		fos(15);
	 }	 
	 
	
	  if(!(phoneNo.test(a[4])))
	 {
		 fos(4);
	 }
	 if(!(dob.test(a[5])))
	 {
		  fos(5);
	 }
	 if(!(a[6]&& a[6]!=" "&&a[7]&&a[7]!= " "))
	 {
		  fos(6);
	 }
	 if(!(zipCh.test(a[11])))
	 {
		  fos(11);
	 }
	 if(!(emailCh.test(a[12])))
	 {
		 fos(12);
	 }
	 if(!(passwordCh.test(a[13])&& a[13]==a[14]))
	 {
		 fos(13);
	 }
	 alert('Successfully Registered');
	 function fos(i)
	 {
		$('#c'+i).focus()
		$('#cc'+i).css('display', 'inline').fadeOut(4000);
		$('#c'+i).css('color','red');
		throw new Error('This is not an error. This is just to abort javascript');
	 }
	 
	 
	obj = { "firstname":a[0], "lastname":a[1],"middlename":a[2],"nickname":a[3],"mobile":a[4],"bday":a[5],"gender":gender,"address":a[6],"address1":a[7],"city":a[8],"country":a[9],"state":a[10],"zip":a[11]}; 
	obj1 = { "email":a[12],"pwd":a[13],"cnfpwd":a[14]};
	myJSON = JSON.stringify(obj);
	myJSON1 = JSON.stringify(obj1);
	localStorage.setItem('a'+a[12], myJSON);
	localStorage.setItem(a[12], myJSON1);																		
	ln = {'ln':'1'};
	obj = JSON.stringify(ln);
	localStorage.setItem('ln'+a[12],obj);	
	
});
});