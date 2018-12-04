$(function () {

    var photos = createPhotos('kaliningrad/img/', 1, 27);
    $('.travelgallery').append(photos);
    $('img').unveil(200);

});
