$(function () {

    var photos = createPhotos('img/', 1, 13);
    $('.travelgallery').append(photos);
    $('img').unveil(200);

});
