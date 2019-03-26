
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
        document.getElementById("songs").innerHTML += "<br>" + myData.results[i].trackName ;
    }

}
function failed(){
        document.getElementById("songs").innerHTML += "<br>" + alert(" No results found") ;
}