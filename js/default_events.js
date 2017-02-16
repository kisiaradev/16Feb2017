var eventsBlock = document.getElementById('events-trace');	//Bad Practise
var totalEvents = document.getElementById('total-events');	//Bad Practise

/* fire an event on page load*/
function pageLoaded()
{
	//Add the counter for the load event
	var div = document.getElementById('onload');
	div.innerHTML = parseInt(div.innerHTML) + 1;

	//add the string about the event being fired on the code block
	eventsBlock.innerHTML = eventsBlock.innerHTML + "<li><span class='green'>onload</span> event fired ::: Page Loaded :::</li>";

	totalEvents.innerHTML = parseInt(totalEvents.innerHTML) + 1;
}

function mouseOver(id)
{
	var div = document.getElementById('onmouseover');
	div.innerHTML = parseInt(div.innerHTML) + 1;

	if(id == "activate-button"){
		eventsBlock.innerHTML = eventsBlock.innerHTML + "<li><span class='blue'>onmouseover</span> event fired ::: Hovering Over Activation Button:::</li>";
	}else if(id == "transform-link"){
		eventsBlock.innerHTML = eventsBlock.innerHTML + "<li><span class='blue'>onmouseover</span> event fired ::: Hovering Over Transform Link:::</li>";
	}

	totalEvents.innerHTML = parseInt(totalEvents.innerHTML) + 1;
}

function mouseOut(id)
{
	var div = document.getElementById('onmouseout');
	div.innerHTML = parseInt(div.innerHTML) + 1;

	if(id == "activate-button"){
		eventsBlock.innerHTML = eventsBlock.innerHTML + "<li><span class='orange'>onmouseout</span> event fired ::: Leaving Activation Button:::</li>";
	}else if(id == "transform-link"){
		eventsBlock.innerHTML = eventsBlock.innerHTML + "<li><span class='orange'>onmouseout</span> event fired ::: Leaving Transform Link:::</li>";
	}

	totalEvents.innerHTML = parseInt(totalEvents.innerHTML) + 1;
}


function activateLink(id)
{
	var div = document.getElementById('onclick');
	div.innerHTML = parseInt(div.innerHTML) + 1;

	if(id == "activate-button"){
		//change the content of I am not activate and remove the class red and add green
		var hinter = document.getElementById('activate-me');
		
		if(hinter.classList.contains('red')){
			//change the thing
			hinter.classList.remove('red');
			hinter.innerHTML = "I am activated";
			hinter.classList.add("green");

			var divChange = document.getElementById('onchange');
			divChange.innerHTML = parseInt(divChange.innerHTML) + 1;

			//activate the link
			document.getElementById("transform-link").addEventListener("click", function(event){
			   	return true;
			});
		}

		eventsBlock.innerHTML = eventsBlock.innerHTML + "<li><span class='red'>onclick</span> event fired ::: Activation Button Clicked:::</li>";
	}else if(id == "transform-link"){
		eventsBlock.innerHTML = eventsBlock.innerHTML + "<li><span class='red'>onclick</span> event fired ::: Transform Link Clicked:::</li>";
	}

	totalEvents.innerHTML = parseInt(totalEvents.innerHTML) + 1;
}

