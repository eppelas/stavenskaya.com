$(function () {

    var photos = createPhotos('olympics/img/', 1, 198);
    $('.travelgallery').append(photos);
    $('img').unveil(200);

});
