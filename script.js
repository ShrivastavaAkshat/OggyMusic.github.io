console.log(" Welcome to Oggy - Fly ")

let musicIndex = 0;
let audioElement = new Audio('music/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let mastermusicName = document.getElementById('mastermusicName');


let music = [
    { musicName: "It's You By Ali Gatie", filePath: "music/1.mp3" },
    { musicName: "Arcade", filePath: "music/2.mp3" },
    { musicName: "Dusk Till Dawn", filePath: "music/3.mp3" },
    { musicName: "Shawn Mendes - There's Nothing Holdin' Me Back", filePath: "music/4.mp3" },
    { musicName: "Glass Animals - Heat Waves", filePath: "5.mp3" },
    { musicName: "Lil Nas X - Old Town Road", filePath: "6.mp3" },
    { musicName: "Måneskin - Beggin", filePath: "music/7.mp3" },
    { musicName: "One Direction - Night Changes", filePath: "music/8.mp3" },
    { musicName: "One Direction - What Makes You Beautiful", filePath: "music/9.mp3" },
    { musicName: "Alec Benjamin - Let Me Down Slowly", filePath: "music/10.mp3" },
    { musicName: "Avicii - The Nights", filePath: "music/11.mp3" },
    { musicName: "Dua Lipa - Levitating Featuring DaBaby", filePath: "music/12.mp3" },
    { musicName: "Ed Sheeran - Perfect", filePath: "music/13.mp3" },
    { musicName: "Linkin Park - In The End", filePath: "music/14.mp3" },
    { musicName: "Hozier - Take Me To Church", filePath: "music/15.mp3" },
    { musicName: "Kauai 45 & Sweet Cocoa - Just the Two of Us", filePath: "music/16.mp3" },
    { musicName: "OneRepublic - Counting Stars", filePath: "music/17.mp3" },
    { musicName: "PUBLIC - Make You Mine", filePath: "music/18.mp3" },
    { musicName: "Justin Bieber - Stay", filePath: "music/19.mp3" },
    { musicName: "The Weeknd - Save Your Tears", filePath: "music/20.mp3" },
    { musicName: "24kGoldn - Mood", filePath: "music/21.mp3" },
    { musicName: "Linkin Park - What I've Done", filePath: "music/22.mp3" },
    { musicName: "Linkin Park - Numb", filePath: "music/23.mp3" },
    { musicName: "Linkin Park - New divide", filePath: "music/24.mp3" },
    { musicName: "Dildara x I Like Me Better", filePath: "music/25.mp3" },
    { musicName: "Tere Bina X Jashn-E-Bahaaraa", filePath: "music/26.mp3" },
    { musicName: "TTera Ban Jaaunga X Kho Gaye Hum Kahan X Dariya ", filePath: "music/27.mp3" },
    { musicName: "Kya Mujhe Pyaar Hai - Lofi Mix ", filePath: "music/28.mp3" },
    { musicName: "love me like you do - slowed + reverb", filePath: "music/29.mp3" },
    { musicName: "Dariya (slowed + reverb)", filePath: "music/30.mp3" },
    { musicName: "Yeh Dooriyan - Lofi Remake (Slowed + Reverb)", filePath: "music/31.mp3" },
    { musicName: "Yahin Hoon Main | Slowed Reverb", filePath: "music/32.mp3" },
    { musicName: "Phir Kabhi (M.S. Dhoni) | Slowed & Reverb ", filePath: "music/33.mp3" },

]



masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
    }

})

audioElement.addEventListener('timeupdate', () => {
    console.log('timeupdate');
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('musicItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('musicItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        musicIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `music/${musicIndex + 1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();

        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})
document.getElementById('next').addEventListener('click', () => {
    if (musicIndex >= 32) {
        musicIndex = 0
    }
    else {
        musicIndex += 1;
    }
    audioElement.src = `music/${musicIndex + 1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', () => {
    if (musicIndex <= 0) {
        musicIndex = 0
    }
    else {
        musicIndex -= 1;
    }
    audioElement.src = `music/${musicIndex + 1}.mp3`;

    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
