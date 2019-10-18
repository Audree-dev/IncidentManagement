$(document).ready(function(){
	// Tooltips 
	$('[data-toggle="tooltip"]').tooltip();
	// Dashboard Side Menu
	$("#menuNavigate").click(function(){
		$(".leftMain").toggleClass("slideMe");
		$(".contentMain").toggleClass("expandDiv");
	});
	// workflow hide and show function
	
	
	
	
	
	
$("#divToggleBtn").click(function() {

	var lable = $("#divToggleBtn").text().trim();

	if(lable === "Hide Workflow") {
	 $("#divToggleBtn").text("Show Workflow");
	 $("#mainForflow").hide(200);
	}
	else {
	 $("#divToggleBtn").text("Hide Workflow");
	 $("#mainForflow").show(100);
	} 
});
	
	$("#btnApproveChain").click(function(){
		$(".toggleContent").show(200);
	});
	$("#aprroveMin").click(function(){
		$(".toggleContent").hide(100);
	});
	
	
	
	
	 /*$("#actionPlans").draggable();*/
	
});

