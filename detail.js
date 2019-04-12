

/*var d = new Date('2015-03-04T00:00:00.000Z');
console.log(d.getUTCDay()); // Hours
console.log(d.getUTCMonth());
console.log(d.getUTCFullYear());

console.log(getQueryParameter("song"));
console.log(getQueryParameter("artist"));*/


function start(){

    //var enterName = document.getElementById('enterName').value;
    //var numOfRe = document.getElementById('numberOfResults').value;
    var enterName = getQueryParameter("artist");

    $.ajax({
        url: 'https://itunes.apple.com/search?term=' + enterName,
        type: 'GET',
        crossDomain: true,
        dataType: 'jsonp',
        success: moreInfo,
        //error: failed,
    });

}

//copy me into your script to get a query parameter
function getQueryParameter(name)
{
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
        var pair = vars[i].split("=");
        if(pair[0] == name){return pair[1];}
    }
    return false;
}

function date () {

    var d = new Date('2015-03-04T00:00:00.000Z');
    console.log(d.getUTCMonth());
    console.log(d.getUTCDay());
    console.log(d.getUTCFullYear());

}

function moreInfo(myData){
    console.log(myData);
    var numOfRe = document.getElementById('numberOfResults').value;
    //var d = new Date('2015-03-04T00:00:00.000Z')
    var info = "";
    var i = getQueryParameter("song");
        var d = new Date(myData.results[i].releaseDate);
        info += "<tr></tr><td><br>Release Date: " + d.getUTCMonth()+ d.getUTCDay()+ d.getUTCFullYear() + "<br></td>";
        info += "<td>" + "<br>" + "Track Duration: " + (myData.results[i].trackTimeMillis) / 60000
            + "<br>" + "</td>";
        info += "<td>" + "<br>" + " Explicitness: " + myData.results[i].trackExplicitness
            + "<br>" + "</td>"+"</tr>";

    document.getElementById("info").innerHTML = info;
}