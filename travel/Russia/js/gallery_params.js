$(function () {

    var photos = createPhotos('russia/img/', 1, 27);
    $('.travelgallery').append(photos);
    $('img').unveil(200);

});
