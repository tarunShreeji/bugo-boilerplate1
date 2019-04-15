// jquery
import $ from 'jquery';                       // jQuery - https://jquery.com
import bootstrap from 'bootstrap';            // bootstrap - https://www.npmjs.com/package/bootstrap
import LazyLoad from "vanilla-lazyload";      // lazy loader - https://www.npmjs.com/package/vanilla-lazyload
import validator from 'validator';            // javascript form validator - https://www.npmjs.com/package/validator
import YouTubePlayer from 'youtube-player';   // YouTube player - https://www.npmjs.com/package/youtube-player
import WebFont from 'webfontloader';          // Web Font Loader - https://www.npmjs.com/package/webfontloader


// Init LazyLoader
var lazyLoadInstance = new LazyLoad({
  elements_selector: ".lazy"
  // ... more custom settings?
});

// Load fonts
WebFont.load({
  google: {
    families: ['Fira+Sans:400,400i,700,700i']
  }
});

// On Document Ready
$(document).ready(function () {

  // $('.search-container button').on('click', function () {
  //   console.log('clicked');
  //   $('.search-container .drawer').toggleClass('show').find('input').focus();
  // });

  // Add scrolled class to body for fixed headers
  // you can use the class to add backgrounds, hide, etc.
  $(window).on('scroll', function () {
    // we round here to reduce a little workload
    stop = Math.round($(window).scrollTop());
    if (stop > 0) {
      $('.site-header').addClass('scrolled');
    } else {
      $('.site-header').removeClass('scrolled');
    }
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

