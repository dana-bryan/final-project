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
		      case 'train':
		        document.querySelector('#girltrain')
		          .style.display = 'block';
		        break;
          case 'cabin':
  			        document.querySelector('#world')
  			        	.style.display = 'block';
  			      break;
          case 'lisey':
                document.querySelector('#story')
                  .style.display = 'block';
              break;
          case 'second':
                document.querySelector('#summer')
                  .style.display = 'block';
              break;
          case 'boys':
                document.querySelector('#before')
                  .style.display = 'block';
              break;
          case 'beautiful':
                document.querySelector('#creatures')
                  .style.display = 'block';
              break;
          case 'treasure':
                document.querySelector('#island')
                  .style.display = 'block';
              break;
          case 'maze':
                document.querySelector('#runner')
                  .style.display = 'block';
              break;
          case 'tellyou':
                document.querySelector('#love')
                  .style.display = 'block';
              break;
	  } // end of switch

} // end of function for clicking

}); // end of forEach()
