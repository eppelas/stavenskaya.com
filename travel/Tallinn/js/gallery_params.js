$(function () {

    var photos = createPhotos('tallinn/img/', 1, 8);
    $('.travelgallery').append(photos);
    $('img').unveil(200);

});
