
function cgnBackground(colors){
    let text = document.getElementsByClassName('text');
    let textnav = document.getElementsByClassName('textbar');
    document.body.style.backgroundColor = colors;
    if(colors == '#000000'){
        for (let index of text) {
            index.style.color = '#ffffff';
        }
    }
    else{
        for (let index of text) {
            index.style.color = '#000000';
        } 
    }
}
let navbar = document.getElementById('navBar');
window.addEventListener('scroll', function(){
    if(window.pageYOffset >= 215){
        navbar.classList.add('sticky');
    }
    else{
        navbar.classList.remove('sticky');
    }
});