$(function () {

    var photos = createPhotos('greece/img/', 1, 68);
    $('.travelgallery').append(photos);
    $('img').unveil(200);

});
