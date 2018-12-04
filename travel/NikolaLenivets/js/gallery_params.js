$(function () {

    var photos = createPhotos('nikolalenivets/img/', 1, 18);
    $('.travelgallery').append(photos);
    $('img').unveil(200);

});
