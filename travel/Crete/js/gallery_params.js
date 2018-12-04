$(function () {

    var photos = createPhotos('crete/img/', 1, 15);
    $('.travelgallery').append(photos);
    $('img').unveil(200);

});
