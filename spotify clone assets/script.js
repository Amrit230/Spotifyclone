console.log("Welcome to Spotify");
// Initailize the variables
let songindex = 0;
let audioElement = new Audio('songs/l1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
masterSongName = document.getElementById('masterSongName');


let songs = [
    { songName: "Let Me Love you", filepath: "songs/l1.mp3", coverPath: "covers/l1.png" },
    { songName: "What Makes You Beautiful", filepath: "songs/l2.mp3", coverPath: "covers/l2.png" },
    { songName: "Shallow", filepath: "songs/l3.mp3", coverPath: "covers/l3.png" },
    { songName: "Good Time", filepath: "songs/l4.mp3", coverPath: "covers/l4.png" },
    { songName: "Safarnama", filepath: "songs/l5.mp3", coverPath: "covers/l5.png" },
    { songName: "Flowers", filepath: "songs/l6.mp3", coverPath: "covers/l6.png" },
    { songName: "Wake Me Up ", filepath: "songs/l7.mp3", coverPath: "covers/l7.png" },
    { songName: "Let Me Down Slowly", filepath: "songs/l8.mp3", coverPath: "covers/l8.png" },
    { songName: "Down", filepath: "songs/l9.mp3", coverPath: "covers/l9.png" },
]



//Handle play pause click
masterPlay.addEventListener('click', () => {
        if (audioElement.paused || audioElement.currentTime <= 0) {
            audioElement.play();
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');


        } else {
            audioElement.pause();
            masterPlay.classList.remove('fa-pause-circle');
            masterPlay.classList.add('fa-play-circle');



        }

    })
    //audioElement.play();
audioElement.addEventListener('timeupdate', () => {

    //updateseekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    console.log(progress);
    myProgressBar.value = progress;

})
myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;

})
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();

        songindex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/l${songindex+1}.mp3`;
        masterSongName.innerText = songs[songindex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');


    })

})
document.getElementById('next').addEventListener('click', () => {
    if (songindex > 9) {
        songindex = 0

    } else {
        songindex += 1;
    }
    audioElement.src = `songs/l${songindex+1}.mp3`;
    masterSongName.innerText = songs[songindex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})
document.getElementById('previous').addEventListener('click', () => {
    if (songindex <= 0) {
        songindex = 0

    } else {
        songindex -= 1;
    }
    audioElement.src = `songs/l${songindex+1}.mp3`;
    masterSongName.innerText = songs[songindex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})