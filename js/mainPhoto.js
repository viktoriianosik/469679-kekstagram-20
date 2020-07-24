'use strict';

(function () {
  var bigPicture = document.querySelector('.big-picture');
  bigPicture.classList.remove('hidden');

  var renderComment = function (comment) {
    var socialComment = document.querySelector('.social__comment');
    var newSocialComment = socialComment.cloneNode(true);


    newSocialComment.querySelector('.social__picture').src = comment.avatar;
    newSocialComment.querySelector('.social__picture').alt = comment.name;
    newSocialComment.querySelector('.social__text').textContent = comment.message;

    return newSocialComment;
  };

  var renderComments = function (data) {
    var socialComments = document.querySelector('.social__comments');
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < data.length; i++) {
      fragment.appendChild(renderComment(data[i]));
    }
    socialComments.innerHTML = '';
    socialComments.appendChild(fragment);
  };

  var renderBigPicture = function (data) {
    bigPicture.querySelector('.big-picture__img img').src = data.url;
    bigPicture.querySelector('.likes-count').textContent = data.likes;
    bigPicture.querySelector('.comments-count').textContent = data.comments.length;
    bigPicture.querySelector('.social__caption').textContent = data.description;
    renderComments(data.comments);
  };

  renderBigPicture(window.data[0]);

  document.querySelector('.social__comment-count').classList.add('hidden');
  document.querySelector('.comments-loader').classList.add('hidden');
  document.querySelector('body').classList.add('modal-open');
})();
