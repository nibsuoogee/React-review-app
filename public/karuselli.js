//Track const from karuselli.html
const track = document.getElementById("image-track")
window.onmousedown = e => {
    track.dataset.mouseDownAt = e.clientX;
}

window.onmouseup = () => {
    track.dataset.mouseDownAt = "0"
    track.dataset.prevPercentage = track.dataset.percentage;
}


window.onmousemove = e => {
    //If mouse has not been moved
    if (track.dataset.mouseDownAt === "0") return;

    //The amount the mouse has moved on screen
    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX, 
        maxDelta = window.innerWidth / 2;

    //The amount that the menu should be moved, based on the mouse movement
    const percentage = (mouseDelta / maxDelta) * -100,
        nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;

    track.dataset.percentage = nextPercentage;

    //Add animation to make the movement of the menu smoother
    track.animate({
        transform: `translate(${nextPercentage}%, -50%)`
    }, {duration: 1200, fill: "forwards"});

    for(const image of track.getElementsByClassName("image")){
        image.animate({
            objectPosition: `${100 + nextPercentage}% center`
        }, {duration:1200, fill:"forwards"});
    }
}

