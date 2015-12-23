$(function(){
	var app = {
		init: function() {
			app.init_effect();
			app.init_event();
		},

		init_effect: function() {
			$("#head_tagline").height(200);
			$("#head_tagline>h1").hide().fadeIn(700);
			$("#head_tagline>p:first").hide().delay(700).fadeIn(700);
			$("#head_tagline>p:last").hide();
			$("#head_tagline>a").hide().delay(1400).fadeIn(700);
			
			$(".error").hide();
			
		},

		init_event: function() {		
			$("#head_tagline>a:first").on("click", function(){
				$("#head_tagline>p:last").fadeIn(700);
				$("#head_tagline").height(320);
			});
			
			$("#head_tagline>a:last").on("click", function(){
				$("#head_tagline>p:last").hide();
				$("#head_tagline").height(200);
			});
			
			$("#form-submit").on("click", function(){
				var problem = "";
				var name = $("#form-name").val();
				if (name == ""){
					problem += "Name field is empty.\n";
				}
				var phone = $("#form-number").val();
				if (phone == ""){
					problem += "\nTelephone field is empty.\n";
				} else if (!$.isNumeric(phone)) {
					$(".error:first").show();
					problem += "\nYour phone number contains non-numerical characters.\n";
				} else {
					$(".error:first").hide();
				}
				var msg = $("#form-message").val().toLowerCase();
				if (msg == ""){
					problem += "\nMessage field is empty.\n"
				} else if (msg.indexOf("bad words") >= 0) {
					$(".error:last").show();
					problem += "\nYour message contains bad words.";
				} else {
					$(".error:last").hide();
				}
				if ((name != "")&&(phone != "")&&($.isNumeric(phone))&&(msg != "")&&(msg.indexOf("bad words") == -1)) {
					
					swal("Submitted!", "Your message was sent.", "success")
				} else {
					sweetAlert("Error", problem, "error");
					problem = "";
				}
			});
			
			$(".image-flip").flip({
				axis: 'y',
				trigger: 'hover'
			});
		}

	};
	app.init();
});
