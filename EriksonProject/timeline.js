var hovered = false

var stage1 
var stage2
var stage3
var stage4

var mouseX
var mouseY
var windowHasLoaded = false;

console.log(stage1)

function assigner()
{
    windowHasLoaded = true
    stage1 = document.getElementById("one")
}

window.onload = assigner

stageBoxes = [stage1//, stage2, stage3, stage4
    ]

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

while (true)
{
    if (hovered == false && windowHasLoaded == true)
    {
        for (var i = 0; i < stageBoxes.length; i++)
        {
            if (stageBoxes[i].matches(":hover"))
            {
                var widget = document.createElement("div")
                widget.setAttribute("class", "widget")
                widget.style.left = mouseX + "px"
                widget.style.top = mouseY = "px"
            }
        }
    }
    sleep(300)
}

