$(function () {

    var photos = createPhotos('img/', 1, 18);
    $('.travelgallery').append(photos);
    $('img').unveil(200);

});
