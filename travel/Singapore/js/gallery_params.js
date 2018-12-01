$(function () {

    var photos = createPhotos('img/', 1, 41);
    $('.travelgallery').append(photos);
    $('img').unveil(200);

});
