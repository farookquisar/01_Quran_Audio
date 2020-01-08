var sound = new Audio();
function playSound(audioUrl) {
  sound.src = audioUrl;//audioUrl.getAttribute('data-url'); //grab the data-url
  sound.play();
}

function preloadAudio()
{
  var audioButtons = document.querySelectorAll("button[data-type='audio']") //select all button elements with data-type = audio
  for (var i = 0; i < audioButtons.length; i++)
  {
    //loop all audio elements
    //audioButtons[i].setAttribute("disabled", true); //disable the element
    var preloader = new Audio();
    //preloader.addEventListener("loadeddata", alert('loaded'), true); // use bind to link the audio button to the function
    preloader.src = 'http://everyayah.com/data/Alafasy_64kbps/001001.mp3';//audioButtons[i].getAttribute("data-url"); //trigger the download
    preloader.load();
  }
}

function enableAudioButton()
{
  this.removeAttribute("disabled");  //reenable the button
}

document.body.addEventListener("load", preloadAudio, true);
