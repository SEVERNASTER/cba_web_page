
var mvScreenIsVisible = false;


document.getElementById('mission-vision').addEventListener('click', function() {
    const mvScreen = document.getElementById('mvscreen');
    mvScreen.classList.add('active');//innecesario, podemos cambiar solamente el estilo style.opacity
    document.getElementById('mvcba').classList.add('active');
});

document.getElementById('x-button').addEventListener('click', closeMVScreen)

function closeMVScreen(){
    const mvScreen = document.getElementById('mvscreen');
    mvScreen.classList.remove('active');
    document.getElementById('mvcba').classList.remove('active');
}

