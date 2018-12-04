$(function () {

    var photos = createPhotos('ireland/img/', 1, 39);
    $('.travelgallery').append(photos);
    $('img').unveil(200);

});
