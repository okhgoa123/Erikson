var hovered = false

var stage1 
var stage2
var stage3
var stage4

var mouseX
var mouseY
var windowHasLoaded = false;


function assigner()
{
    windowHasLoaded = true
    stage1 = document.getElementById("one")
    stageBoxes = [stage1//, stage2, stage3, stage4
    ]
}

window.onload = assigner

var stageBoxes 

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

document.addEventListener('mousemove', function(event) {
    mouseX = event.clientX;
    mouseY = event.clientY;
  });
  

setInterval(() => {
    if (hovered == false && windowHasLoaded == true)
        {
            for (var i = 0; i < stageBoxes.length; i++)
            {
                console.log(stageBoxes[i].matches(":hover"))
                if (stageBoxes[i].matches(":hover"))
                {
                    console.log("HOVERING")
                    var widget = document.createElement("div")
                    widget.setAttribute("class", "widget")
                    widget.style.left = mouseX + "px"
                    widget.style.top = mouseY = "px"
                    document.body.appendChild(widget)
                }
            }
        }
}, 200);


