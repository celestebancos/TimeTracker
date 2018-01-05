// // var roll = Math.random(random number)
// $(".setting").hide();
// if(localStorage.getItem("black")===null){
// 	localStorage.setItem("black", 8);
// }
// if(localStorage.getItem("red")===null){
// 	localStorage.setItem("red", 6);
// }

// $(".roll").click(function(){
// 	var black = Math.floor(Math.random()*localStorage.getItem("black"))+1;
// 	var red = Math.floor(Math.random()*localStorage.getItem("red"))+1;

// 	if($(".black .number").html().charAt(0)!="d"){
// 		$(".graveyard").prepend('<div class = "ghost_black die"><div class = "number">' + $(".black .number").html() + '</div></div><div class = "ghost_red die"><div class = "number">' + $(".red .number").html() + '</div></div>');
// 	}

// 	$(".black .number").html(black);
// 	$(".red .number").html(red);
// });


// $(".reset").click(function(){
// 	location.reload();
// });

// $(".settings").click(function(){
// 	if($(".setting").is(':visible')){
// 		$(".setting").hide();
// 	}
// 	else{
// 		$(".setting").show();
// 	}
// });

// $("#black_max").keyup(function(){
// 	max = $("#black_max").val();
// 	if($("#black_max").val()==""){
// 		localStorage.setItem("black", 8);
// 	}
// 	else{
// 		localStorage.setItem("black", max);
// 	}
// 	if($(".black .number").html().charAt(0)=="d"){
// 		$(".black .number").html("d" + max);
// 	}
// });

// $("#red_max").keyup(function(){
// 	max = $("#red_max").val();
// 	if($("#red_max").val()==""){
// 		localStorage.setItem("red", 6);
// 	}
// 	else{
// 		localStorage.setItem("red", max);
// 	}
// 	if($(".red .number").html().charAt(0)=="d"){
// 		$(".red .number").html("d" + max);
// 	}
// });

// 	// console.log("black = " + black);
// 	// console.log("red = " + red);