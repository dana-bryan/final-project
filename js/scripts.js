let infos = document.querySelectorAll('.bg-modal');
let books = document.querySelectorAll ('.book');
let close = document.querySelectorAll('.close');


function hideAll() {
	infos.forEach(function(el) {
		el.style.display = 'none';
	});
}

close.forEach(function (el) {
	el.onclick = function() {
		hideAll();
	}
})


hideAll();



books.forEach(function(el) {
	el.onclick = (e) => {
// hide all the divs to ensure that only one will be open
		hideAll();

// here is a switch statement to handle opening the right div

		switch (e.target.getAttribute('id')) {
		      case 'outsiders':
		        document.querySelector('#out')
		          .style.display = 'block';
		        break;
					case 'hunger':
			        document.querySelector('#games')
			        	.style.display = 'block';
			      break;
					case 'holes':
			        document.querySelector('#ho')
			          .style.display = 'block';
		        break;
					case 'unfortunate':
			        document.querySelector('#fort')
			          .style.display = 'block';
		        break;
					case 'prom':
			        document.querySelector('#proandpre')
			          .style.display = 'block';
		        break;
					case 'born':
			        document.querySelector('#crime')
			          .style.display = 'block';
		        break;
					case 'starless':
							document.querySelector('#sea')
								.style.display = 'block';
						break;
					case 'wuthering':
							document.querySelector('#heights')
								.style.display = 'block';
						break;
					case 'catcher':
							document.querySelector('#rye')
								.style.display = 'block';
						break;
					case 'hate':
							document.querySelector('#give')
								.style.display = 'block';
						break;
	  } // end of switch

} // end of function for clicking

}); // end of forEach()
