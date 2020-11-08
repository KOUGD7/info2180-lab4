$( document ).ready(function() {

    var httpRequest = new XMLHttpRequest();
    var url = "http://localhost/info2180-lab4/superheroes.php"; 

    let btn = $("form .btn");
    btn.click(function() {

        httpRequest.onreadystatechange = doSomething;
        httpRequest.open('GET', url);
        httpRequest.send();

        function doSomething() {
            if (httpRequest.readyState === XMLHttpRequest.DONE) {
                if (httpRequest.status === 200) {
                    var response = httpRequest.responseText;
                    alert(response);
                } 
                else {
                    console.log(httpRequest.status)
                    alert('There was a problem with the request.');
                }
            }
        }
        
        }); 
   
   });



/* window.addEventListener("load", addmessage);

function addmessage() {
    const btn = document.querySelector("form .btn");
    btn.addEventListener("click", function(event) {
    event.preventDefault();

    msg = document.querySelector("#search").value;

    if (msg == ""){
        alert("Please enter a valid hero" + msg);
    }
    else{
        alert("Thank You! Your email address " + msg);
    }
    //onsole.log("Nope.");
    });
} */