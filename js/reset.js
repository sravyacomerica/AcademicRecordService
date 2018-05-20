 $(document).ready(function(){
	$("#reset").click(function(){
	 var i ;
	 for(i=0;i<=14;i++)
	 {
		 $('#c'+i).val('');		
	 }
	 $("#male").prop("checked", false);
	 console.log($('#male').is(':checked'));
	 $("#female").prop("checked", false);
	 alert("Reset Successful");
 });
 });