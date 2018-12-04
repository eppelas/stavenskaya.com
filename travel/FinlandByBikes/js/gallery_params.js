$(function () {

    var photos = createPhotos('finlandbybikes/img/', 1, 45);
    $('.travelgallery').append(photos);
    $('img').unveil(200);

});
