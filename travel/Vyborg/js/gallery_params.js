$(function () {

    var photos = createPhotos('vyborg/img/', 1, 14);
    $('.travelgallery').append(photos);
    $('img').unveil(200);

});
