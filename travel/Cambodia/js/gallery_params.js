$(function () {

    var photos = createPhotos('cambodia/img/', 1, 34);
    $('.travelgallery').append(photos);
    $('img').unveil(200);

});
