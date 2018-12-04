$(function () {

    var photos = createPhotos('moscow/img/', 1, 14);
    $('.travelgallery').append(photos);
    $('img').unveil(200);

});
