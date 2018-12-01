$(function () {

    var photos = createPhotos('img/', 1, 60);
    $('.travelgallery').append(photos);
    $('img').unveil(200);

});
