$(function () {

    var photos = createPhotos('img/', 1, 113);
    $('.travelgallery').append(photos);
    $('img').unveil(200);

});
