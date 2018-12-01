$(function () {

    var photos = createPhotos('img/', 1, 25);
    $('.travelgallery').append(photos);
    $('img').unveil(200);

});
