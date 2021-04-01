function walkie_talkie(){

	let button_a = document.getElementById("button_a");
	let button_b = document.getElementById("button_b");

	let speaker_a = document.getElementById("speaker_a");

	let wave = document.getElementById("wave");

	// let passo_chiudo = document.getElementById("passo_chiudo");

	button_a.addEventListener('click',function (){
		console.log("click su button a");

		speaker_a.style.background = "url('assets/img/microphone-on.png') no-repeat right top";
		speaker_a.style.opacity = 1;

		speaker_b.style.background = "url('assets/img/microphone-off.png') no-repeat right top";
		speaker_b.style.opacity = 1;

		wave.style.background = "red";

		button_a.innerHTML = "ON";
		button_b.innerHTML = "OFF";
	}); 

	button_b.addEventListener('click',function (){
		console.log("click su button b");

		speaker_b.style.background = "url('assets/img/microphone-on.png') no-repeat right top";
		speaker_b.style.opacity = 1;

		speaker_a.style.background = "url('assets/img/microphone-off.png') no-repeat right top";
		speaker_a.style.opacity = 1;

		wave.style.background = "green";

		button_b.innerHTML = "ON";
		button_a.innerHTML = "OFF";
	}); 

	passo_chiudo.addEventListener('click',function (){
		console.log("click su button passo_chiudo");

		speaker_b.style.background = "url('assets/img/microphone-on.png') no-repeat right top";
		speaker_b.style.opacity = 0;

		speaker_a.style.background = "url('assets/img/microphone-off.png') no-repeat right top";
		speaker_a.style.opacity = 0;

		wave.style.background = "url('assets/img/onda-piatta.png')" ;

		button_b.innerHTML = "click me";
		button_a.innerHTML = "click me";

	})
}

document.addEventListener('DOMContentLoaded', function() {
	walkie_talkie();
});