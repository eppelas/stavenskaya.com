$(function () {

    var photos = createPhotos('northernthailand/img/', 1, 27);
    $('.travelgallery').append(photos);
    $('img').unveil(200);

});
