
const planets = [
    {
        name: "Mercury",
        description: "Smallest planet, closest to Sun, no atmosphere, extreme temperatures, no moons.",
        img_url: "./assets/Mercury.png"
    },
    {
        name: "Venus",
        description: "Hottest planet, thick CO₂ atmosphere, rotates backward, Earth-sized, no moons.",
        img_url: "./assets/Venus.png"
    },
    {
        name: "Earth",
        description: "Only known planet with life, water-rich, one moon, moderate temperature.",
        img_url: "./assets/Earth.png"
    },
    {
        name: "Mars",
        description: "Red planet, dusty, cold desert, thin atmosphere, has two small moons.",
        img_url: "./assets/Mars.png"
    },
    {
        name: "Jupiter",
        description: "Largest planet, gas giant, has Great Red Spot, 95 moons, strong magnetic field.",
        img_url: "./assets/Jupiter.png"
    },
    {
        name: "Saturn",
        description: "Famous for its rings, gas giant, 146 moons, mostly hydrogen and helium.",
        img_url: "./assets/Saturn.png"
    },
    {
        name: "Uranus",
        description: "Ice giant, rotates on its side, pale blue, 27 moons, coldest atmosphere.",
        img_url: "./assets/Uranus.png"
    }
];

let currentOpenPlanateCounter = 0

let nextIcon = document.getElementById("right")
let prevIcon = document.getElementById("left")
let planteImage = document.querySelector(".main-img-container img")
let textContainer = document.querySelector("#text-container")
let infoContainer = document.querySelector("#info-container")
let loader = document.querySelector(".loader-body")


let timeLine = gsap.timeline({ paused: true })

timeLine
    .fromTo(".main-img-container img",
        { opacity: 0, scale: 0.8 },
        { duration: 0.4, opacity: 1, scale: 1, ease: "power2.inOut" }
    )
    .fromTo("#text-container",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, stagger: 1, duration: 0.3 },
    )
    .fromTo("#info-container",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.3 },

    );


const handelImageChnage = (currentOpenPlanateCounter) => {

    timeLine.pause(0);

    planteImage.src = planets[currentOpenPlanateCounter].img_url;

    const planetName = planets[currentOpenPlanateCounter].name.toUpperCase().split("");
    textContainer.innerHTML = "";
    planetName.forEach((letter) => {
        const createdSpan = document.createElement("span");
        createdSpan.innerText = letter;
        textContainer.appendChild(createdSpan);
    });
    //textContainer.appendChild("<div class='overlay'></div>")
    infoContainer.innerHTML = planets[currentOpenPlanateCounter].description;
    timeLine.play();
};


const handelCount = (ope) => {
    if (ope == "+") {
        currentOpenPlanateCounter++;
        if (currentOpenPlanateCounter >= planets.length) {
            currentOpenPlanateCounter = 0;
        }
        handelImageChnage(currentOpenPlanateCounter)
    } else if (ope == "-") {
        currentOpenPlanateCounter--;
        if (currentOpenPlanateCounter < 0) {
            currentOpenPlanateCounter = planets.length - 1;
        }
        handelImageChnage(currentOpenPlanateCounter)
    }
}




nextIcon.addEventListener("click", () => handelCount("+"))
prevIcon.addEventListener("click", () => handelCount("-"))


setTimeout(()=>{
 loader.style.display = "none"
 handelImageChnage(currentOpenPlanateCounter)
},2000)

