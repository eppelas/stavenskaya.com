$(function () {

    var photos = createPhotos('img/', 1, 14);
    $('.travelgallery').append(photos);
    $('img').unveil(200);

});
