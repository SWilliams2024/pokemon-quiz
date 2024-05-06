console.log("check");
let pokeImage = document.querySelector(".pokeImage");
let pokeImage2 = document.querySelector(".pokeImage2");
let pokeText = document.querySelector(".pokeText");
let first = document.querySelector(".first");
let second = document.querySelector(".second");
let electric = document.querySelector(".electric");
let fire = document.querySelector(".fire");
let start = document.querySelector(".start");
console.log("electric");

start.addEventListener("click", function() {
pokeText.innerHTML = "Question #1: What type of Pokemon are you?";    
 electric.style.display = "block";
 fire.style.display = "block";
 first.style.display = "none";  
 second.style.display = "none";
  start.style.display = "none";
    
});
electric.addEventListener("click", function() {
 pokeText.innerHTML = "Question #2: Pokemon Trainers tend to own lots of Pokemon. If You were a Pokemon Trainer, How many Pokemon would you own?";
 pokeImage.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD6Kn50F4Y8XWS31HOtk4Fg0C4d2SQgaoh7A&usqp=CAU";
 first.style.display = "block";  
 second.style.display = "block";
 electric.style.display = "none";
 fire.style.display = "none";
 start.style.display = "none";
});

fire.addEventListener("click", function() {
 pokeText.innerHTML = "Question #2: Pokemon Trainers tend to own lots of Pokemon. If You were a Pokemon Trainer, How many Pokemon would you own?";
 pokeImage.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD6Kn50F4Y8XWS31HOtk4Fg0C4d2SQgaoh7A&usqp=CAU";
 first.style.display = "block";  
 second.style.display = "block";
 electric.style.display = "none";
 fire.style.display = "none";
 start.style.display = "none";
});

first.addEventListener("click", function() {   
 first.style.display = "none";  
 second.style.display = "none";
 electric.style.display = "none";
 fire.style.display = "none";
 start.style.display = "none";
 pokeText.innerHTML = "Congratulations on completing this quiz! If you said you were an Electric type, your spirit Pokemon is Ampharos! If you said you were a Fire type, your spirit Pokemon is Talonflame!";
 pokeImage2.style.display="block";
 pokeImage2.src = "https://staticg.sportskeeda.com/editor/2021/06/45fde-16233937571900-800.jpg";
 pokeImage.src = "https://facts.net/wp-content/uploads/2023/07/12-facts-about-talonflame-1689697517.jpg";
});

second.addEventListener("click", function() {   
 first.style.display = "none";  
 second.style.display = "none";
 electric.style.display = "none";
 fire.style.display = "none";    
 pokeText.innerHTML = "Congratulations on completing this quiz! If you said you were an Electric type, your spirit Pokemon is Miraidon! If you said you were a Fire type, your spirit Pokemon is Reshiram!";
 pokeImage2.style.display="block";
 pokeImage2.src = "https://steamuserimages-a.akamaihd.net/ugc/1976547968168133828/A9C68ADE54C2622131D89AD3F0B14D91292C299C/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false";
 pokeImage.src = "https://videogames.si.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTk0ODc1NjU2ODg0OTg3MDQy/pokemon-reshiram-1.jpg";
});    