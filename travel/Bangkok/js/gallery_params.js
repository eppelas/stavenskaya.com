$(function () {

    var photos = createPhotos('img/', 1, 21);
    $('.travelgallery').append(photos);
    $('img').unveil(200);

});
