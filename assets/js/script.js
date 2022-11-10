// first and second table
let ftable = 5;
let stable = 5;
// for the 5 by 5 swapping and dragging tables
let firstFloorr;
let secondFloorr;
// it keeps information of drag performers, starting from zero after  refresh
let perform = 0;

// initializing tables here 
window.onload = function () {
    for (let f = 0; f < ftable; f++) {
        for (let s = 0; s < stable; s++) {
            let floorr = document.createElement("img");

            //the key event listener for dragging and dropping images between tables
            floorr.addEventListener("dragstart", dragStart);
            floorr.addEventListener("dragover", dragOver);
            floorr.addEventListener("dragenter", dragEnter);
            floorr.addEventListener("dragleave", dragLeave);
            floorr.addEventListener("drop", dragDrop);
            floorr.addEventListener("dragend", dragEnd);
            document.getElementById("table").append(floorr);

        }
    }
    // all images from "puzzle1 image" to "puzzle25 image" in the parts section 
    let parts = [];
    for (let i = 1; i <= ftable * stable; i++) {
        parts.push(i.toString());

    }
    // add a Math.ramdom of the array so each time a refresh is made, the images changes positions 
    parts.reverse(); // blending of images from down to up and 
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

        //  the key event listener for dragging and dropping images between tables
        floorr.addEventListener("dragstart", dragStart);
        floorr.addEventListener("dragover", dragOver);
        floorr.addEventListener("dragenter", dragEnter);
        floorr.addEventListener("dragleave", dragLeave);
        floorr.addEventListener("drop", dragDrop);
        floorr.addEventListener("dragend", dragEnd);
        document.getElementById("parts").append(floorr);

    }

};
//  drag functionality for dragging and dropping images between tables

function dragStart() {
    // image to start click and drag from the puzzle table
    firstFloorr = this;

}

function dragOver(i) {
    // drag the image over to the puzzle table
    i.preventDefault();
}

function dragEnter(i) {
    //click and drag image to enter the second table from the first table
    i.preventDefault();
}

function dragLeave() {
    //has to be here open here
}
function dragDrop() {
    // click image to drag and dropped on the table
    secondFloorr = this;

}
// image drag to end swapping 
function dragEnd() {
    // "perform" an incremental by 1 each time a swap is made
    let firstImg = firstFloorr.src;
    let secondImg = secondFloorr.src;
    firstFloorr.src = secondImg;
    secondFloorr.src = firstImg;
    perform += 1;
    document.getElementById("perform").innerText = perform;

}
