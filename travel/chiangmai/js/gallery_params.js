$(function () {

    var photos = createPhotos('chiangmai/img/', 1, 32);
    $('.travelgallery').append(photos);
    $('img').unveil(200);

});
