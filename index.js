 function clicked(){

console.log("clicked");
   let a =  document.createElement('img');
   a.src="bandpass_waveform.png"

   document.body.appendChild(a);
}

function loadroute(route){
   history.pushState({},'',route);
}
