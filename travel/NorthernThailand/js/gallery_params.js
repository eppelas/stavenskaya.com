$(function () {

    var photos = createPhotos('img/', 1, 27);
    $('.travelgallery').append(photos);
    $('img').unveil(200);

});
