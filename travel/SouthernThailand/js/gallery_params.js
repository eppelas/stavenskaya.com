$(function () {

    var photos = createPhotos('southernthailand/img/', 1, 12);
    $('.travelgallery').append(photos);
    $('img').unveil(200);

});
