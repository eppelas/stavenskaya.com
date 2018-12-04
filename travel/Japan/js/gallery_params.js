$(function () {

    var photos = createPhotos('japan/img/', 1, 245);
    $('.travelgallery').append(photos);
    $('img').unveil(200);

});
