
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
    var tableInfo = "";
    var rank = 0;



    for(var i = 0; i < numOfRe; i++){
        var rank = i+1;
        tableInfo += "<tr>"+"<td>"+"<br>"+ rank + "<br></td>";
        tableInfo  += "<td>"+"<br>" + "<img src = " + myData.results[i].artworkUrl100
            +">"+"<br>" + "</td>";
        tableInfo += "<td><br>Artist Name: " + myData.results[i].artistName+ "<br></td>";
        tableInfo  += "<td>"+"<br>" + "Track Name: "+ myData.results[i].trackName+ "<br>" + "</td>";
        tableInfo  += "<td>"+"<br>" + " Album: "+ myData.results[i].collectionName+ "<br>" + "</td>";
        tableInfo  += "<td><audio controls='true' src=" + myData.results[i].previewUrl + " id='audio' type='audio/m4a'></audio>"+"</td></tr>";
    }


    document.getElementById("songs").innerHTML = tableInfo;

}
function failed(){
        document.getElementById("songs").innerHTML += "<br>" + alert(" No results found") ;
}