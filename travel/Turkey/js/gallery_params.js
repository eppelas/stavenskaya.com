$(function () {

    var photos = createPhotos('turkey/img/', 1, 9);
    $('.travelgallery').append(photos);
    $('img').unveil(200);

});
