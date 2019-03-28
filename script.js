
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
        document.getElementById("songs").innerHTML += "<tr><td><br>Artist Name: " + myData.results[i].artistName+ "<br></td>";
        document.getElementById("songs").innerHTML += "<td>"+"<br>" + "Track Name: "+ myData.results[i].trackName+ "<br>" + "</td>";
        document.getElementById("songs").innerHTML += "<td>"+"<br>" + " Album: "+ myData.results[i].collectionName+ "<br>" + "</td>";
        document.getElementById("songs").innerHTML += "<td>"+"<br>" + "<img src = " + myData.results[i].artworkUrl100
            +">"+"<br>" + "</td>";
        document.getElementById("songs").innerHTML += "<audio controls='true' src=" + myData.results[i].previewUrl + " id='audio' type='audio/m4a'></audio>"+"</tr>";

    }

}
function failed(){
        document.getElementById("songs").innerHTML += "<br>" + alert(" No results found") ;
}