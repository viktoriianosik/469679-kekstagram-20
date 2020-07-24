'use strict';

(function () {
  var renderPhoto = function (photo) {
    var pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
    var picture = pictureTemplate.cloneNode(true);

    picture.querySelector('.picture__img').src = photo.url;
    picture.querySelector('.picture__likes').textContent = photo.likes;
    picture.querySelector('.picture__comments').textContent = photo.comments.length;

    return picture;
  };

  var renderPhotos = function () {
    var fragment = document.createDocumentFragment();
    var pictures = document.querySelector('.pictures');
    for (var i = 0; i < window.data.length; i++) {
      fragment.appendChild(renderPhoto(window.data[i]));
    }
    pictures.appendChild(fragment);
  };

  renderPhotos();
})();
