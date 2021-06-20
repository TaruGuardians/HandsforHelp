function mypress()
{
    var mylist=document.getElementById("state");

    if(mylist.options[mylist.selectedIndex].text==="Bihar")
    {
        window.open("rive/bihar.html");
    }
    else if(mylist.options[mylist.selectedIndex].text==="Jharkhand")
    {
        window.open("rive/jharkhand.html");
    }
    else if(mylist.options[mylist.selectedIndex].text==="West Bengal")
    {
        window.open("rive/west-bengal.html");
    }
    else{
        alert("Enter a state!");
    }
}

function donate()
{
    window.open("https://milaap.org/fundraisers/support-taruguardians-1#");
}

function about()
{
    window.open("About Us/AboutUs.html");
}

function changeCSS(cssFile, cssLinkIndex) {

    var oldlink = document.getElementsByClassName("toggle").item(cssLinkIndex);

    var newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", cssFile);
    newlink.setAttribute("class","toggle")

    document.getElementsByTagName("head").item(cssLinkIndex).replaceChild(newlink, oldlink);
}