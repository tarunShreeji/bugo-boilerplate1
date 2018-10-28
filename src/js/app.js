// JS Goes here - ES6 supported
import '@babel/polyfill';

// jquery is required for bootstrap
import $ from 'jquery';

// bootstrap
import bootstrap from 'bootstrap';

// import CMS from 'netlify-cms'
//
// // Now the registry is available via the CMS object.
// CMS.registerPreviewTemplate('my-template', MyTemplate)

//import highlight.js
import hljs from 'highlight.js/lib/highlight';

//import htmlbars language support
import htmlbars from 'highlight.js/lib/languages/htmlbars';
hljs.registerLanguage('htmlbars', htmlbars);

//import go language support
import go from 'highlight.js/lib/languages/go';
hljs.registerLanguage('go', go);

//import markdown language support
import markdown from 'highlight.js/lib/languages/markdown';
hljs.registerLanguage('markdown', markdown);



//import javsacript language support
import javascript from 'highlight.js/lib/languages/javascript';
hljs.registerLanguage('javascript', javascript);

//import css language support
import css from 'highlight.js/lib/languages/css';
hljs.registerLanguage('css', css);

//import bash language support
import bash from 'highlight.js/lib/languages/bash';
hljs.registerLanguage('bash', bash);

hljs.initHighlightingOnLoad();

var bugoStylesheets = ['/assets/css/main.css'];

Promise.all(bugoStylesheets.map(url => fetch(url))).
    then(arr => Promise.all(arr.map(url => url.text()))).
    then(arr => {
        var style = document.createElement('style');
        style.textContent = arr.reduce(
            (prev, fileContents) => prev + fileContents, ''
        );
        document.head.appendChild(style);
    }).then(() => {
        // Do whatever now
    });

//ho
