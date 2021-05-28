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
allGridTilesDiv.style.width= "500px";
allGridTilesDiv.style.height= "500px";


function createGrid(squaresEachSide){//squaresEachSide-Number of grid squares/tiles on each side of the grid

    for(let i=0; i<(squaresEachSide*squaresEachSide); i++){          //This for loop creates a total of 256 div, which will make up our grid
        const singleGridDiv= document.createElement("div");
        singleGridDiv.classList.add("all-grid-tiles");

        singleGridDiv.addEventListener("mouseover", ()=>{

            const randColor= `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`
            singleGridDiv.style.backgroundColor=randColor;
            //singleGridDiv.style.backgroundColor= "black"; //when the mouse hovers over each grid tile, it will
        });                                               //turn black

        singleGridDiv.style.height= "100%";//The height and width of each div is set to 100% of the grid square. 
        singleGridDiv.style.width= "100%";//The exact measurement will depend on the number of squares in the grid



        allGridTilesDiv.appendChild(singleGridDiv);
    }
    allGridTilesDiv.style.gridTemplateColumns= `repeat(${squaresEachSide}, 1fr)`;
    allGridTilesDiv.style.gridTemplateRows= `repeat(${squaresEachSide}, 1fr)`;
    //To get the track size of each column (or row) the total column length is divided evenly by 
    //the number of columns the grid is supposed to have(squaresEachSide) 
    //I think that's what 1fr means :/

}

function promptGrid(){
    let numberSquares= prompt("How many squares do  you want on each side of the grid?");
    return numberSquares;
}

function changeGrid(){


    while(allGridTilesDiv.firstChild){
        allGridTilesDiv.removeChild(allGridTilesDiv.lastChild);
    }

    mainGridDiv.removeChild(allGridTilesDiv);
    let noSquares= promptGrid();
    createGrid(noSquares);
    mainGridDiv.appendChild(allGridTilesDiv);
}


function startEtchASketch(){

    createGrid(promptGrid());

    mainGridDiv.appendChild(allGridTilesDiv);

    body.appendChild(clearButton);

    body.appendChild(mainGridDiv);
}

clearButton.addEventListener("click", ()=>{
    document.querySelectorAll(".all-grid-tiles").forEach((tile)=>{
        tile.style.backgroundColor= "white"; //clears all grid tiles by making them white again    
    });

    setTimeout(changeGrid, 2000);    
});

startEtchASketch();

