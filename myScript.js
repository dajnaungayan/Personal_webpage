planets = document.getElementById("planets");
hoverplanets = document.getElementById("hover-planets");

mercury = document.getElementsByClassName("mercury");
venus = document.getElementsByClassName("venus");
earth = document.getElementsByClassName("earth");
mars = document.getElementsByClassName("mars");
jupiter = document.getElementsByClassName("jupiter");
saturn = document.getElementsByClassName("saturn");
uranus = document.getElementsByClassName("uranus");
neptune = document.getElementsByClassName("neptune");

maxTranslate = 44;
minTranslate = -40;

maxScreenPercent = 66;
minScreenPercent = 33;

isOnDiv = false;

window.onmousemove = e => {
    const mouseDelta = e.clientX;
    const maxDelta = window.innerWidth;
    const percentage = ( mouseDelta / maxDelta ) * -100;
    var number = Math.min(Math.max(parseInt(percentage), ( -1 * maxScreenPercent ) ), ( -1 * minScreenPercent ));
    
    if(isOnDiv)
    {
        number = number * -1;
        number = number - minScreenPercent;
        number = number * ( maxTranslate - minTranslate ) / minScreenPercent ;
        number = number - (( maxTranslate - minTranslate ) / 2) ;
        number = -1 * number;

        planets.animate({
            transform: `translate(${number}%, 0%)`
        }, { duration: 1200, fill: "forwards"});
        // planets.style.transform = `translate(${number}%, 0%)`;
    }
}

hoverplanets.addEventListener("mouseover", function() {
    isOnDiv = true;
});

hoverplanets.addEventListener("mouseout", function() {
    isOnDiv = false;
});










// mercury[0].addEventListener("mouseover", function() {
//     mercury[0].animate(
//         {width: `var(--magnified-width)`, 
//         height: `var(--magnified-width)`},
//         { duration: 100, fill: "forwards"});
// });

// mercury[0].addEventListener("mouseout", function() {
//     mercury[0].animate(
//         {width: `var(--mercury-diameter)`, 
//         height: `var(--mercury-diameter)`},
//         { duration: 100, fill: "forwards"});
// });

// venus[0].addEventListener("mouseover", function() {
//     venus[0].animate(
//         {width: `var(--magnified-width)`, 
//         height: `var(--magnified-width)`},
//         { duration: 100, fill: "forwards"});
// });

// venus[0].addEventListener("mouseout", function() {
//     venus[0].animate(
//         {width: `var(--venus-diameter)`, 
//         height: `var(--venus-diameter)`},
//         { duration: 100, fill: "forwards"});
// });

// earth[0].addEventListener("mouseover", function() {
//     earth[0].animate(
//         {width: `var(--magnified-width)`, 
//         height: `var(--magnified-width)`},
//         { duration: 100, fill: "forwards"});
// });

// earth[0].addEventListener("mouseout", function() {
//     earth[0].animate(
//         {width: `var(--earth-diameter)`, 
//         height: `var(--earth-diameter)`},
//         { duration: 100, fill: "forwards"});
// });

// mars[0].addEventListener("mouseover", function() {
//     mars[0].animate(
//         {width: `var(--magnified-width)`, 
//         height: `var(--magnified-width)`},
//         { duration: 100, fill: "forwards"});
// });

// mars[0].addEventListener("mouseout", function() {
//     mars[0].animate(
//         {width: `var(--mars-diameter)`, 
//         height: `var(--mars-diameter)`},
//         { duration: 100, fill: "forwards"});
// });

// jupiter[0].addEventListener("mouseover", function() {
//     jupiter[0].animate(
//         {width: `var(--magnified-width)`, 
//         height: `var(--magnified-width)`},
//         { duration: 100, fill: "forwards"});
// });

// jupiter[0].addEventListener("mouseout", function() {
//     jupiter[0].animate(
//         {width: `var(--jupiter-diameter)`, 
//         height: `var(--jupiter-diameter)`},
//         { duration: 100, fill: "forwards"});
// });

// saturn[0].addEventListener("mouseover", function() {
//     saturn[0].animate(
//         {width: `var(--magnified-width)`, 
//         height: `var(--magnified-width)`},
//         { duration: 100, fill: "forwards"});
// });

// saturn[0].addEventListener("mouseout", function() {
//     saturn[0].animate(
//         {width: `var(--saturn-diameter)`, 
//         height: `var(--saturn-diameter)`},
//         { duration: 100, fill: "forwards"});
// });

// uranus[0].addEventListener("mouseover", function() {
//     uranus[0].animate(
//         {width: `var(--magnified-width)`, 
//         height: `var(--magnified-width)`},
//         { duration: 100, fill: "forwards"});
// });

// uranus[0].addEventListener("mouseout", function() {
//     uranus[0].animate(
//         {width: `var(--uranus-diameter)`, 
//         height: `var(--uranus-diameter)`},
//         { duration: 100, fill: "forwards"});
// });

// neptune[0].addEventListener("mouseover", function() {
//     neptune[0].animate(
//         {width: `var(--magnified-width)`, 
//         height: `var(--magnified-width)`},
//         { duration: 100, fill: "forwards"});
// });

// neptune[0].addEventListener("mouseout", function() {
//     neptune[0].animate(
//         {width: `var(--neptune-diameter)`, 
//         height: `var(--neptune-diameter)`},
//         { duration: 100, fill: "forwards"});
// });