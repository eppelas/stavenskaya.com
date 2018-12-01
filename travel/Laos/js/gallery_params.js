$(function () {

    var photos = createPhotos('img/', 1, 17);
    $('.travelgallery').append(photos);
    $('img').unveil(200);

});
