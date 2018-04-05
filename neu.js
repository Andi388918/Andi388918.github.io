$( document ).ready(function() {
  
  
    $(window).scroll(function() {	
    
	if ($(window).width() >= 1150) {
	if ($(this).scrollTop() > 10) {
		 $(".navigation1").show (  "slow"  );
		 $(".navigation").hide (  "slow"  );
		    } else {
        console.log('there');
		$( ".navigation1" ).fadeOut (  "slow"  );
		$(  ".navigation"  ).fadeIn  (  "slow"  );
	}  }
});


$(  ".neu"  ).click(function()  {
	$(  ".loginbox"  ).fadeOut  (  "slow"  );
});


	$(  "#toggle"  ).click(function()  {
	if(!$("#menu").is(':hidden'))  {
		$(  ".All"  ).hide  (  "slow"  );
	}
	else {  $(  ".All"  ).show  (  "slow"  );  }
  });

  
  $(  ".Line1"  ).hide  (  "slow"  );
  $(  ".Line2"  ).hide  (  "slow"  );
  $(  ".Text1"  ).hide  (  "slow"  );
  $(  ".Text2"  ).hide  (  "slow"  );
  $(  ".Line3" ).css( "margin-top",  "30%" );
   
   
   $(".Line").click(function() {	
   
   
   $(  ".loginbox"  ).fadeIn  (  "slow"  );
   $(  "#toggle"  ).click ();
     });
	 
	 
	 $(".Sell").click(function() {	
   
   
   $(  ".loginbox"  ).fadeIn  (  "slow"  );
   
   
     });
     	    
			
     $(".Text").click(function() {	
   
   
   $(  ".loginbox"  ).fadeIn  (  "slow"  );
   $(  "#toggle"  ).click ();
     });
  
    
	$("#toggle").click(function() {	
  $(this).toggleClass("on");
  $("#menu").slideToggle();
});


$('.Line3').on('click', function(){
  $('.wrap, a').toggleClass('active');
  $(  "#toggle"  ).click  ();
  
  
  $(  ".hiddeninput"  ).css(
		
		
	"-webkit-animation-play-state",  "running"
    
  
	);
	
    	
  return false;
});


$('.Text3').on('click', function(){
  $('.wrap, a').toggleClass('active');
  $(  "#toggle"  ).click  ();
	
  return false;
});


$('.neu1').on('click', function(){
  $('.wrap, a').toggleClass('active');
  
  
  return false;
});


$(  ".hiddeninput"  ).css(
		
		
	"-webkit-animation-play-state",  "paused"
    
  
	);
	
	
});