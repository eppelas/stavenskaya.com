$(function () {

    var photos = createPhotos('istanbul/img/', 1, 13);
    $('.travelgallery').append(photos);
    $('img').unveil(200);

});
