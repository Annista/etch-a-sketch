const body= document.querySelector("body");
body.style.backgroundColor= "pink";

const mainGridDiv= document.createElement("div");
mainGridDiv.setAttribute("id", "main-grid-div");

const allGridTilesDiv= document.createElement("div");
allGridTilesDiv.setAttribute("id", "all-grid-tiles-div");

mainGridDiv.style.backgroundColor= "purple";
//mainGridDiv.style.padding= "30px";

for(let i=0; i<(16*16); i++){
    const singleGridDiv= document.createElement("div");
    //singleGridDiv.style.backgroundColor= "red";
    //singleGridDiv.style.height= "10px";
    //singleGridDiv.style.width= "10px";
    //singleGridDiv.style.margin= "10px";
    singleGridDiv.classList.add("all-grid-tiles");
    allGridTilesDiv.appendChild(singleGridDiv);
}

mainGridDiv.appendChild(allGridTilesDiv);

body.appendChild(mainGridDiv);

console.log(mainGridDiv.childElementCount);




