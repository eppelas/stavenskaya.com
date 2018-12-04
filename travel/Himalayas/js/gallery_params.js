$(function () {

    var photos = createPhotos('himalayas/img/', 1, 37);
    $('.travelgallery').append(photos);
    $('img').unveil(200);

});
