
function start(){

    var enterName = document.getElementById('enterName').value;

    $.ajax({
        url: 'https://itunes.apple.com/search?term=' + enterName,
        type: 'GET',
        crossDomain: true,
        dataType: 'jsonp',
        success: myCallback
        //error: function() { alert('Failed!'); }
    });

}

function myCallback(myData) {
    console.log(myData);
    for(var i = 0; i < myData.results.length; i++){
        document.getElementById("results").innerHTML += results[i];
    }

}
