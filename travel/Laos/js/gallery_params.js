$(function () {

    var photos = createPhotos('laos/img/', 1, 17);
    $('.travelgallery').append(photos);
    $('img').unveil(200);

});
