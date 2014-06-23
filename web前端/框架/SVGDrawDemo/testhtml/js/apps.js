// JavaScript Document
 /** BUTTON TOGGLE FUNCTION **/

    $(".btn-collapse-sidebar-left").click(function(){
        "use strict";
        $(".top-navbar").toggleClass("toggle");
        $(".sidebar-left").toggleClass("toggle");
        $(".page-content").toggleClass("toggle");
        $(".icon-dinamic").toggleClass("rotate-180");
    });
    $(".btn-collapse-bottom").click(function(){
        "use strict";        
        $(".att-panel").toggleClass("toggle"); 
		$(".att-icon-dinamic").toggleClass("rotate-180");       
    });   
    /** END BUTTON TOGGLE FUNCTION **/

	 //tree
     jQuery(document).ready(function() {

         TreeView.init();
    });
	
	$(function () {

        //$('#myTab a:last').tab('show');
		$(document).on('click.tab.data-api', '[data-toggle="tab"], [data-toggle="pill"]', function (e) {
			e.preventDefault()
			$(this).tab('show')
		}) 
	})
	
	 // panel collapsible
		$('.panel .panel-heading').click(function () {
		var el = $(this).parents(".panel").children(".panel-body");
		if ($(this).hasClass("fa-chevron-down")) {
		$(this).removeClass("fa-chevron-down").addClass("fa-chevron-up");
		el.slideUp(200);
		} else {
		$(this).removeClass("fa-chevron-up").addClass("fa-chevron-down");
		el.slideDown(200); }
		});
		
	
