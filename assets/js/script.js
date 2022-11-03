
// for the 5 by 5 swapping and dragging tables
let currFloorr;
let otherFloorr;

let ftable = 5;
let stable = 5;

// it keeps information of drag performers, starting from zero after  refresh
let perform = 0;

// initializing tables here 
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
    // all images from 1 to 25 in the parts section using array 
    let parts = [];
    for (let i = 1; i <= ftable * stable; i++) {
        parts.push(i.toString());
    }


    // add a Math.ramdom of the array so each time a refresh is made, the images changes positions 
    for (let i = 0; i < parts.length; i++) {
        let m = Math.floor(Math.random() * parts.length);
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
    currFloorr = this;
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
}

function dragLeave() {

}

function dragDrop() {
    otherFloorr = this;
}

function dragEnd() {
    if (currFloorr.src.includes("blank")) {
        return;
    }
    // "perform" an incremental by 1 each time a swap is made
    let currImg = currFloorr.src;
    let otherImg = otherFloorr.src;
    currFloorr.src = otherImg;
    otherFloorr.src = currImg;
    perform += 1;
    document.getElementById("perform").innerText = perform;
}
