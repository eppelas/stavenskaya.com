$(function () {

    var photos = createPhotos('img/', 1, 22);
    $('.travelgallery').append(photos);
    $('img').unveil(200);

});
