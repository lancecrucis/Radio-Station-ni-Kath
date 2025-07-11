window.onload = function(){
    document.querySelector(".pop-up-enter").style.display="flex";
};

function closePopUp(){
    document.querySelector(".pop-up-enter").style.display="none";
    togglePlay();
    showlyrics();
}
const 
image = document.querySelector('.playlist-image img'),
title = document.querySelector('.playlist-title'),
artist = document.querySelector('.playlist-author'),
currentTimes = document.querySelector('#current-time'),
durationTime = document.querySelector('#duration'),
progress = document.querySelector('.progress-bar'),
playerprogress = document.querySelector('.playlist-progress'),
prevbtn = document.getElementById('back'),
nextbtn = document.getElementById('next'),
playbtn = document.getElementById('play')


const music = new Audio();

const songs = [
    {
        path: 'Bruno Mars - Just The Way You Are (Lyrics) [u7XjPmN-tHw].mp3',
        displayName: 'Just The Way You Are',
        cover: 'images/ab67616d0000b273f6b55ca93bd33211227b502b.jpg',
        artist: 'Bruno Mars',
        lyrics: [
        `"There's not a thing that I would change"` 
        ]
    },
    {
        path: 'YouTube [IdB163Ko5VE].mp3',
        displayName: `Nothin'on you`,
        cover: 'images/ab67616d0000b2732a9b8127fc5585dc7afb9ef7.jpg',
        artist: 'Bruno Mars',
        lyrics: [
        `"They got nothin' on you, baby"` 
        ]
    },
    {
        path: 'Taylor Swift - So High School (Lyrics) [fwma5KbLL7I].mp3',
        displayName: 'So High School',
        cover: 'images/ab67616d0000b2738ecc33f195df6aa257c39eaa.jpg',
        artist: 'Hale',
        lyrics: [
        `"I know how to ball, you know Aristotle"` 
        ]
    },
    {
        path: 'Hale - Blue Sky (Official Lyric Video) [mJPpBlhHd04].mp3',
        displayName: 'Blue Sky',
        cover: 'images/ab67616d0000b27389d3628e226a3c7e0d0afbc3.jpg',
        artist: 'Hale',
        lyrics: [
        `"Intro"` 
        ]
    },
    {
        path: '[Sub Thai] Last Night on Earth - Green Day [oVZg-WwgivI].mp3',
        displayName: 'Last Night on Earth',
        cover: 'images/ab67616d0000b273c2ced39899b0d67cd5a724fa.jpg',
        artist: 'Green Day',
        lyrics: [
        `"I walked for miles 'til I found you"` 
        ]
    },
    {
        path: 'Rico Blanco - Balisong Transformed 2016 [gVnn9OQ-zF0].mp3',
        displayName: 'Balisong',
        cover: 'images/ab67616d0000b2730a83b5d4a9de7bbb62ef0fc0.jpg',
        artist: 'Rico Blanco',
        lyrics: [
        `"Never in my life have I been more sure"`,
        `You're everything I wanted`
        ]
    },
    {
        path: 'Your Universe (Acoustic) [m-fNVB-fAjk].mp3',
        displayName: 'Your Universe',
        cover: 'images/ab67616d0000b273c77d5f60b6752e68ebb26297 (1).jpg',
        artist: 'Rico Blanco',
        lyrics: [
        `"You can thank your stars all you want"`,
        `But I'll always be the lucky one`
        ]
    },
    {
        path: 'YouTube [QslsIWyagvU].mp3',
        displayName: 'Kahel na langit',
        cover: 'ab67616d0000b273d30095e21cd6ba4831174929.jpg',
        artist: 'Maki',
        lyrics: [
        `"Minsan, gusto kong magsumbong sa 'yo"`,
        `Kapag pagod na pagod na ako`
        ]
    },
    {
        path: 'Aphrodite.mp3',
        displayName: 'Aphrodite',
        cover: 'images/1900x1900-000000-80-0-0.jpg',
        artist: 'The Ridleys',
        lyrics: [
        `"You gave me one look and now I can’t get my mind off of you"`
        ]
    },
    {
        path: 'Rico Blanco - You’ll Be Safe Here (Official Lyric Video) [xyg1YlwWMNw].mp3',
        displayName: `You'll Be Safe Here`,
        cover: 'images/ab67616d0000b2734b582e1cedf6bb25cf3f922b.jpg',
        artist: 'Rico Blanco',
        lyrics: [
        `"When everything's unclear"`,
        `You'll be safe here`
        ]
    },
    {
        path: 'One Direction - 18 (Audio) [VRpzJabYlQQ].mp3',
        displayName: '18',
        cover: 'images/ab67616d0000b273d304ba2d71de306812eebaf4.jpg',
        artist: 'One Direction',
        lyrics: [
        `"I have loved you since we were 18"`,
        `Long before we both thought the same thing`
        ]
    },
    {
        path: 'Be With You (Live at The Cozy Cove) - The Ridleys.mp3',
        displayName: 'Be With You',
        cover: 'images/ab67616d0000b27373a9685e8187b4416598eab7 (1).jpg',
        artist: 'The Ridleys',
        lyrics: [
        `"While we both are working on ourselves in our own ways"`,
        `I just wanna be with you every single day`
        ]
    },
    {
        path: 'One Direction - Perfect (Audio).mp3',
        displayName: 'Perfect',
        cover: 'images/ab67616d0000b273241e4fe75732c9c4b49b94c3.jpg',
        artist: 'One Direction',
        lyrics: [
        `"If you like to do the things you know that we shouldn't do"`,
        `Then, baby, I'm perfect. Baby, I'm perfect for you`
        ]
    },
    {
        path: 'Passenger Seat - Stephen Speaks (Lyrics) 🎵 [qwSrih8vpD0].mp3',
        displayName: 'Passenger Seat',
        cover: 'images/ab67616d00001e0274377186e915567e1753b99f.jpg',
        artist: 'Stephen Speaks',
        lyrics: [
        `"Try to tell her simply"`,
        `That I've got all that I need`
        ]
    },
    {
        path: "Jason Mraz - I'm Yours (Lyrics) [nxfHXrzddMY].mp3",
        displayName: "I'm Yours",
        cover: 'images/images.jpg',
        artist: 'Jason Mraz',
        lyrics: [
            `"It cannot wait, I'm yours"`
        ]
    },
    
];

