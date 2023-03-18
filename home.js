// const pic = document.querySelector('.pic');
// const showPic = document.getElementById('showPic');
// let show = true;

// const togglePic = (showPicture) =>{
//     showPicture? pic.style.display = 'none' : pic.style.display = 'flex';
// }

// console.log(show)
// showPic.addEventListener('click', e=>{
//     togglePic(show);
//     show = !show;
//     console.log(show);
// })

const home = document.querySelector(".home");
const cv = document.querySelector(".cv");
const pic = document.querySelector(".pic");
const link = document.querySelector(".link");

const btnHome = document.getElementById("liHome");
const btnCv = document.getElementById("liCv");
const btnPic = document.getElementById("liPic");
const btnLink = document.getElementById("liLink");

const show = true;

const showHome = (show) =>{
    show? home.style.display = 'block' : home.style.display = 'none';
}
const showCv = (show) =>{
    show? cv.style.display = 'block' : cv.style.display = 'none';
}
const showPic = (show) =>{
    show?  pic.style.display = 'flex' : pic.style.display = 'none';
}
const showLink = (show) =>{
    show? link.style.display = 'block' : link.style.display = 'none';
}

btnHome.addEventListener('click',(e)=>{
    showHome(show);
    showCv(!show);
    showPic(!show);
    showLink(!show);
});
btnCv.addEventListener('click',(e)=>{
    showHome(!show);
    showCv(show);
    showPic(!show);
    showLink(!show);
});
btnPic.addEventListener('click',(e)=>{
    showHome(!show);
    showCv(!show);
    showPic(show);
    showLink(!show);
});
btnLink.addEventListener('click',(e)=>{
    showHome(!show);
    showCv(!show);
    showPic(!show);
    showLink(show);
});