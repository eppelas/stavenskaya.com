$(function () {

    var photos = createPhotos('img/', 1, 19);
    $('.travelgallery').append(photos);
    $('img').unveil(200);

});
