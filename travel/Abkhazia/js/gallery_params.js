$(function () {

    var photos = createPhotos('abkhazia/img/', 1, 17);
    $('.travelgallery').append(photos);
    $('img').unveil(200);

});
