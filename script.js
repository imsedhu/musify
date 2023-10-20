/* const previous = document.querySelector('#pre');
const play = document.querySelector('#play');
const next = document.querySelector('#next');
const track_image = document.querySelector('#song-img');
const title = document.querySelector('#song-title');
const artist = document.querySelector('#song-artist');
const slider = document.querySelector('#range');

let timer;
let autoplay = 1;

let index_no = 0;
let playing_song = false;

let track = document.createElement('audio');

let All_song = [
  {
    name:"Hukum(From Jailer)",
    path:"songs/Hukum.mp3",
    img:"image/jailer.jpeg",
    artist:"Anirudh Ravichandar"
  },
  {
    name:"Naa Ready(From Leo",
    path:"songs/Naa-Ready.mp3",
    img:"image/leo.jpeg",
    artist:"Anirudh Ravichandar"
  },
  {
    name:"Vikram Title Track(from Vikram)",
    path:"songs/Vikram.mp3",
    img:"image/vikram.jpeg",
    artist:"Anirudh Ravichandar"
  }
];

function load_track(index_no){
  clearInterval(timer);
  reset_slider();

  track.src = All_song[index_no].path;
  title.innerHTML = All_song[index_no].name;
  track_image.src = All_song[index_no].img;
  artist.innerHTML = All_song[index_no].artist;

  timer = setInterval(range_slider, 1000);
  total.innerHTML = All_song.length;
  Present.innerHTML = index_no + 1;
};
load_track(index_no); 

play.addEventListener('click', justPlay());

function justPlay(){
  if(playing_song == false){
    playSong();
  }else{
    pauseSong();
  }
};

function reset_slider(){
  slider.value = 0;
}

function playsong(){
  track.play();
  playing_song = true;
  play.innerHTML = '<i class="fa fa-pause"></i>';
};

function pausesong(){
  track.pause();
  playing_song = false;
  play.innerHTML = '<i class="fa fa-play"><i>';
};

function nextSong(){
  if(index_no < All_song.length -1){
    index_no += 1;
    load_track(index_no);
    playsong();
  }else{
    index_no = 0;
    load_track(indexNo);
    playSong();
  }
}; 

function preSong(){
  if(index_no > 0){
    index_no += -1;
    loadSong(index_no);
    playSong();
  }else{
    index_no = All_song.length;
    loadSong(index_no);
    playSong();
  }
}; 


function changeDuration(){
  slider_Position = song.duration * (slider.value/100);
  song.currentTime = slider_Position;
}; */