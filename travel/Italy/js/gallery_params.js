$(function () {

    var photos = createPhotos('italy/img/', 1, 13);
    $('.travelgallery').append(photos);
    $('img').unveil(200);

});
