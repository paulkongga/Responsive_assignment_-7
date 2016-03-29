$(document).ready(pageReady)

function pageReady() {


	//setup click listener for mobile nav button
		$(".mobile-nav-button").click(toggleMobileNav);

		function toggleMobileNav() {

			//toggle sliding the mobile nav container to show and hide
			$(".mobile-nav").slideToggle();

			$(".mobile-nav-button").toggleClass("active");


		}


}