var setColor = "";
document.getElementById("random").addEventListener("click", function () { setColor = "random" });
//document.getElementById("shading").addEventListener("click", function () { setColor = "shading" });


var maxPixels = 500;
var length = prompt("How many squares per side?");
var e = document.getElementById("container");
for (i = 0; i < length; i++) {
    var rowDiv = document.createElement("div");
    rowDiv.className = "row";
    for (j = 0; j < length; j++) {
        let cell = document.createElement("div");
        cell.className = "gridsquare"
        cell.id = (i * 4) + j + 1;
        cell.style.height = maxPixels / length + "px"

        cell.addEventListener("mouseover", function () {
            if (setColor == "shading") {
                //cell.style.backgroundColor = "hsl(0,0%," + shading(defaultShading) + "%)"
                console.log(cell.style.backgroundColor)
            }
            else if (setColor == "random") {
                cell.style.backgroundColor = randomRBG();
            }
            else {
                cell.style.backgroundColor = "grey"
            }
        })
        rowDiv.appendChild(cell);
    }
    e.appendChild(rowDiv);
}

function randomRBG() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + r().toFixed(1) + ')';
}
