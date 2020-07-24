'use strict';

(function () {
  var PHOTOS_AMOUNT = 25;
  var MESSAGES = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
  ];
  var NAMES = ['Дима', 'Вася', 'ХХХ', 'Артем', 'Виктория', 'Анна', 'Оля', 'Марина', 'Катя', 'Антон', 'Виктор', 'Айс', 'Коля', 'Тимур', 'Таня'];

  var randomInteger = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  var randomArrayElement = function (array) {
    return array[Math.floor(Math.random() * array.length)];
  };

  var generateComments = function () {
    var comments = [];
    var commentsAmount = randomInteger(1, 6);
    for (var i = 0; i < commentsAmount; i++) {
      comments.push({
        avatar: 'img/avatar-' + randomInteger(1, 6) + '.svg',
        message: randomArrayElement(MESSAGES),
        name: randomArrayElement(NAMES),
      });
    }
    return comments;
  };

  var generatePhotos = function () {
    var photos = [];
    for (var i = 0; i < PHOTOS_AMOUNT; i++) {
      photos.push({
        url: 'photos/' + (i + 1) + '.jpg',
        description: '...!!!...',
        likes: randomInteger(15, 200),
        comments: generateComments(),
      });
    }
    return photos;
  };

  window.data = generatePhotos();
})();
