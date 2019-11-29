// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function() {
    let altitude=0;
    let numVer=undefined;
let numHor=undefined;
document.getElementById("takeoff").addEventListener("click", function(event){
    if(window.confirm("Confirm that the shuttle is ready for takeoff.")){
        altitude=10000;
    document.getElementById("flightStatus").innerHTML="<p>Shuttle in flight.</p>";
    document.getElementById("shuttleBackground").style.backgroundColor="blue";
    document.getElementById("spaceShuttleHeight").innerHTML=`<p>${altitude}</p>`;
    document.getElementById("rocket").style.top="250px";
    numVer=250;
    document.getElementById("rocket").style.left="0px";
    numHor=0;

}
});
document.getElementById("landing").addEventListener("click", function(event){
    document.getElementById("spaceShuttleHeight").innerHTML=`<p>${altitude}</p>`;
    window.alert("The shuttle is landing. Landing gear engaged.");
    document.getElementById("flightStatus").innerHTML="<p>The shuttle has landed.</p>";
    document.getElementById("shuttleBackground").style.backgroundColor="green";
    document.getElementById("spaceShuttleHeight").innerHTML=`<p>${altitude}</p>`;
    document.getElementById("rocket").style.top="0px";
    document.getElementById("rocket").style.left="0px";
    numVer=undefined;
    numHor=undefined;
});
document.getElementById("missionAbort").addEventListener("click", function(event){
    if(window.confirm("Confirm that you want to abort the mission.")){
        altitude=0;
    document.getElementById("flightStatus").innerHTML="<p>Mission aborted.</p>";
    document.getElementById("shuttleBackground").style.backgroundColor="green";
    document.getElementById("spaceShuttleHeight").innerHTML=`<p>${altitude}</p>`;
    document.getElementById("rocket").style.top="0px";
    document.getElementById("rocket").style.left="0px";
    numHor=undefined
    numVer=undefined;
    }
});

document.getElementById("up").addEventListener("click", function(event){
    console.log(document.getElementById("rocket").style.top)
    if(document.getElementById("rocket").offsetTop>0){
    numVer -= 10;
    document.getElementById("rocket").style.top=numVer+"px";
    }
    altitude+=10000
    document.getElementById("spaceShuttleHeight").innerHTML=`<p>${altitude}</p>`;

})
document.getElementById("down").addEventListener("click", function(event){
    console.log(numVer)
    if(document.getElementById("rocket").offsetTop<250){
    numVer+=10;
    document.getElementById("rocket").style.top=numVer+"px";
    }
    altitude-=10000
    document.getElementById("spaceShuttleHeight").innerHTML=`<p>${altitude}</p>`;
})

document.getElementById("right").addEventListener("click", function(event){
    if(document.getElementById("rocket").offsetLeft<340){
    numHor+=10;
    document.getElementById("rocket").style.left=numHor+"px";
    }
})
document.getElementById("left").addEventListener("click", function(event){
    if(document.getElementById("rocket").offsetLeft>-10){
    numHor-=10;
    document.getElementById("rocket").style.left=numHor+"px";
    }
});
})