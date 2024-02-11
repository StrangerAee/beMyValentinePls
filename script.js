const title = document.querySelector('.title');
const img =  document.querySelector('.image');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');

let imageIndex = 0; // Индекс текущей картинки
const images = [
    './img/gif7.gif',
    './img/gif8.gif',
    './img/gif9.gif',
    './img/gif10.gif',
];

let textIndex = 0;
let textsForNoBtn = [
    'Are you sure?',
    'Pookie please..',
    'Don`t do this to me..',
    'You are breaking my heart..',
    'I`m gonna cry...',
    'Whyyyyyy?...'
]

let fontSizeYes = 2;
let fontSizeNo= 2;



yesBtn.addEventListener('click', (e) => {
    img.src = './img/bubu-dudu-kiss.gif';
    title.textContent = 'Yayyyyy!! :3';
});

noBtn.addEventListener('click', doYesBigger);

function doYesBigger() {
    fontSizeNo -= 0.4;
    noBtn.style.fontSize = fontSizeNo + 'em';
    
    fontSizeYes += .6;
    yesBtn.style.fontSize =  fontSizeYes + 'em';

    if(fontSizeNo <= 0.4) {
        noBtn.style.display = 'none'
    }

    imageIndex = (imageIndex + 1) % images.length;
    img.src = images[imageIndex];
    
    textIndex = (textIndex + 1) % textsForNoBtn.length;
    noBtn.textContent = textsForNoBtn[textIndex];
}