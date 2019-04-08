// jquery
import $ from 'jquery';
// bootstrap
import bootstrap from 'bootstrap';
import LazyLoad from "vanilla-lazyload";

// svg4everybody - allows SVG external content to older browsers and IE
// import 'svg4everybody';
// svg4everybody();

import YouTubePlayer from 'youtube-player';

var lazyLoadInstance = new LazyLoad({
  elements_selector: ".lazy"
  // ... more custom settings?
});

var WebFont = require('webfontloader');

function isElementInViewport(el) {
  var rect = el[0].getBoundingClientRect();
  return (rect.top > -1 && rect.bottom <= $(window).height());
}


WebFont.load({
  google: {
    families: ['Barlow+Semi+Condensed:400,500', 'Barlow:400,500']
  }
});

$(document).ready(function () {

  $('.search-container button').on('click', function () {
    console.log('clicked');
    $('.search-container .drawer').toggleClass('show').find('input').focus();
  });

  $('.show-videos').on('click', function (e) {
    $('.featured-image figcaption').toggleClass('show');
  });

  const $video_player = $('#video-player');
  console.log($video_player);
  if ($video_player.length > 0) {
    const player = YouTubePlayer('video-player');
    console.log('document ready');

    $('#VideoModal').on('show.bs.modal', function (e) {
      const playing_id = $(this).attr('data-playing');
      const video_id = $(e.relatedTarget).attr('data-video-id');
      console.log(playing_id, video_id);
      if (typeof (playing_id) == 'undefined' || playing_id !== video_id) {
        $(this).attr('data-playing', video_id);
        player.loadVideoById(video_id);
        player.playVideo();
      } else {
        player.playVideo();
      }
    });
    $('#VideoModal').on('hide.bs.modal', function (e) {
      player.pauseVideo();
    });
  }
});

