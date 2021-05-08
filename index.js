function mypress()
{
    var mylist=document.getElementById("state");

    if(mylist.options[mylist.selectedIndex].text==="Bihar")
    {
        window.open("bihar.html");
    }
    else if(mylist.options[mylist.selectedIndex].text==="Jharkhand")
    {
        window.open("jharkhand.html");
    }
    else if(mylist.options[mylist.selectedIndex].text==="West Bengal")
    {
        window.open("west-bengal.html");
    }
    else{
        alert("Enter a state!");
    }
}