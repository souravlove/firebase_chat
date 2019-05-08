$(function(){
	firebase.initializeApp({
	    apiKey: "AIzaSyBR7_bc48PYE8ft9qq2coKaT1RH1XhiOh8",
	    authDomain: "openhouse-cc398.firebaseapp.com",
	    databaseURL: "https://openhouse-cc398.firebaseio.com",
	    projectId: "openhouse-cc398",
	    storageBucket: "openhouse-cc398.appspot.com"
	});

	// Get a reference to the database service
  	var database = firebase.database().ref('messages');

	database.on('value',snap=>{
		//snap.val()
		var obj = snap.val();
		$.each(obj, function(k, v) {
			if ( typeof(v) != "object" ) {
		  		console.log(k + " => " + v); // k is AnonymousChat v is deviceid 
			} else  {
				console.log(k + " => ");
				$.each(v,function(ke,va){
					if ( typeof(va) != "object" ) {
				  		console.log(ke + " => " + va);	// ke is deviceid va is unique id
					} else  {
						console.log(ke + " => ");
						$.each(va,function(key,val){
							if ( typeof(val) != "object" ) {
						  		console.log(key + " => " + val); //key is unique id val is msg info
							} else  {
								console.log(key + " => ");
								$.each(val,function(keyy,vall){
									console.log(keyy + " => " + vall); // keyy is msg [text,user,createdAt]
								});										// their values
							}
						});
					}
				});
			}
		});
	});
});



$('#action_menu_btn').click(function(){
	$('.action_menu').toggle();
});
