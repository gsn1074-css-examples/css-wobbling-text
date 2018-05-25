window.addEventListener("load", function() {

	var nodes = document.querySelectorAll(".wobbly");
	
	for(var i = 0; i < nodes.length; i++) {
		
		var text = nodes[i].innerText;
		var html = "";
		
		for(var j = 0; j < text.length; j++) {

			if(text[j] == " ") {

				html += " ";

			} else {

				html += "<span>" + text[j] + "</span>"
			
			}
		}

		nodes[i].innerHTML = html;
	}
});