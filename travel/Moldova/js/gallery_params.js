$(function () {

    var photos = createPhotos('img/', 1, 33);
    $('.travelgallery').append(photos);
    $('img').unveil(200);

});
