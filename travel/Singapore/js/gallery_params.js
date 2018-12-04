$(function () {

    var photos = createPhotos('singapore/img/', 1, 41);
    $('.travelgallery').append(photos);
    $('img').unveil(200);

});
