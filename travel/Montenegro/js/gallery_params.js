$(function () {

    var photos = createPhotos('montenegro/img/', 1, 34);
    $('.travelgallery').append(photos);
    $('img').unveil(200);

});
