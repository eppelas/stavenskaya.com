$(function () {

    var photos = createPhotos('india/img/', 1, 22);
    $('.travelgallery').append(photos);
    $('img').unveil(200);

});
