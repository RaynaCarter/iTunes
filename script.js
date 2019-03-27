
function start(){

    var enterName = document.getElementById('enterName').value;
    //var numOfRe = document.getElementById('numberOfResults').value;

    $.ajax({
        url: 'https://itunes.apple.com/search?term=' + enterName,
        type: 'GET',
        crossDomain: true,
        dataType: 'jsonp',
        success: myCallback
        //error: failed
    });

}

function myCallback(myData) {
    var numOfRe = document.getElementById('numberOfResults').value;
    console.log(myData);

    for(var i = 0; i < numOfRe; i++){
        document.getElementById("songs").innerHTML += "<tr>"+"<br>" + "Artist Name: "+ myData.results[i].artistName+ "<br>" + "</tr>";
        document.getElementById("songs").innerHTML += "<tr>"+"<br>" + "Track Name: "+ myData.results[i].trackName+ "<br>" + "</tr>";
        document.getElementById("songs").innerHTML += "<tr>"+"<br>" + " Album: "+ myData.results[i].collectionName+ "<br>" + "</tr>";
        document.getElementById("songs").innerHTML += "<td>"+"<br>" + "<img src = " + myData.results[i].artworkUrl100
            +">"+"<br>" + "</td>";


    }

}
function failed(){
        document.getElementById("songs").innerHTML += "<br>" + alert(" No results found") ;
}