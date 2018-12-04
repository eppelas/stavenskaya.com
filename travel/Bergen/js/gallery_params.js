$(function () {

    var photos = createPhotos('bergen/img/', 1, 20);
    $('.travelgallery').append(photos);
    $('img').unveil(200);

});
