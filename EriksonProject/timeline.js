var hovered = false

var stage1 
var stage2
var stage3
var stage4

var mouseX
var mouseY
var windowHasLoaded = false;

var widgetPicList = ["Photos/Image304.jpg", "Photos/DSC03067.JPG", "Photos/DSCN0715.JPG", "Photos/DSCN1335.JPG", "Photos/Yes.jpg", "Photos/orchestra.jpg", "Photos/coding.jpg", "Photos/friends.jpg", "Photos/ad.jpg", "Photos/reflection.jpg"]
var widgerHeadList = ["Trust vs. Mistrust", "Autonomy vs. Shame and Doubt", "Initiative vs. Guilt", "Initiative vs. Guilt", "Industry vs. Inferiority", "Identity vs. Role Confusion", "Identity vs. Role Confusion", "Intimacy vs. Isolation", "Generativity vs. Stagnation", "Integrity vs. Despair"]
var widgetCaptionList = ["My grandmother attending to me a few days after my birth.", "My mom holding me.", "My first Halloween costume.", "Plucking a few flowers.", "Learning to play a song.", "Playing in the RHS Orchestra.", "Solving a coding problem with peers.", "My friend group.", "An ad promoting the clean-up club.", "Reflecting in the wilderness."]
var siteList = ["stage1Main.html", "stage2Main.html", "stage3Main.html", "stage3Main.html", "stage4Main.html", "stage5Main.html", "stage5Main.html", "stage6Main.html", "stage7Main.html", "stage8Main.html"]


function assigner()
{
    windowHasLoaded = true
    stage1 = document.getElementById("one")
    stage2 = document.getElementById("two")
    stage3 = document.getElementById("three")
    stage3a = document.getElementById("four")
    stage4 = document.getElementById("five")
    stage5 = document.getElementById("six")
    stage5a = document.getElementById("seven")
    stage6 = document.getElementById("eight")
    stage7 = document.getElementById("nine")
    stage8 = document.getElementById("ten")
    stageBoxes = [stage1, stage2, stage3, stage3a, stage4, stage5, stage5a, stage6, stage7, stage8]

    for (let i=0; i < stageBoxes.length; i++)
    {
        stageBoxes[i].addEventListener('click', function(event) {
            // Code to execute when the div is clicked
            window.location.href = siteList[i]
          });
    }
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
    console.log(mouseX)
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
                    var widgetHead = document.createElement("h1")
                    var widgetCaption = document.createElement("p")
                    widgetCaption.setAttribute("class", "widgetCaption")
                    widgetHead.setAttribute("class", "widgetHeader")
                    widget.setAttribute("class", "widget")
                    widgetImage.setAttribute("class", "widgetPic")
                    widgetImage.style.backgroundImage = "url('" + widgetPicList[i] + "')"
                    widgetCaption.innerText = widgetCaptionList[i]
                    widgetHead.innerText = widgerHeadList[i]
                    widget.style.left = (mouseX + window.scrollX) + "px"
                    widget.style.top = (mouseY + window.scrollY + 3) + "px"
                    widget.appendChild(widgetImage)
                    widget.appendChild(widgetHead)
                    widget.appendChild(widgetCaption)
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


