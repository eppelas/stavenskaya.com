$(function () {

    var photos = createPhotos('hochiminh/img/', 1, 11);
    $('.travelgallery').append(photos);
    $('img').unveil(200);

});
