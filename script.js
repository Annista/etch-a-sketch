const body= document.querySelector("body");
body.style.backgroundColor= "pink";

const clearButton= document.createElement("div");
clearButton.setAttribute("id", "clear-button");
clearButton.classList.add("pseudo-button");
const clearButtonText= document.createElement("span");
clearButtonText.classList.add("button-text");
clearButtonText.textContent="Clear Grid";
clearButton.appendChild(clearButtonText);

const mainGridDiv= document.createElement("div");  
mainGridDiv.setAttribute("id", "main-grid-div");
mainGridDiv.style.backgroundColor= "purple";

const allGridTilesDiv= document.createElement("div");  //div that contains the grid squares
allGridTilesDiv.setAttribute("id", "all-grid-tiles-div");



for(let i=0; i<(16*16); i++){          //This for loop creates a total of 256 div, which will make up our grid
    const singleGridDiv= document.createElement("div");
    singleGridDiv.classList.add("all-grid-tiles");

    singleGridDiv.addEventListener("mouseover", ()=>{
        singleGridDiv.style.backgroundColor= "black"; //when the mouse hovers over each grid tile, it will
    });                                               //turn black
    allGridTilesDiv.appendChild(singleGridDiv);
}

mainGridDiv.appendChild(allGridTilesDiv);

body.appendChild(mainGridDiv);



clearButton.addEventListener("click", ()=>{
    document.querySelectorAll(".all-grid-tiles").forEach((tile)=>{
        tile.style.backgroundColor= "white"; //clears all grid tiles by making them white again
    });
});

body.appendChild(clearButton);




