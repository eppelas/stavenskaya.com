$(function () {

    var photos = createPhotos('maejo/img/', 1, 14);
    $('.travelgallery').append(photos);
    $('img').unveil(200);

});
