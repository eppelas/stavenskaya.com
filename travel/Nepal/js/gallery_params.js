$(function () {

    var photos = createPhotos('nepal/img/', 1, 60);
    $('.travelgallery').append(photos);
    $('img').unveil(200);

});
