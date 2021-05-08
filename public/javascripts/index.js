function mypress()
{
    var mylist=document.getElementById("state");

    if(mylist.options[mylist.selectedIndex].text==="Bihar")
    {
        window.open("bihar");
    }
    else if(mylist.options[mylist.selectedIndex].text==="Jharkhand")
    {
        window.open("jharkhand");
    }
    else if(mylist.options[mylist.selectedIndex].text==="West Bengal")
    {
        window.open("west-bengal");
    }
    else{
        alert("Enter a state!");
    }
}

//get the form by its id
const form = document.getElementById("contact-form"); 

//1.
const formEvent = form.addEventListener("submit", (event) => {
  event.preventDefault();

  //2.
  let mail = new FormData(form);

  //3.
  sendMail(mail);
})

const sendMail = (mail) => {
    fetch("/send", {
      method: "post",
      body: mail,
  
    }).then((response) => {
      return response.json();
    });
  };