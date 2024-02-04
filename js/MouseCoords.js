// ==UserScript==
// @name         MouseCoords
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *://*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=stackoverflow.com
// @grant        none
// @require      https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';
    var $toolTip = $('<div/>');
    $toolTip.addClass('customTooltip-rsd')
        .css({
            position: 'absolute',
            display: 'inline-block',
            'font-size': '22px',
            backgroundColor: '#000',
            color: '#ffffff',
            'z-index': 9999999999,
            padding: '10px',
            'word-spacing': '10px',
            'border-radius': '50%',
            width: 100,
            height: 100,
            'line-height': '100px',
            'text-align': 'center',
            'font-weight': 'bold'
        })
    ;
    $(document.body).append($toolTip);
    $(window).on('mousemove', function(e) {
        var posX = e.pageX;
        var posY = e.pageY;
        $toolTip.text(posX + ',' + posY).css({
            top: posY + 'px',
            left: posX + 'px'
        });
    });
}());
