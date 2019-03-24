
    $.ajax({
        url: 'https://itunes.apple.com/search?term=' + ,
        dataType: 'jsonp',
        success: myCallback(id="enterName")
    });

function myCallback(myData) {
    console.log(myData);
}
