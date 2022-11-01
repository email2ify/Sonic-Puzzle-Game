
// the 5 by 5 stable view
let ftable = 5;
let stable = 5;

let perform = 0;



window.onload = function () {
    for (let f = 0; f < ftable; f++) {
        for (let s = 0; s < stable; s++) {

            let floor = document.createElement("img");
           
            
            

            document.getElementById("table").append(floor);
        }
    }
    // From 1 to 25pcs of the image puzzle using array
    
    let parts = [];
    for (let i = 1; i <= ftable * stable; i++) {
        parts.push(i.toString());

    }
    for (let i = 0; i < parts.length; i++) {
        let floor = document.createElement("img");
        floor.src = "./images/" + parts[i] + ".jpg";

        document.getElementById("parts").append(floor);
    }
}