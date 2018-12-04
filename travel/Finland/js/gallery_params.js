$(function () {

    var photos = createPhotos('finland/img/', 1, 11);
    $('.travelgallery').append(photos);
    $('img').unveil(200);

});
