$(function () {

    var photos = createPhotos('img/', 1, 15);
    $('.travelgallery').append(photos);
    $('img').unveil(200);

});