function showlyrics(){
     const lyricsDiv = document.querySelector('.lyrics');
    const currentSong = songs[musicIndex];
    if (currentSong.lyrics) {
        lyricsDiv.innerHTML = currentSong.lyrics.join('<br>');
    } else {
        lyricsDiv.innerHTML = 'No lyrics available.';
    }
}








let musicIndex = 0;
let isPlaying = false;

function togglePlay(){
    if(!isPlaying){
        playmusic();
    }else{
        pausemusic();
    }
}
function playmusic(){
    isPlaying = true;

    playbtn.classList.replace('playlist-play', 'playlist-pause');
    playbtn.setAttribute('title', 'Pause');
    playbtn.querySelector('img').src='images/pause.png';
    music.play();
}
function pausemusic(){
    isPlaying = false;

    playbtn.classList.replace('playlist-pause', 'playlist-play');
    playbtn.setAttribute('title', 'Play');
    playbtn.querySelector('img').src='images/play-button-arrowhead.png';
    music.pause();
}
function loadmusic(song){
    music.src=song.path;
    title.textContent = song.displayName;
    artist.textContent = song.artist;
    image.src=song.cover;
}
function changeMusic(direction){
    musicIndex = (musicIndex + direction + songs.length) % songs.length;
    loadmusic(songs[musicIndex]);
    playmusic();
    showlyrics();
}
function updateProgressBar(){
    const {duration, currentTime} = music;
    const progressPercent =(currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;

    const formatTime = (time) => String(Math.floor(time)).padStart(2, '0');

    durationTime.textContent = `${formatTime(duration / 60)}: ${formatTime(duration % 60)}`;
    currentTimes.textContent = `${formatTime(currentTime / 60)}: ${formatTime(currentTime % 60)}`;
}


function setProgressBar(e){
    const width = playerprogress.clientWidth;
    const clickX = e.offsetX;
    music.currentTime = (clickX / width) * music.duration;
}

playbtn.addEventListener('click', togglePlay);
prevbtn.addEventListener('click', () => changeMusic(-1));
nextbtn.addEventListener('click', () => changeMusic(1));
music.addEventListener('ended', () => changeMusic(1));
music.addEventListener('timeupdate', updateProgressBar);
playerprogress.addEventListener('click', setProgressBar);

loadmusic(songs[musicIndex]);


