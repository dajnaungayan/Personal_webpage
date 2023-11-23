planets         = document.getElementById("planets");
hoverplanets    = document.getElementById("hover-planets");
focusLayer      = document.getElementById("focus-layer");
backgroundSpace = document.getElementById("background-space");

mercury         = document.getElementsByClassName("mercury");
venus           = document.getElementsByClassName("venus");
earth           = document.getElementsByClassName("earth");
mars            = document.getElementsByClassName("mars");
jupiter         = document.getElementsByClassName("jupiter");
saturn          = document.getElementsByClassName("saturn");
uranus          = document.getElementsByClassName("uranus");
neptune         = document.getElementsByClassName("neptune");

planetWidthMap = {};

focusedPlanetWidth = '50';
planetWidthMap['mercury planet']    = '10';
planetWidthMap['venus planet']      = '13';
planetWidthMap['earth planet']      = '17';
planetWidthMap['mars planet']       = '10';
planetWidthMap['jupiter planet']    = '30';
planetWidthMap['saturn planet']     = '25';
planetWidthMap['uranus planet']     = '17';
planetWidthMap['neptune planet']    = '13';

focusedPlanetsArray = [false, false, false, false, false, false, false, false];


const allPlanets = [mercury, venus, earth, 
                    mars, jupiter, saturn, 
                    uranus, neptune];

line = document.getElementById("line");

window.onmousedown = e => {
    
    planets.dataset.mouseDownAt = e.clientX;

}

window.onmousemove = e => {
    allPlanets.forEach(planetAtCenter);
    if(planets.dataset.mouseDownAt === "0") return;

    const mouseDelta = parseFloat(planets.dataset.mouseDownAt) - e.clientX;
    const percentage = -mouseDelta;
    const nextPercentage = parseFloat(planets.dataset.prevPercentage) + percentage;
    planets.dataset.percentage = nextPercentage;
    planets.animate({
        transform: `translate(${nextPercentage}px, 0%)`
    }, { duration: 1200, fill: "forwards"});
}

window.onmouseup = e => {
    planets.dataset.mouseDownAt = "0";
    planets.dataset.prevPercentage = planets.dataset.percentage;
    
    allPlanets.forEach(planetAtCenter);
}

// For mobile
window.onpointerup = e => {
    
    planets.dataset.mouseDownAt = e.clientX;
}

window.onpointermove = e => {
    allPlanets.forEach(planetAtCenter);
    if(planets.dataset.mouseDownAt === "0") return;

    const mouseDelta = parseFloat(planets.dataset.mouseDownAt) - e.clientX;
    const percentage = -mouseDelta;
    const nextPercentage = parseFloat(planets.dataset.prevPercentage) + percentage;
    planets.dataset.percentage = nextPercentage;

    planets.animate({
        transform: `translate(${nextPercentage}px, 0%)`
    }, { duration: 1200, fill: "forwards"});

    backgroundSpace.animate({
        transform: `translate(${-nextPercentage/100}px, 0%)`
    }, { duration: 1200, fill: "forwards"});
}

window.onpointerdown = e => {
    planets.dataset.mouseDownAt = "0";
    planets.dataset.prevPercentage = planets.dataset.percentage;
    
    allPlanets.forEach(planetAtCenter);
}



function planetAtCenter(planet0, index) {
    planet = planet0[0];
    const planetRect1 = planet.getBoundingClientRect();
    const lineRect2 = line.getBoundingClientRect();

    overlap = !( (planetRect1.top > lineRect2.bottom) ||
                (planetRect1.right < lineRect2.left) ||
                (planetRect1.bottom < lineRect2.top) ||
                (planetRect1.left > lineRect2.right)
    );

    if(overlap)
    {
        focusedPlanetsArray[index] = overlap;
        planet.animate({
            width: `${focusedPlanetWidth}vh`,
            height: `${focusedPlanetWidth}vh`,
            zIndex: "999",
            filter: "brightness(100%)"
        }, { duration: 1200, fill: "forwards"});
    }

    else{
        focusedPlanetsArray[index] = overlap;
        if(isFocusedPlanetPresent()){
            planet.animate({
                width: `${planetWidthMap[planet.className]}vh`,
                height: `${planetWidthMap[planet.className]}vh`,
                zIndex: "-1",
                filter: "brightness(50%)"
            }, { duration: 1200, fill: "forwards"});
        }
        else{
            planet.animate({
                width: `${planetWidthMap[planet.className]}vh`,
                height: `${planetWidthMap[planet.className]}vh`,
                zIndex: "-1",
                filter: "brightness(100%)"
            }, { duration: 1200, fill: "forwards"});
        }
    }

    return overlap;
}

function isFocusedPlanetPresent() {
    focusedPlanetPresent = false;
    for(var i = 0; i < focusedPlanetsArray.length ; i++ )
    {
        focusedPlanetPresent = focusedPlanetPresent || focusedPlanetsArray[i];
    }

    return focusedPlanetPresent;
}

// function centerToNearestPlanet() {
//     var center = innerWidth/2;
//     var planetRect = earth[0].getBoundingClientRect();
//     var centerDiff = parseFloat(planets.dataset.percentage) + center;
//     var centerDiff = centerDiff - planetRect.left;
//     centerDiff = centerDiff + (planetRect.width / 2);

//     // centerDiff = 100;

//     // planets.style.transform = `translate(${centerDiff}px, 0%)`;
//     planets.animate({
//         transform: `translate(${centerDiff}px, 0%)`
//     }, { duration: 1200, fill: "forwards"});

//     planets.dataset.percentage = planets.dataset.percentage + centerDiff ;

// }












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
