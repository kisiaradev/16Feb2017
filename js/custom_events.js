function customEvent()
{
	var username = document.getElementById('your-name');
	var nameLength = username.length;
	var randomDigit = Math.random() * nameLength;

	document.getElementById("worth-show").addEventListener("eventMade", function(e){
		alert(e.detail.name);
	});

	var eventMade = new CustomEvent("eventMade", {
		detail: {
			name: username,
			worth: randomDigit
		}
	});

	document.getElementById("worth-show").dispatchEvent(eventMade);
}

