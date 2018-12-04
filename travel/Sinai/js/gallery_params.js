$(function () {

    var photos = createPhotos('sinai/img/', 1, 33);
    $('.travelgallery').append(photos);
    $('img').unveil(200);

});
