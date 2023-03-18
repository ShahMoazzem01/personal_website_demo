const pic = document.querySelector('.pic');
const showPic = document.getElementById('showPic');
let show = true;

const togglePic = (showPicture) =>{
    showPicture? pic.style.display = 'none' : pic.style.display = 'flex';
}

console.log(show)
showPic.addEventListener('click', e=>{
    togglePic(show);
    show = !show;
    console.log(show);
})

