$(function () {

    var photos = createPhotos('myanmar/img/', 1, 113);
    $('.travelgallery').append(photos);
    $('img').unveil(200);

});
