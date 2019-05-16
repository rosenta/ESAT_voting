function castVote(myid){

	var images = document.getElementsByClassName('img');
	var tooltips = document.getElementsByClassName('tooltip1');

	document.getElementById('display').style.visibility = "visible";
	document.getElementById('following').style.visibility = "visible";
	document.getElementById('following').disabled = true;
	document.getElementById('following').style.background = "grey";
	document.getElementById('following').style.cursor = "not-allowed";
	document.getElementById('following').style.color = "black";

	if(document.getElementById('oye').id == myid)
	{	
		for(var i=0; i<images.length; i++){
			if(i==0){
				images[i].style.opacity = "1.0";
			}
			else {
				images[i].style.opacity = "0.3";
				images[i].disabled = true;
				images[i].onclick = false;
				tooltips[i].style.visibility = "hidden";

			}

		}
		var y = document.getElementById("oyster").innerHTML;
		document.getElementById("textarea").innerHTML = y;			
	}

else	
	if(document.getElementById('cat').id == myid)
	{	
		for(var i=0; i<images.length; i++){
			if(i==1){
				images[i].style.opacity = "1.0";
			}
			else {
				images[i].style.opacity = "0.3";
				images[i].disabled = true;
				images[i].onclick = false;
				tooltips[i].style.visibility = "hidden";

			}

		}
		var y = document.getElementById("cat1").innerHTML;
		document.getElementById("textarea").innerHTML = y;			
	}

else
	if(document.getElementById('wha').id == myid)
	{	
		for(var i=0; i<images.length; i++){
			if(i==2){
				images[i].style.opacity = "1.0";
			}
			else {
				images[i].style.opacity = "0.3";
				images[i].disabled = true;
				images[i].onclick = false;
				tooltips[i].style.visibility = "hidden";
			}

		}
		var y = document.getElementById("whale").innerHTML;
		document.getElementById("textarea").innerHTML = y;			
	}

else	
	if(document.getElementById('ele').id == myid)
	{	
		for(var i=0; i<images.length; i++){
			if(i==3){
				images[i].style.opacity = "1.0";
			}
			else {
				images[i].style.opacity = "0.3";
				images[i].disabled = true;
				images[i].onclick = false;
				tooltips[i].style.visibility = "hidden";
			}

		}
		var y = document.getElementById("elephant").innerHTML;
		document.getElementById("textarea").innerHTML = y;			
	}

	if(document.getElementById('fis').id == myid)
	{	
		for(var i=0; i<images.length; i++){
			if(i==4){
				images[i].style.opacity = "1.0";
			}
			else {
				images[i].style.opacity = "0.3";
				images[i].disabled = true;
				images[i].onclick = false;
				tooltips[i].style.visibility = "hidden";
			}

		}
		var y = document.getElementById("fish").innerHTML;
		document.getElementById("textarea").innerHTML = y;			
	}

else
	if(document.getElementById('goo').id == myid)
	{	
		for(var i=0; i<images.length; i++){
			if(i==5){
				images[i].style.opacity = "1.0";
			}
			else {
				images[i].style.opacity = "0.3";
				images[i].disabled = true;
				images[i].onclick = false;
				tooltips[i].style.visibility = "hidden";
			}

	 	}
		var y = document.getElementById("goose").innerHTML;
		document.getElementById("textarea").innerHTML = y;			
	}
		
}



function enable_btn()
{	
	
	document.getElementById('star5').addEventListener("click", star_rate);
	document.getElementById('star4').addEventListener("click", star_rate);
	document.getElementById('star3').addEventListener("click", star_rate);
	document.getElementById('star2').addEventListener("click", star_rate);
	document.getElementById('star1').addEventListener("click", star_rate);
	
	document.getElementById('following').disabled = false;
	document.getElementById('following').style.background = "#2DB684";
	document.getElementById('following').style.cursor = "pointer";
	document.getElementById('following').style.color = "white";
	document.getElementById('following').addEventListener("click", link_to_follow);

	
}  

function link_to_follow() {

	document.getElementById("following").onclick = location.href='ESAT_screen_3.html';
}

function star_rate() {
	document.getElementById('star5').onclick = function(){document.getElementById('rate').innerHTML = "Awesome";}
	document.getElementById('star4').onclick = function(){document.getElementById('rate').innerHTML = "Very Good";}
	document.getElementById('star3').onclick = function(){document.getElementById('rate').innerHTML = "Pretty Good";}
	document.getElementById('star2').onclick = function(){document.getElementById('rate').innerHTML = "Bad";}
	document.getElementById('star1').onclick = function(){document.getElementById('rate').innerHTML = "Very Bad";}
}
