$(':header').addClass('headline');$('li:lt(4)').hide();$('li.cool').on('click', function() {  $(this).remove();});$('#header').on('click', function() {  $('li:lt(4)').fadeIn(3000);});