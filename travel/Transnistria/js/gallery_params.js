$(function () {

    var photos = createPhotos('transnistria/img/', 1, 19);
    $('.travelgallery').append(photos);
    $('img').unveil(200);

});
