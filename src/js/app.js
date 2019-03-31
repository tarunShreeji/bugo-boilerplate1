// jquery
import $ from 'jquery';
// bootstrap
import bootstrap from 'bootstrap';
// svg4everybody - allows SVG external content to older browsers and IE
import 'svg4everybody';
svg4everybody();

function isElementInViewport (el) {
    var rect = el[0].getBoundingClientRect();
    return (rect.top>-1 && rect.bottom <= $(window).height());
}
