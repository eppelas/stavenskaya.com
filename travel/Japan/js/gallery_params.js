$(function () {

    var photos = createPhotos('img/', 1, 245);
    $('.travelgallery').append(photos);
    $('img').unveil(200);

});
