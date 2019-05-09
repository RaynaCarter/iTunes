


function start2(){
    var enterName = getQueryParameter("artist");

    $.ajax({
        url: 'https://itunes.apple.com/search?term=' + enterName,
        type: 'GET',
        crossDomain: true,
        dataType: 'jsonp',
        success: moreInfo,
        error: failed,
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



function moreInfo(myData){
    console.log(myData);

    var info = "";
    var i = getQueryParameter("song");

        var d = new Date(myData.results[i].releaseDate);
        var url = myData.results[i].collectionViewUrl;


    info += "<tr></tr><td><br><a href='" + url + "' target='_blank'>" + "Apple Music page of "+ myData.results[i].collectionName+ "</a></p><br></td>";

        info += "<td><br>Release Date: " + d.getUTCMonth()+"-"+ d.getUTCDay()+"-"+ d.getUTCFullYear() + "<br></td>";
        info += "<td>" + "<br>" + "Track Duration: " + Math.round(myData.results[i].trackTimeMillis/60000)+ " minutes"
            + "<br>" + "</td>";


    info += "<td>" + "<br>" + "<button onload= 'start()' onclick=\"goBack()\">Go Back</button>"
        + "<br>" + "</td>";





        info += "<td>" + "<br>" + " Explicitness: " + myData.results[i].trackExplicitness
            + "<br>" + "</td>"+"</tr>";



    document.getElementById("info").innerHTML = info;
}

function failed(){
    document.getElementById("songs").innerHTML = "Error" ;
}


function goBack() {
    window.history.back();
}