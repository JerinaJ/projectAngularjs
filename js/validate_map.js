function myFunction() {

     var x = document.getElementById("comSelect").value;
	 var y = document.getElementById("serSelect").value;
	 
/*SA- success*/
	 
	if( x == 'sa' && y == 'ts'){
		document.getElementById("map-sa").style.visibility= 'visible';
		document.getElementById("map-bha").style.visibility= 'hidden';
		document.getElementById("map-dbx").style.visibility= 'hidden';
		document.getElementById("map-be").style.visibility= 'hidden';
		document.getElementById("map-rm").style.visibility= 'hidden';
		document.getElementById("map-at").style.visibility= 'hidden';
		document.getElementById("map-be").style.visibility= 'hidden';
		document.getElementById("map-first").style.visibility= 'hidden';
		document.getElementById("dc_service").style.visibility= 'hidden';
	} 
	if( x == 'sa' && y == 'as'){
		document.getElementById("map-sa").style.visibility= 'visible';
		document.getElementById("map-bha").style.visibility= 'hidden';
		document.getElementById("map-dbx").style.visibility= 'hidden';
		document.getElementById("map-be").style.visibility= 'hidden';
		document.getElementById("map-rm").style.visibility= 'hidden';
		document.getElementById("map-at").style.visibility= 'hidden';
		document.getElementById("map-be").style.visibility= 'hidden';
		document.getElementById("map-first").style.visibility= 'hidden';
		document.getElementById("dc_service").style.visibility= 'hidden';
	}
	 if( x == 'sa' && y == 'cp'){	
	 	document.getElementById("map-sa").style.visibility= 'visible';
		document.getElementById("map-bha").style.visibility= 'hidden';
		document.getElementById("map-dbx").style.visibility= 'hidden';
		document.getElementById("map-be").style.visibility= 'hidden';
		document.getElementById("map-rm").style.visibility= 'hidden';
		document.getElementById("map-at").style.visibility= 'hidden';
		document.getElementById("map-be").style.visibility= 'hidden';
		document.getElementById("map-first").style.visibility= 'hidden';
		document.getElementById("dc_service").style.visibility= 'hidden';
	}
/*SA- success*/

/*Bha- success*/	 
	 
	if(x == 'ba' && y == 'sds'){	
		document.getElementById("map-bha").style.visibility= 'visible';
		document.getElementById("map-dbx").style.visibility= 'hidden';
		document.getElementById("map-be").style.visibility= 'hidden';
		document.getElementById("map-rm").style.visibility= 'hidden';
		document.getElementById("map-at").style.visibility= 'hidden';
		document.getElementById("map-be").style.visibility= 'hidden';
		document.getElementById("map-sa").style.visibility= 'hidden';
		document.getElementById("map-first").style.visibility= 'hidden';
		document.getElementById("dc_service").style.visibility= 'hidden';
	}
	if( x == 'ba' && y == 'ts'){	
		document.getElementById("map-bha").style.visibility= 'visible';
		document.getElementById("map-dbx").style.visibility= 'hidden';
		document.getElementById("map-be").style.visibility= 'hidden';
		document.getElementById("map-rm").style.visibility= 'hidden';
		document.getElementById("map-at").style.visibility= 'hidden';
		document.getElementById("map-be").style.visibility= 'hidden';
		document.getElementById("map-sa").style.visibility= 'hidden';
		document.getElementById("map-first").style.visibility= 'hidden';
		document.getElementById("dc_service").style.visibility= 'hidden';
	} 
	if( x == 'ba' && y == 'bds'){
		document.getElementById("map-bha").style.visibility= 'visible';
		document.getElementById("map-dbx").style.visibility= 'hidden';
		document.getElementById("map-be").style.visibility= 'hidden';
		document.getElementById("map-rm").style.visibility= 'hidden';
		document.getElementById("map-at").style.visibility= 'hidden';
		document.getElementById("map-be").style.visibility= 'hidden';
		document.getElementById("map-sa").style.visibility= 'hidden';
		document.getElementById("map-first").style.visibility= 'hidden';
		document.getElementById("dc_service").style.visibility= 'hidden';
	} 
/*Bha- success*/	
	
/*Dbx- success*/
	if(x == 'db' && y == 'as'){	
		document.getElementById("map-dbx").style.visibility= 'visible';
		document.getElementById("map-be").style.visibility= 'hidden';
		document.getElementById("map-rm").style.visibility= 'hidden';
		document.getElementById("map-at").style.visibility= 'hidden';
		document.getElementById("map-be").style.visibility= 'hidden';
		document.getElementById("map-bha").style.visibility= 'hidden';
		document.getElementById("map-sa").style.visibility= 'hidden';
		document.getElementById("map-first").style.visibility= 'hidden';
		document.getElementById("dc_service").style.visibility= 'hidden';		
	}
	if( x == 'db' && y == 'coa'){		
		document.getElementById("map-dbx").style.visibility= 'visible';
		document.getElementById("map-be").style.visibility= 'hidden';
		document.getElementById("map-rm").style.visibility= 'hidden';
		document.getElementById("map-at").style.visibility= 'hidden';
		document.getElementById("map-be").style.visibility= 'hidden';
		document.getElementById("map-bha").style.visibility= 'hidden';
		document.getElementById("map-sa").style.visibility= 'hidden';
		document.getElementById("map-first").style.visibility= 'hidden';
		document.getElementById("dc_service").style.visibility= 'hidden';
	} 
	if( x == 'db' && y == 'nm'){		
		document.getElementById("map-dbx").style.visibility= 'visible';
		document.getElementById("map-be").style.visibility= 'hidden';
		document.getElementById("map-rm").style.visibility= 'hidden';
		document.getElementById("map-at").style.visibility= 'hidden';
		document.getElementById("map-be").style.visibility= 'hidden';
		document.getElementById("map-bha").style.visibility= 'hidden';
		document.getElementById("map-sa").style.visibility= 'hidden';
		document.getElementById("map-first").style.visibility= 'hidden';
		document.getElementById("dc_service").style.visibility= 'hidden';
	} 
	if( x == 'db' && y == 'ccc'){	
		document.getElementById("map-dbx").style.visibility= 'visible';
		document.getElementById("map-be").style.visibility= 'hidden';
		document.getElementById("map-rm").style.visibility= 'hidden';
		document.getElementById("map-at").style.visibility= 'hidden';
		document.getElementById("map-be").style.visibility= 'hidden';
		document.getElementById("map-bha").style.visibility= 'hidden';
		document.getElementById("map-sa").style.visibility= 'hidden';
		document.getElementById("map-first").style.visibility= 'hidden';
		document.getElementById("dc_service").style.visibility= 'hidden';
	}
/*Dbx- success*/	

/*Beirut- success*/
if(x == 'be' && y == 'as'){	
		document.getElementById("map-be").style.visibility= 'visible';
		document.getElementById("map-rm").style.visibility= 'hidden';
		document.getElementById("map-at").style.visibility= 'hidden';
		document.getElementById("map-be").style.visibility= 'hidden';
		document.getElementById("map-dbx").style.visibility= 'hidden';
		document.getElementById("map-bha").style.visibility= 'hidden';
		document.getElementById("map-sa").style.visibility= 'hidden';
		document.getElementById("map-first").style.visibility= 'hidden';
		document.getElementById("dc_service").style.visibility= 'hidden';	
	}
	if( x == 'be' && y == 'cp'){	
		document.getElementById("map-be").style.visibility= 'visible';
		document.getElementById("map-rm").style.visibility= 'hidden';
		document.getElementById("map-at").style.visibility= 'hidden';
		document.getElementById("map-be").style.visibility= 'hidden';
		document.getElementById("map-dbx").style.visibility= 'hidden';
		document.getElementById("map-bha").style.visibility= 'hidden';
		document.getElementById("map-sa").style.visibility= 'hidden';
		document.getElementById("map-first").style.visibility= 'hidden';
		document.getElementById("dc_service").style.visibility= 'hidden';
	} 
	if( x == 'be' && y == 'coa'){		
		document.getElementById("map-be").style.visibility= 'visible';
		document.getElementById("map-rm").style.visibility= 'hidden';
		document.getElementById("map-at").style.visibility= 'hidden';
		document.getElementById("map-be").style.visibility= 'hidden';
		document.getElementById("map-dbx").style.visibility= 'hidden';
		document.getElementById("map-bha").style.visibility= 'hidden';
		document.getElementById("map-sa").style.visibility= 'hidden';
		document.getElementById("map-first").style.visibility= 'hidden';
		document.getElementById("dc_service").style.visibility= 'hidden';
	} 
	if( x == 'be' && y == 'nm'){	
		document.getElementById("map-be").style.visibility= 'visible';
		document.getElementById("map-rm").style.visibility= 'hidden';
		document.getElementById("map-at").style.visibility= 'hidden';
		document.getElementById("map-be").style.visibility= 'hidden';
		document.getElementById("map-dbx").style.visibility= 'hidden';
		document.getElementById("map-bha").style.visibility= 'hidden';
		document.getElementById("map-sa").style.visibility= 'hidden';
		document.getElementById("map-first").style.visibility= 'hidden';
		document.getElementById("dc_service").style.visibility= 'hidden';
	}

/*Beirut- success*/


/*Ca- success*/	
	if( x == 'ca' && y == 'cp'){
		document.getElementById("map-ca").style.visibility= 'visible';
		document.getElementById("map-rm").style.visibility= 'hidden';
		document.getElementById("map-at").style.visibility= 'hidden';
		document.getElementById("map-be").style.visibility= 'hidden';
		document.getElementById("map-dbx").style.visibility= 'hidden';
		document.getElementById("map-bha").style.visibility= 'hidden';
		document.getElementById("map-sa").style.visibility= 'hidden';
		document.getElementById("map-first").style.visibility= 'hidden';
		document.getElementById("dc_service").style.visibility= 'hidden';
	} 
/*Ca- success*/	

/*Rome success*/
if(x == 'rm' && y == 'sds'){		
		document.getElementById("map-rm").style.visibility= 'visible';
		document.getElementById("map-ca").style.visibility= 'hidden';
		document.getElementById("map-at").style.visibility= 'hidden';
		document.getElementById("map-be").style.visibility= 'hidden';
		document.getElementById("map-dbx").style.visibility= 'hidden';
		document.getElementById("map-bha").style.visibility= 'hidden';
		document.getElementById("map-sa").style.visibility= 'hidden';
		document.getElementById("map-first").style.visibility= 'hidden';
		document.getElementById("dc_service").style.visibility= 'hidden';
		
	}
	if( x == 'rm' && y == 'ts'){	
		document.getElementById("map-rm").style.visibility= 'visible';
		document.getElementById("map-ca").style.visibility= 'hidden';
		document.getElementById("map-at").style.visibility= 'hidden';
		document.getElementById("map-be").style.visibility= 'hidden';
		document.getElementById("map-dbx").style.visibility= 'hidden';
		document.getElementById("map-bha").style.visibility= 'hidden';
		document.getElementById("map-sa").style.visibility= 'hidden';
		document.getElementById("map-first").style.visibility= 'hidden';
		document.getElementById("dc_service").style.visibility= 'hidden';
	} 
	if( x == 'rm' && y == 'bds'){		
		document.getElementById("map-rm").style.visibility= 'visible';
		document.getElementById("map-ca").style.visibility= 'hidden';
		document.getElementById("map-at").style.visibility= 'hidden';
		document.getElementById("map-be").style.visibility= 'hidden';
		document.getElementById("map-dbx").style.visibility= 'hidden';
		document.getElementById("map-bha").style.visibility= 'hidden';
		document.getElementById("map-sa").style.visibility= 'hidden';
		document.getElementById("map-first").style.visibility= 'hidden';
		document.getElementById("dc_service").style.visibility= 'hidden';
	} 
	if( x == 'rm' && y == 'tds'){		
		document.getElementById("map-rm").style.visibility= 'visible';
		document.getElementById("map-ca").style.visibility= 'hidden';
		document.getElementById("map-at").style.visibility= 'hidden';
		document.getElementById("map-be").style.visibility= 'hidden';
		document.getElementById("map-dbx").style.visibility= 'hidden';
		document.getElementById("map-bha").style.visibility= 'hidden';
		document.getElementById("map-sa").style.visibility= 'hidden';
		document.getElementById("map-first").style.visibility= 'hidden';
		document.getElementById("dc_service").style.visibility= 'hidden';
	}
	if( x == 'rm' && y == 'nm'){		
		document.getElementById("map-rm").style.visibility= 'visible';
		document.getElementById("map-ca").style.visibility= 'hidden';
		document.getElementById("map-at").style.visibility= 'hidden';
		document.getElementById("map-be").style.visibility= 'hidden';
		document.getElementById("map-dbx").style.visibility= 'hidden';
		document.getElementById("map-bha").style.visibility= 'hidden';
		document.getElementById("map-sa").style.visibility= 'hidden';
		document.getElementById("map-first").style.visibility= 'hidden';
		document.getElementById("dc_service").style.visibility= 'hidden';
	}

/*Rome success*/

/*Rome success*/
if(x == 'at' && y == 'sds'){		
		document.getElementById("map-at").style.visibility= 'visible';
		document.getElementById("map-ca").style.visibility= 'hidden';
		document.getElementById("map-rm").style.visibility= 'hidden';
		document.getElementById("map-be").style.visibility= 'hidden';
		document.getElementById("map-dbx").style.visibility= 'hidden';
		document.getElementById("map-bha").style.visibility= 'hidden';
		document.getElementById("map-sa").style.visibility= 'hidden';
		document.getElementById("map-first").style.visibility= 'hidden';
		document.getElementById("dc_service").style.visibility= 'hidden';		
	}
	if( x == 'at' && y == 'ts'){		
		document.getElementById("map-at").style.visibility= 'visible';
		document.getElementById("map-ca").style.visibility= 'hidden';
		document.getElementById("map-rm").style.visibility= 'hidden';
		document.getElementById("map-be").style.visibility= 'hidden';
		document.getElementById("map-dbx").style.visibility= 'hidden';
		document.getElementById("map-bha").style.visibility= 'hidden';
		document.getElementById("map-sa").style.visibility= 'hidden';
		document.getElementById("map-first").style.visibility= 'hidden';
		document.getElementById("dc_service").style.visibility= 'hidden';
	} 
/*Rome success*/


	
/*SA- Fail*/
	
	else if(x == 'sa' && y == 'sds'){
		document.getElementById("map-sa").style.visibility= 'hidden';
		document.getElementById("map-bha").style.visibility= 'hidden';
		document.getElementById("map-dbx").style.visibility= 'hidden';
		document.getElementById("map-be").style.visibility= 'hidden';
		document.getElementById("map-rm").style.visibility= 'hidden';
		document.getElementById("map-at").style.visibility= 'hidden';
		document.getElementById("map-be").style.visibility= 'hidden';
		document.getElementById("map-first").style.visibility= 'hidden';
		document.getElementById("dc_service").style.visibility= 'visible';
	}
	else if(x == 'sa' && y == 'bds'){
		document.getElementById("map-sa").style.visibility= 'hidden';
		document.getElementById("map-bha").style.visibility= 'hidden';
		document.getElementById("map-dbx").style.visibility= 'hidden';
		document.getElementById("map-be").style.visibility= 'hidden';
		document.getElementById("map-rm").style.visibility= 'hidden';
		document.getElementById("map-at").style.visibility= 'hidden';
		document.getElementById("map-first").style.visibility= 'hidden';
		document.getElementById("dc_service").style.visibility= 'visible';
	}
	else if(x == 'sa' && y == 'tds'){
		document.getElementById("map-sa").style.visibility= 'hidden';
		document.getElementById("map-bha").style.visibility= 'hidden';
		document.getElementById("map-dbx").style.visibility= 'hidden';
		document.getElementById("map-be").style.visibility= 'hidden';
		document.getElementById("map-rm").style.visibility= 'hidden';
		document.getElementById("map-at").style.visibility= 'hidden';
		document.getElementById("map-first").style.visibility= 'hidden';
		document.getElementById("dc_service").style.visibility= 'visible';
	}
	else if(x == 'sa' && y == 'vs'){
		document.getElementById("map-sa").style.visibility= 'hidden';
		document.getElementById("map-bha").style.visibility= 'hidden';
		document.getElementById("map-dbx").style.visibility= 'hidden';
		document.getElementById("map-be").style.visibility= 'hidden';
		document.getElementById("map-rm").style.visibility= 'hidden';
		document.getElementById("map-at").style.visibility= 'hidden';
		document.getElementById("map-first").style.visibility= 'hidden';
		document.getElementById("dc_service").style.visibility= 'visible';
	}
	else if(x == 'sa' && y == 'coa'){
		document.getElementById("map-sa").style.visibility= 'hidden';
		document.getElementById("map-bha").style.visibility= 'hidden';
		document.getElementById("map-dbx").style.visibility= 'hidden';
		document.getElementById("map-be").style.visibility= 'hidden';
		document.getElementById("map-rm").style.visibility= 'hidden';
		document.getElementById("map-at").style.visibility= 'hidden';
		document.getElementById("map-first").style.visibility= 'hidden';
		document.getElementById("dc_service").style.visibility= 'visible';
	}
	else if(x == 'sa' && y == 'nm'){
		document.getElementById("map-sa").style.visibility= 'hidden';
		document.getElementById("map-bha").style.visibility= 'hidden';
		document.getElementById("map-dbx").style.visibility= 'hidden';
		document.getElementById("map-be").style.visibility= 'hidden';
		document.getElementById("map-rm").style.visibility= 'hidden';
		document.getElementById("map-at").style.visibility= 'hidden';
		document.getElementById("map-first").style.visibility= 'hidden';
		document.getElementById("dc_service").style.visibility= 'visible';
	}
	else if(x == 'sa' && y == 'ccc'){
		document.getElementById("map-sa").style.visibility= 'hidden';
		document.getElementById("map-bha").style.visibility= 'hidden';
		document.getElementById("map-dbx").style.visibility= 'hidden';
		document.getElementById("map-be").style.visibility= 'hidden';
		document.getElementById("map-rm").style.visibility= 'hidden';
		document.getElementById("map-at").style.visibility= 'hidden';
		document.getElementById("map-first").style.visibility= 'hidden';
		document.getElementById("dc_service").style.visibility= 'visible';
	}
	
/*SA fail*/

/*Bha fail*/

	
	else if(x == 'ba' && y == 'tds'){
		document.getElementById("map-sa").style.visibility= 'hidden';
		document.getElementById("map-bha").style.visibility= 'hidden';
		document.getElementById("map-dbx").style.visibility= 'hidden';
		document.getElementById("map-be").style.visibility= 'hidden';
		document.getElementById("map-rm").style.visibility= 'hidden';
		document.getElementById("map-at").style.visibility= 'hidden';
		document.getElementById("map-first").style.visibility= 'hidden';
		document.getElementById("dc_service").style.visibility= 'visible';
	}
	else if(x == 'ba' && y == 'vs'){
		document.getElementById("map-sa").style.visibility= 'hidden';
		document.getElementById("map-bha").style.visibility= 'hidden';
		document.getElementById("map-dbx").style.visibility= 'hidden';
		document.getElementById("map-be").style.visibility= 'hidden';
		document.getElementById("map-rm").style.visibility= 'hidden';
		document.getElementById("map-at").style.visibility= 'hidden';
		document.getElementById("map-first").style.visibility= 'hidden';
		document.getElementById("dc_service").style.visibility= 'visible';
	}
	else if(x == 'ba' && y == 'coa'){
		document.getElementById("map-sa").style.visibility= 'hidden';
		document.getElementById("map-bha").style.visibility= 'hidden';
		document.getElementById("map-dbx").style.visibility= 'hidden';
		document.getElementById("map-be").style.visibility= 'hidden';
		document.getElementById("map-rm").style.visibility= 'hidden';
		document.getElementById("map-at").style.visibility= 'hidden';
		document.getElementById("map-be").style.visibility= 'hidden';	
		document.getElementById("dc_service").style.visibility= 'visible';
	}
	else if(x == 'ba' && y == 'nm'){
		document.getElementById("map-sa").style.visibility= 'hidden';
		document.getElementById("map-bha").style.visibility= 'hidden';
		document.getElementById("map-dbx").style.visibility= 'hidden';
		document.getElementById("map-be").style.visibility= 'hidden';
		document.getElementById("map-rm").style.visibility= 'hidden';
		document.getElementById("map-at").style.visibility= 'hidden';
		document.getElementById("map-be").style.visibility= 'hidden';	
		document.getElementById("dc_service").style.visibility= 'visible';
	}
	else if(x == 'ba' && y == 'ccc'){
		document.getElementById("map-sa").style.visibility= 'hidden';
		document.getElementById("map-bha").style.visibility= 'hidden';
		document.getElementById("map-dbx").style.visibility= 'hidden';
		document.getElementById("map-be").style.visibility= 'hidden';
		document.getElementById("map-rm").style.visibility= 'hidden';
		document.getElementById("map-at").style.visibility= 'hidden';
		document.getElementById("map-first").style.visibility= 'hidden';
		document.getElementById("dc_service").style.visibility= 'visible';
	}
/*Bha fail*/


/*Dbx- fail*/

	else if(x == 'db' && y == 'sds'){
		document.getElementById("map-sa").style.visibility= 'hidden';
		document.getElementById("map-bha").style.visibility= 'hidden';
		document.getElementById("map-dbx").style.visibility= 'hidden';
		document.getElementById("map-be").style.visibility= 'hidden';
		document.getElementById("map-rm").style.visibility= 'hidden';
		document.getElementById("map-at").style.visibility= 'hidden';
		document.getElementById("map-be").style.visibility= 'hidden';		
		document.getElementById("dc_service").style.visibility= 'visible';		
	}
	else if(x == 'db' && y == 'ts'){
		document.getElementById("map-sa").style.visibility= 'hidden';
		document.getElementById("map-bha").style.visibility= 'hidden';
		document.getElementById("map-dbx").style.visibility= 'hidden';
		document.getElementById("map-be").style.visibility= 'hidden';
		document.getElementById("map-rm").style.visibility= 'hidden';
		document.getElementById("map-at").style.visibility= 'hidden';
		document.getElementById("map-first").style.visibility= 'hidden';
		document.getElementById("dc_service").style.visibility= 'visible';	
	}
	else if(x == 'db' && y == 'bds'){
document.getElementById("map-sa").style.visibility= 'hidden';
		document.getElementById("map-bha").style.visibility= 'hidden';
		document.getElementById("map-dbx").style.visibility= 'hidden';
		document.getElementById("map-be").style.visibility= 'hidden';
		document.getElementById("map-rm").style.visibility= 'hidden';
		document.getElementById("map-at").style.visibility= 'hidden';
		document.getElementById("map-be").style.visibility= 'hidden';			
		document.getElementById("dc_service").style.visibility= 'visible';	
	}
	else if(x == 'db' && y == 'tds'){
document.getElementById("map-sa").style.visibility= 'hidden';
		document.getElementById("map-bha").style.visibility= 'hidden';
		document.getElementById("map-dbx").style.visibility= 'hidden';
		document.getElementById("map-be").style.visibility= 'hidden';
		document.getElementById("map-rm").style.visibility= 'hidden';
		document.getElementById("map-at").style.visibility= 'hidden';
		document.getElementById("map-be").style.visibility= 'hidden';			
		document.getElementById("dc_service").style.visibility= 'visible';	
	}
	else if(x == 'db' && y == 'vs'){
document.getElementById("map-sa").style.visibility= 'hidden';
		document.getElementById("map-bha").style.visibility= 'hidden';
		document.getElementById("map-dbx").style.visibility= 'hidden';
		document.getElementById("map-be").style.visibility= 'hidden';
		document.getElementById("map-rm").style.visibility= 'hidden';
		document.getElementById("map-at").style.visibility= 'hidden';
		document.getElementById("map-be").style.visibility= 'hidden';			
		document.getElementById("dc_service").style.visibility= 'visible';	
	}
	else if(x == 'db' && y == 'cp'){
document.getElementById("map-sa").style.visibility= 'hidden';
		document.getElementById("map-bha").style.visibility= 'hidden';
		document.getElementById("map-dbx").style.visibility= 'hidden';
		document.getElementById("map-be").style.visibility= 'hidden';
		document.getElementById("map-rm").style.visibility= 'hidden';
		document.getElementById("map-at").style.visibility= 'hidden';
		document.getElementById("map-be").style.visibility= 'hidden';			
		document.getElementById("dc_service").style.visibility= 'visible';	
	}
/*Dbx- fail*/
	
/*Beirut- fail*/	
	else if(x == 'be' && y == 'sds'){
	document.getElementById("map-sa").style.visibility= 'hidden';
		document.getElementById("map-bha").style.visibility= 'hidden';
		document.getElementById("map-dbx").style.visibility= 'hidden';
		document.getElementById("map-be").style.visibility= 'hidden';
		document.getElementById("map-rm").style.visibility= 'hidden';
		document.getElementById("map-at").style.visibility= 'hidden';
		document.getElementById("map-be").style.visibility= 'hidden';	
		document.getElementById("dc_service").style.visibility= 'visible';	
	}
	else if(x == 'be' && y == 'ts'){
		document.getElementById("map-sa").style.visibility= 'hidden';
		document.getElementById("map-bha").style.visibility= 'hidden';
		document.getElementById("map-dbx").style.visibility= 'hidden';
		document.getElementById("map-be").style.visibility= 'hidden';
		document.getElementById("map-rm").style.visibility= 'hidden';
		document.getElementById("map-at").style.visibility= 'hidden';
		document.getElementById("map-first").style.visibility= 'hidden';
		document.getElementById("dc_service").style.visibility= 'visible';
	}
	else if(x == 'be' && y == 'bds'){
		document.getElementById("map-sa").style.visibility= 'hidden';
		document.getElementById("map-bha").style.visibility= 'hidden';
		document.getElementById("map-dbx").style.visibility= 'hidden';
		document.getElementById("map-be").style.visibility= 'hidden';
		document.getElementById("map-rm").style.visibility= 'hidden';
		document.getElementById("map-at").style.visibility= 'hidden';
		document.getElementById("map-first").style.visibility= 'hidden';
		document.getElementById("dc_service").style.visibility= 'visible';
	}
	else if(x == 'be' && y == 'tds'){
		document.getElementById("map-sa").style.visibility= 'hidden';
		document.getElementById("map-bha").style.visibility= 'hidden';
		document.getElementById("map-dbx").style.visibility= 'hidden';
		document.getElementById("map-be").style.visibility= 'hidden';
		document.getElementById("map-rm").style.visibility= 'hidden';
		document.getElementById("map-at").style.visibility= 'hidden';
		document.getElementById("map-first").style.visibility= 'hidden';
		document.getElementById("dc_service").style.visibility= 'visible';
	}
	else if(x == 'be' && y == 'vs'){
	document.getElementById("map-sa").style.visibility= 'hidden';
		document.getElementById("map-bha").style.visibility= 'hidden';
		document.getElementById("map-dbx").style.visibility= 'hidden';
		document.getElementById("map-be").style.visibility= 'hidden';
		document.getElementById("map-rm").style.visibility= 'hidden';
		document.getElementById("map-at").style.visibility= 'hidden';
		document.getElementById("map-first").style.visibility= 'hidden';
		document.getElementById("dc_service").style.visibility= 'visible';
	}
	else if(x == 'be' && y == 'ccc'){
		document.getElementById("map-sa").style.visibility= 'hidden';
		document.getElementById("map-bha").style.visibility= 'hidden';
		document.getElementById("map-dbx").style.visibility= 'hidden';
		document.getElementById("map-be").style.visibility= 'hidden';
		document.getElementById("map-rm").style.visibility= 'hidden';
		document.getElementById("map-at").style.visibility= 'hidden';
		document.getElementById("map-first").style.visibility= 'hidden';
		document.getElementById("dc_service").style.visibility= 'visible';
	}
	
/*Beirut- fail*/	

/*Ca- fail*/	
	else if(x == 'ca' && y == 'sds'){
		document.getElementById("map-sa").style.visibility= 'hidden';
		document.getElementById("map-bha").style.visibility= 'hidden';
		document.getElementById("map-dbx").style.visibility= 'hidden';
		document.getElementById("map-be").style.visibility= 'hidden';
		document.getElementById("map-rm").style.visibility= 'hidden';
		document.getElementById("map-at").style.visibility= 'hidden';
		document.getElementById("map-first").style.visibility= 'hidden';
		document.getElementById("dc_service").style.visibility= 'visible';
	}
	else if(x == 'ca' && y == 'ts'){
		document.getElementById("map-sa").style.visibility= 'hidden';
		document.getElementById("map-bha").style.visibility= 'hidden';
		document.getElementById("map-dbx").style.visibility= 'hidden';
		document.getElementById("map-be").style.visibility= 'hidden';
		document.getElementById("map-rm").style.visibility= 'hidden';
		document.getElementById("map-at").style.visibility= 'hidden';
		document.getElementById("map-first").style.visibility= 'hidden';
		document.getElementById("dc_service").style.visibility= 'visible';
	}
	else if(x == 'ca' && y == 'bds'){
		document.getElementById("map-sa").style.visibility= 'hidden';
		document.getElementById("map-bha").style.visibility= 'hidden';
		document.getElementById("map-dbx").style.visibility= 'hidden';
		document.getElementById("map-be").style.visibility= 'hidden';
		document.getElementById("map-rm").style.visibility= 'hidden';
		document.getElementById("map-at").style.visibility= 'hidden';
		document.getElementById("map-first").style.visibility= 'hidden';
		document.getElementById("dc_service").style.visibility= 'visible';
	}
	else if(x == 'ca' && y == 'tds'){
		document.getElementById("map-sa").style.visibility= 'hidden';
		document.getElementById("map-bha").style.visibility= 'hidden';
		document.getElementById("map-dbx").style.visibility= 'hidden';
		document.getElementById("map-be").style.visibility= 'hidden';
		document.getElementById("map-rm").style.visibility= 'hidden';
		document.getElementById("map-at").style.visibility= 'hidden';
		document.getElementById("map-first").style.visibility= 'hidden';
		document.getElementById("dc_service").style.visibility= 'visible';
	}
	else if(x == 'ca' && y == 'vs'){
		document.getElementById("map-sa").style.visibility= 'hidden';
		document.getElementById("map-bha").style.visibility= 'hidden';
		document.getElementById("map-dbx").style.visibility= 'hidden';
		document.getElementById("map-be").style.visibility= 'hidden';
		document.getElementById("map-rm").style.visibility= 'hidden';
		document.getElementById("map-at").style.visibility= 'hidden';
		document.getElementById("map-first").style.visibility= 'hidden';
		document.getElementById("dc_service").style.visibility= 'visible';
	}
	else if(x == 'ca' && y == 'as'){
		document.getElementById("map-sa").style.visibility= 'hidden';
		document.getElementById("map-bha").style.visibility= 'hidden';
		document.getElementById("map-dbx").style.visibility= 'hidden';
		document.getElementById("map-be").style.visibility= 'hidden';
		document.getElementById("map-rm").style.visibility= 'hidden';
		document.getElementById("map-at").style.visibility= 'hidden';
		document.getElementById("map-first").style.visibility= 'hidden';
		document.getElementById("dc_service").style.visibility= 'visible';
	}
	else if(x == 'ca' && y == 'coa'){
		document.getElementById("map-sa").style.visibility= 'hidden';
		document.getElementById("map-bha").style.visibility= 'hidden';
		document.getElementById("map-dbx").style.visibility= 'hidden';
		document.getElementById("map-be").style.visibility= 'hidden';
		document.getElementById("map-rm").style.visibility= 'hidden';
		document.getElementById("map-at").style.visibility= 'hidden';
		document.getElementById("map-first").style.visibility= 'hidden';
		document.getElementById("dc_service").style.visibility= 'visible';
	}
	else if(x == 'ca' && y == 'nm'){
		document.getElementById("map-sa").style.visibility= 'hidden';
		document.getElementById("map-bha").style.visibility= 'hidden';
		document.getElementById("map-dbx").style.visibility= 'hidden';
		document.getElementById("map-be").style.visibility= 'hidden';
		document.getElementById("map-rm").style.visibility= 'hidden';
		document.getElementById("map-at").style.visibility= 'hidden';
		document.getElementById("map-first").style.visibility= 'hidden';
		document.getElementById("dc_service").style.visibility= 'visible';
	}
	else if(x == 'ca' && y == 'ccc'){
		document.getElementById("map-sa").style.visibility= 'hidden';
		document.getElementById("map-bha").style.visibility= 'hidden';
		document.getElementById("map-dbx").style.visibility= 'hidden';
		document.getElementById("map-be").style.visibility= 'hidden';
		document.getElementById("map-rm").style.visibility= 'hidden';
		document.getElementById("map-at").style.visibility= 'hidden';
		document.getElementById("map-first").style.visibility= 'hidden';
		document.getElementById("dc_service").style.visibility= 'visible';
	}
/*Ca- fail*/

/*Rome- fail*/	
	else if(x == 'rm' && y == 'vs'){
		document.getElementById("map-sa").style.visibility= 'hidden';
		document.getElementById("map-bha").style.visibility= 'hidden';
		document.getElementById("map-dbx").style.visibility= 'hidden';
		document.getElementById("map-be").style.visibility= 'hidden';
		document.getElementById("map-rm").style.visibility= 'hidden';
		document.getElementById("map-at").style.visibility= 'hidden';
		document.getElementById("map-first").style.visibility= 'hidden';
		document.getElementById("dc_service").style.visibility= 'visible';	
	}
	else if(x == 'rm' && y == 'as'){
		document.getElementById("map-sa").style.visibility= 'hidden';
		document.getElementById("map-bha").style.visibility= 'hidden';
		document.getElementById("map-dbx").style.visibility= 'hidden';
		document.getElementById("map-be").style.visibility= 'hidden';
		document.getElementById("map-rm").style.visibility= 'hidden';
		document.getElementById("map-at").style.visibility= 'hidden';
		document.getElementById("map-first").style.visibility= 'hidden';
		document.getElementById("dc_service").style.visibility= 'visible';
	}
	else if(x == 'rm' && y == 'cp'){
		document.getElementById("map-sa").style.visibility= 'hidden';
		document.getElementById("map-bha").style.visibility= 'hidden';
		document.getElementById("map-dbx").style.visibility= 'hidden';
		document.getElementById("map-be").style.visibility= 'hidden';
		document.getElementById("map-rm").style.visibility= 'hidden';
		document.getElementById("map-at").style.visibility= 'hidden';
		document.getElementById("map-first").style.visibility= 'hidden';
		document.getElementById("dc_service").style.visibility= 'visible';
	}
	else if(x == 'rm' && y == 'ca'){
		document.getElementById("map-sa").style.visibility= 'hidden';
		document.getElementById("map-bha").style.visibility= 'hidden';
		document.getElementById("map-dbx").style.visibility= 'hidden';
		document.getElementById("map-be").style.visibility= 'hidden';
		document.getElementById("map-rm").style.visibility= 'hidden';
		document.getElementById("map-at").style.visibility= 'hidden';
		document.getElementById("map-first").style.visibility= 'hidden';
		document.getElementById("dc_service").style.visibility= 'visible';
	}
	else if(x == 'rm' && y == 'ccc'){
		document.getElementById("map-sa").style.visibility= 'hidden';
		document.getElementById("map-bha").style.visibility= 'hidden';
		document.getElementById("map-dbx").style.visibility= 'hidden';
		document.getElementById("map-be").style.visibility= 'hidden';
		document.getElementById("map-rm").style.visibility= 'hidden';
		document.getElementById("map-at").style.visibility= 'hidden';
		document.getElementById("map-first").style.visibility= 'hidden';
		document.getElementById("dc_service").style.visibility= 'visible';
	}
/*Rome- fail*/
	
/*Athens fail*/	
	
	else if(x == 'at' && y == 'bds'){
		document.getElementById("map-sa").style.visibility= 'hidden';
		document.getElementById("map-bha").style.visibility= 'hidden';
		document.getElementById("map-dbx").style.visibility= 'hidden';
		document.getElementById("map-be").style.visibility= 'hidden';
		document.getElementById("map-rm").style.visibility= 'hidden';
		document.getElementById("map-at").style.visibility= 'hidden';
		document.getElementById("map-first").style.visibility= 'hidden';
		document.getElementById("dc_service").style.visibility= 'visible';	
	}
	else if(x == 'at' && y == 'tds'){
		document.getElementById("map-sa").style.visibility= 'hidden';
		document.getElementById("map-bha").style.visibility= 'hidden';
		document.getElementById("map-dbx").style.visibility= 'hidden';
		document.getElementById("map-be").style.visibility= 'hidden';
		document.getElementById("map-rm").style.visibility= 'hidden';
		document.getElementById("map-at").style.visibility= 'hidden';
		document.getElementById("map-first").style.visibility= 'hidden';
		document.getElementById("dc_service").style.visibility= 'visible';
	}
	else if(x == 'at' && y == 'vs'){
		document.getElementById("map-sa").style.visibility= 'hidden';
		document.getElementById("map-bha").style.visibility= 'hidden';
		document.getElementById("map-dbx").style.visibility= 'hidden';
		document.getElementById("map-be").style.visibility= 'hidden';
		document.getElementById("map-rm").style.visibility= 'hidden';
		document.getElementById("map-at").style.visibility= 'hidden';
		document.getElementById("map-first").style.visibility= 'hidden';
		document.getElementById("dc_service").style.visibility= 'visible';
	}
	else if(x == 'at' && y == 'as'){
		document.getElementById("map-sa").style.visibility= 'hidden';
		document.getElementById("map-bha").style.visibility= 'hidden';
		document.getElementById("map-dbx").style.visibility= 'hidden';
		document.getElementById("map-be").style.visibility= 'hidden';
		document.getElementById("map-rm").style.visibility= 'hidden';
		document.getElementById("map-at").style.visibility= 'hidden';
		document.getElementById("map-first").style.visibility= 'hidden';
		document.getElementById("dc_service").style.visibility= 'visible';
	}
	else if(x == 'at' && y == 'cp'){
		document.getElementById("map-sa").style.visibility= 'hidden';
		document.getElementById("map-bha").style.visibility= 'hidden';
		document.getElementById("map-dbx").style.visibility= 'hidden';
		document.getElementById("map-be").style.visibility= 'hidden';
		document.getElementById("map-rm").style.visibility= 'hidden';
		document.getElementById("map-at").style.visibility= 'hidden';
		document.getElementById("map-first").style.visibility= 'hidden';
		document.getElementById("dc_service").style.visibility= 'visible';
	}
	else if(x == 'at' && y == 'coa'){
		document.getElementById("map-sa").style.visibility= 'hidden';
		document.getElementById("map-bha").style.visibility= 'hidden';
		document.getElementById("map-dbx").style.visibility= 'hidden';
		document.getElementById("map-be").style.visibility= 'hidden';
		document.getElementById("map-rm").style.visibility= 'hidden';
		document.getElementById("map-at").style.visibility= 'hidden';
		document.getElementById("map-first").style.visibility= 'hidden';
		document.getElementById("dc_service").style.visibility= 'visible';
	}
	else if(x == 'at' && y == 'nm'){
		document.getElementById("map-sa").style.visibility= 'hidden';
		document.getElementById("map-bha").style.visibility= 'hidden';
		document.getElementById("map-dbx").style.visibility= 'hidden';
		document.getElementById("map-be").style.visibility= 'hidden';
		document.getElementById("map-rm").style.visibility= 'hidden';
		document.getElementById("map-at").style.visibility= 'hidden';
		document.getElementById("map-first").style.visibility= 'hidden';
		document.getElementById("dc_service").style.visibility= 'visible';
	}
	else if(x == 'at' && y == 'ccc'){
		document.getElementById("map-sa").style.visibility= 'hidden';
		document.getElementById("map-bha").style.visibility= 'hidden';
		document.getElementById("map-dbx").style.visibility= 'hidden';
		document.getElementById("map-be").style.visibility= 'hidden';
		document.getElementById("map-rm").style.visibility= 'hidden';
		document.getElementById("map-at").style.visibility= 'hidden';
		document.getElementById("map-first").style.visibility= 'hidden';
		document.getElementById("dc_service").style.visibility= 'visible';
	}
/*Athens fail*/

}