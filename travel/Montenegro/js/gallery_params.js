$(function () {

    var photos = createPhotos('img/', 1, 34);
    $('.travelgallery').append(photos);
    $('img').unveil(200);

});
