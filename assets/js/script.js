
// first and second table
let ftable = 5;
let stable = 5;
// for the 5 by 5 swapping and dragging tables
let firstFloorr;
let secondFloorr;
// it keeps information of drag performers, starting from zero after refresh
let perform = 0;


let order = ["puzzle1", "puzzle2", "puzzle3", "puzzle4", "puzzle5", "puzzle6", "puzzle7", "puzzle8", "puzzle9", "puzzle10", "puzzle11", "puzzle12", "puzzle13", "puzzle14", "puzzle15", "puzzle16", "puzzle17", "puzzle18", "puzzle19", "puzzle20", "puzzle21", "puzzle22", "puzzle23", "puzzle24", "puzzle25"];
// setting tables here 
window.onload = function () {
    for (let f = 0; f < ftable; f++) {
        for (let s = 0; s < stable; s++) {
            let floorr = document.createElement("img");

            // hereis the key event listener for starting,draging over,enter & leave,dragdrop and finish for the first Table
            floorr.addEventListener("dragstart", dragStart);
            floorr.addEventListener("dragover", dragOver);
            floorr.addEventListener("dragenter", dragEnter);
            floorr.addEventListener("dragleave", dragLeave);
            floorr.addEventListener("drop", dragDrop);
            floorr.addEventListener("dragend", dragEnd);

            document.getElementById("table").append(floorr);

        }
    }
    // all images from "puzzle1" to "puzzle25" in the parts section using array 
    let parts = [];
    for (let i = 1; i <= ftable * stable; i++) {
        parts.push(i.toString());
    }
    // add a Math.ramdom of the array so each time a refresh is made, the images changes positions
    parts.reverse();
    for (let i = 0; i < parts.length; i++) {
        let m = Math.floor(Math.random() * parts.length);
        //swapping parts
        let cap = parts[i];
        parts[i] = parts[m];
        parts[m] = cap;

    }

    for (let i = 0; i < parts.length; i++) {
        let floorr = document.createElement("img");
        floorr.src = "assets/images/puzzle" + parts[i] + ".jpg";

        //  the key event listener for starting,draging over,enter & leave,dragdrop and finish for the second Table
        floorr.addEventListener("dragstart", dragStart);
        floorr.addEventListener("dragover", dragOver);
        floorr.addEventListener("dragenter", dragEnter);
        floorr.addEventListener("dragleave", dragLeave);
        floorr.addEventListener("drop", dragDrop);
        floorr.addEventListener("dragend", dragEnd);
        document.getElementById("parts").append(floorr);
    }
}
//  the drag functionality when starting,draging over,enter & leave,dragdrop and finish

function dragStart() {
    //this is for img floorr being dragged
    firstFloorr = this;

}

function dragOver(i) {
    i.preventDefault();
}

function dragEnter(i) {
    i.preventDefault();
}

function dragLeave() {

}
function dragDrop() {
    //this is for the img floorr being dropped on
    secondFloorr = this;
}

function dragEnd() {
    if (firstFloorr.src.includes("blank")) {
        return;
    }
    // "perform" an incremental by 1 each time a swap is made
    let firstImg = firstFloorr.src;
    let secondImg = secondFloorr.src;
    firstFloorr.src = secondImg;
    secondFloorr.src = firstImg;
    perform += 1;
    document.getElementById("perform").innerText = perform;

    checkIfSolved()
}
function checkIfSolved() {
    let userAnswer = document.querySelectorAll(".table");
    let correct = document.getElementById(".table")
    if (userAnswer === correct) {
        correct = true;
    }
    if (correct) {
        alert("Hey! CONGRATULATIONS! :D");

    }
}
