var hovered = false

var stage1 
var stage2
var stage3
var stage4

var mouseX
var mouseY
var windowHasLoaded = false;

var widgetPicList = ["Photos/Image304.jpg"]

function assigner()
{
    windowHasLoaded = true
    stage1 = document.getElementById("one")
    stageBoxes = [stage1 ]
}

window.onload = assigner

var stageBoxes 

function flushWidgets()
{
    var widgets = document.getElementsByClassName("widget")
        for (var j = 0; j < widgets.length; j++)
        {
            widgets[j].remove()
        }
}

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
                console.log(stageBoxes[i])
                console.log(stageBoxes[i].matches("div:hover"))
                if (stageBoxes[i].matches("div:hover"))
                {
                    console.log("HOVERING")
                    var widget = document.createElement("div")
                    var widgetImage = document.createElement("div")
                    widget.setAttribute("class", "widget")
                    widgetImage.setAttribute("class", "widgetPic")
                    widgetImage.style.backgroundImage = "url('" + widgetPicList[i] + "')"
                    widget.style.left = mouseX + "px"
                    widget.style.top = (mouseY + 3) + "px"
                    widget.appendChild(widgetImage)
                    document.body.appendChild(widget)
                    console.log(widget)
                    hovered = true 
                    break
                }
                //flush all widgets if not
                flushWidgets()
            }
    }
    //when hover is true, continually check to see if still hovering
    if (hovered == true)
    {
        for (var i = 0; i < stageBoxes.length; i++)
        {
            if (stageBoxes[i].matches("div:hover"))
            {
                break
            }
            if (i == stageBoxes.length - 1)
            {
                //when hover is false, delete all widgets
                hovered = false
                flushWidgets()
            }
        }
    }
}, 200);


