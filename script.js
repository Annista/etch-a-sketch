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

let preNumSquares; //stores the number of squares that was previously entered by user


function createGrid(squaresEachSide){//squaresEachSide-Number of grid squares/tiles on each side of the grid

    for(let i=0; i<(squaresEachSide*squaresEachSide); i++){    //This for loop creates a total of 
        const singleGridDiv= document.createElement("div");    // squaresEachSide*squaresEachSide divs, 
        singleGridDiv.classList.add("all-grid-tiles");         //which will make up our grid

        singleGridDiv.addEventListener("mouseover", ()=>{

            const randColor= `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`
            singleGridDiv.style.backgroundColor=randColor;
             //when the mouse hovers over each grid tile, it will change into a randomized color
        });                                               

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

    let numberSquares;

    do{
         numberSquares= prompt("How many squares do  you want on each side of the grid? (1-100)");

         if (((numberSquares<1) || ( numberSquares>100) )&& (!(numberSquares===null))){  
            alert("Invalid value!! Must be between 1 and 100");   //Makes the user know that they have entered 
                                                                   //an invalid value
        }

         if(numberSquares===null){    //This indicates that the user clicked 'cancel'
             return preNumSquares;    //In this case, the previous value (of number of squares) entered 
                                      //is returned
         }
    }while(numberSquares<1 || numberSquares>100); //an input that is less than 1 or more than 100 is not valid, 
                                  //so the loop will keep going until the prompt receives a valid value

    
    preNumSquares=numberSquares;//current number of squares is stored in this variable in case user decides to 
                                //select 'cancel' in the future. At that time the program wll just use the 
                                //previous number of squares to make the new grid

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

    setTimeout(changeGrid, 200);    
});

startEtchASketch();

