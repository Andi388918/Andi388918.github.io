$( document ).ready(function() {
	
	$( ".click" ).click(function() {
		
		$( ".neu3" ).toggle(0);
		
	});
		
	 $( ".button" ).click(function() {
				
     var n = "n" + parseFloat($('.neu').val());
	 	 
	 var n1 = "n" + parseFloat($('.neu1').val());
	 	 
	 var n2 = "n" + parseFloat($('.neu2').val());
	 	
		if(n == "n6" || n == "n8"){n = 5};
		if(n == "n9" || n == "n5"){n = 4};
		if(n == "n10" || n == "n4"){n = 3};
		if(n == "n11" || n == "n3"){n = 2};
		if(n == "n12" || n == "n2"){n = 1};
		
		if(n1 == "n6" || n1 == "n8"){n1 = 5};
		if(n1 == "n9" || n1 == "n5"){n1 = 4};
		if(n1 == "n10" || n1 == "n4"){n1 = 3};
		if(n1 == "n11" || n1 == "n3"){n1 = 2};
		if(n1 == "n12" || n1 == "n2"){n1 = 1};
		
		if(n2 == "n6" || n2 == "n8"){n2 = 5};
		if(n2 == "n9" || n2 == "n5"){n2 = 4};
		if(n2 == "n10" || n2 == "n4"){n2 = 3};
		if(n2 == "n11" || n2 == "n3"){n2 = 2};
		if(n2 == "n12" || n2 == "n2"){n2 = 1};
								
	    var s = $( ".select" ).val();
		if(s == "audi"){n = n*0.7};
		if(s == "audi1"){n = n*0.6};
		
		var s = $( ".select1" ).val();
		if(s == "audi"){n1 = n1*0.7};
		if(s == "audi1"){n1 = n1*0.6};
		
		var s = $( ".select2" ).val();
		if(s == "audi"){n2 = n2*0.7};
		if(s == "audi1"){n2 = n2*0.6};
		
		var result = n + n1 + n2;

        if(n == "n0"){result = n1 + n2};
        if(n1 == "n0"){result = n + n2};
		if(n2 == "n0"){result = n + n1};
		if(n && n1 == "n0"){result = n2};
		if(n1 && n2 == "n0"){result = n};
		if(n2 && n == "n0"){result = n1};
		
		var s1 = $( ".select3" ).val();
		if(s1 == "volvo1"){result = result + 3.25}
		if(s1 == "saab"){result = result + 2.75}
		if(s1 == "opel"){result = result + 2.25}
		if(s1 == "audi"){result = result + 3.75}
		
		var s2 = $( ".select4" ).val();
		if(s2 == "audi"){result = result + 1.75}
		if(s2 == "saab"){result = result + 2}
		if(s2 == "opel"){result = result + 2.25}
		
		var s3 = $( ".select5" ).val();
		if(s3 == "volvo1"){result = result + 1}
		if(s3 == "saab"){result = result + 0.75}
		
		var s4 = $( ".select5" ).val();
		if(s4 == "volvo1"){result = result + 1}
		if(s4 == "saab"){result = result + 0.75}
		
		var s5 = $( ".select6" ).val();
		if(s5 == "audi2"){result = result + 1.5}
		if(s5 == "audi3"){result = result + 1.5}
		if(s5 == "saab"){result = result + 0.8}
		if(s5 == "audi"){result = result + 0.5}
		if(s5 == "audi4"){result = result + 0.3}
						
		if($(".neu3").is(":hidden")){				
		$(".text").text(result);
		}
				
		if ($(".neu3").is(":visible")){
		
		var n3 = "n" + parseFloat($('.neu4').val());
	 	 
		var n4 = "n" + parseFloat($('.neu5').val());
	 	 
	    var n5 = "n" + parseFloat($('.neu6').val());
	 	
		if(n3 == "n6" || n3 == "n8"){n3 = 5};
		if(n3 == "n9" || n3 == "n5"){n3 = 4};
		if(n3 == "n10" || n3 == "n4"){n3 = 3};
		if(n3 == "n11" || n3 == "n3"){n3 = 2};
		if(n3 == "n12" || n3 == "n2"){n3 = 1};
		
		if(n4 == "n6" || n4 == "n8"){n4 = 5};
		if(n4 == "n9" || n4 == "n5"){n4 = 4};
		if(n4 == "n10" || n4 == "n4"){n4 = 3};
		if(n4 == "n11" || n4 == "n3"){n4 = 2};
		if(n4 == "n12" || n4 == "n2"){n4 = 1};
		
		if(n5 == "n6" || n5 == "n8"){n5 = 5};
		if(n5 == "n9" || n5 == "n5"){n5 = 4};
		if(n5 == "n10" || n5 == "n4"){n5 = 3};
		if(n5 == "n11" || n5 == "n3"){n5 = 2};
		if(n5 == "n12" || n5 == "n2"){n5 = 1};
								
	    var s6 = $( ".select7" ).val();
		if(s6 == "audi"){n3 = n3*0.7};
		if(s6 == "audi1"){n3 = n3*0.6};
		
		var s7 = $( ".select8" ).val();
		if(s7 == "audi"){n4 = n4*0.7};
		if(s7 == "audi1"){n4 = n4*0.6};
		
		var s8 = $( ".select9" ).val();
		if(s8 == "audi"){n5 = n5*0.7};
		if(s8 == "audi1"){n5 = n5*0.6};
		
		var result1 = n3 + n4 + n5;

        if(n3 == "n0"){result = n4 + n5};
        if(n4 == "n0"){result = n3 + n5};
		if(n5 == "n0"){result = n3 + n4};
		if(n3 && n4 == "n0"){result = n5};
		if(n4 && n5 == "n0"){result = n3};
		if(n5 && n3 == "n0"){result = n4};
		
		var s9 = $( ".select10" ).val();
		if(s9 == "volvo1"){result = result + 3.25}
		if(s9 == "saab"){result = result + 2.75}
		if(s9 == "opel"){result = result + 2.25}
		if(s9 == "audi"){result = result + 3.75}
		
		var s10 = $( ".select11" ).val();
		if(s10 == "audi"){result = result + 1.75}
		if(s10 == "saab"){result = result + 2}
		if(s10 == "opel"){result = result + 2.25}
		
		var s11 = $( ".select12" ).val();
		if(s11 == "volvo1"){result = result + 1}
		if(s11 == "saab"){result = result + 0.75}
		
		var s12 = $( ".select13" ).val();
		if(s12 == "audi2"){result = result + 1.5}
		if(s12 == "audi3"){result = result + 1.5}
		if(s12 == "saab"){result = result + 0.8}
		if(s12 == "audi"){result = result + 0.5}
		if(s12 == "audi4"){result = result + 0.3}
		
		$(".text").text(result1 + result);
		}
		
	 });

});