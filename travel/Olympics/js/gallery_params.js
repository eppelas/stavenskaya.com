$(function () {

    var photos = createPhotos('img/', 1, 198);
    $('.travelgallery').append(photos);
    $('img').unveil(200);

});
