$(function () {

    var photos = createPhotos('waterfalls/img/', 1, 25);
    $('.travelgallery').append(photos);
    $('img').unveil(200);

});
