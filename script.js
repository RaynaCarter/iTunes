
function start(){

    var enterName = document.getElementById('enterName').value;

    if(enterName==""){
        document.getElementById("songs").innerHTML = " In order for this to work you kind of have to enter a name first :/ " ;
    }else{
        $.ajax({

            url: 'https://itunes.apple.com/search?term=' + enterName,
            type: 'GET',
            crossDomain: true,
            dataType: 'jsonp',
            success: myCallback,
            error: failed,
        });

    }



}

function myCallback(myData) {
    var numOfRe = document.getElementById('numberOfResults').value;
    console.log(myData);
    var tableInfo = "";

   // if(resultCount.length==0){
     //   document.getElementById("songs").innerHTML = " No results found" ;
   // }else{
        for(var i = 0; i < numOfRe; i++){
            if(myData.resultCount==0){
                document.getElementById("songs").innerHTML = " No results found" ;
            }
            var rank = i+1;
            tableInfo += "<tr>"+"<td>"+"<br>"+ rank + "<br></td>";
            tableInfo  += "<td>"+"<br>" + "<img src = " + myData.results[i].artworkUrl100
                +">"+"<br>" + "</td>";
            tableInfo += "<td>\n" +
                "<a href=\"detailpage.html?song=" + i+ "&artist="+ myData.results[i].artistName+ "\"><button id='infoButton'>info</button></a></td>";
            tableInfo += "<td><br>Artist Name: " + myData.results[i].artistName+ "<br></td>";
            tableInfo  += "<td>"+"<br>" + "Track Name: "+ myData.results[i].trackName+ "<br>" + "</td>";
            tableInfo  += "<td>"+"<br>" + " Album: "+ myData.results[i].collectionName+ "<br>" + "</td>";
            tableInfo  += "<td><audio controls='true' src=" + myData.results[i].previewUrl + " id='audio' type='audio/m4a'></audio>"+"</td></tr>";
        }


        document.getElementById("songs").innerHTML = tableInfo;

    //}


}

function failed(){
        document.getElementById("songs").innerHTML = "Error" ;
}