$( document ).ready(function() {

    var httpRequest = new XMLHttpRequest();
    var url = "http://localhost/info2180-lab4/superheroes.php?query=";
    var result = document.querySelector("#result");
  

    let btn = $("form .btn");
    

    btn.on('click', function() {
        let hero = $('#search').val();

        httpRequest.onreadystatechange = superhero;
        httpRequest.open('GET', url + hero);
        httpRequest.send();
        
        }); 

    function superhero() {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                var response = httpRequest.responseText;
                //$("#result").append(response);
                result.innerHTML = response;
                //alert(response);
                      
            } 
            else {
                console.log(httpRequest.status)
                alert('There was a problem with the request.');
             }
        }
    }

});
