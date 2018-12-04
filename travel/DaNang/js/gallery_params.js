$(function () {

    var photos = createPhotos('danang/img/', 1, 28);
    $('.travelgallery').append(photos);
    $('img').unveil(200);

});
