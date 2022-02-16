document.getElementById('Change-button').addEventListener('click', function() {

    const backgourd = rgbColor();
    document.body.style.backgroundColor = backgourd;
    console.log('red')
})

function rgbColor() {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    return `rgb(${red}, ${green}, ${blue})`;
}