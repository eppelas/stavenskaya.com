$(function () {

    var photos = createPhotos('bangkok/img/', 1, 21);
    $('.travelgallery').append(photos);
    $('img').unveil(200);

});
