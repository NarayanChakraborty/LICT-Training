<!DOCTYPE html>
<html>
<head>

<script 
src="jquery-3.1.1.js">

</script>
<script>
$(document).ready(function(){
  $("#left").click(function(){
    $(".p").animate({left:'100px'});
	
  
  } );

    $("#bottom").click(function(){
    $(".p").animate({bottom:'100px'});
	
  
  } );
  
     $("#right").click(function(){
    $(".p").animate({right:'100px'});
	
  
  } );
  
     $("#top").click(function(){
    $(".p").animate({top:'100px'});
	
  
  } );

} );



</script>

</head>
<body >
<button id="right">right</button>
<button id="left">left</button>
<button id="bottom">bottom</button>

<button id="top">top</button>

<div  class="p" style="background:#98bacb;height:100px;width:100px;position:absolute;">
<img src="flower.jpg" style="width:250px;height:200px"/>
</div>







</body>
</html>