/*
 * jQuery Thaana Keyboard Handler v1.3
 * http://twitter.com/ajaaibu
 * requires jquery v1.11.1+
 *
 * Copyright 2015, Ahmed Ali (ajaaibu)
 * Last Updated: 2015/05/12 22:48 PM
 *
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Usage Example:
 *   $('.thaana').thaana();
 *   or
 *   $('.thaana').thaana({keyboard: 'phonetic'});
 *   or
 *   $('.thaana').thaana({keyboard: 'typewriter'});
 */
(function ( $ ){
  
  $.fn.thaana = function ( options ){
    // default parameters for plugin
    var settings = {
      keyboard: 'phonetic' // set phonetic as default keyboard
    };
    
    return this.each(function(){
      // if parameters are parsed, extend the settings
      if( options ){
        $.extend( settings, options );
      }

      // keycode mapping
      var keyboards = { 
        'phonetic' : { 33 : '!', 34 : '"', 35: '#', 36 : '$', 37 : '%', 38 : '&', 39 : '\'', 40 : ')', 41 : '(', 42 : '*', 43 : '+', 44 : '،', 45 : '-', 46 : '.', 47 : '/', 58: ':', 59 : '؛', 60 : '>', 61 : '=', 62 : '<', 63 : '؟', 64 : '@', 65 : 'ާ', 66 : 'ޞ', 67 : 'ޝ', 68 : 'ޑ', 69 : 'ޭ', 70 : 'ﷲ', 71 : 'ޣ', 72 : 'ޙ', 73 : 'ީ' ,74 : 'ޛ', 75 : 'ޚ' ,76 : 'ޅ', 77 : 'ޟ', 78 : 'ޏ', 79 : 'ޯ', 80 : '÷', 81 : 'ޤ', 82 : 'ޜ', 83 : 'ށ', 84 : 'ޓ', 85 : 'ޫ', 86 : 'ޥ', 87 : 'ޢ', 88 : 'ޘ', 89 : 'ޠ', 90 : 'ޡ', 91 : ']', 92 : '\\', 93 : '[', 94 : '^', 95: '_', 96 : '`', 97 : 'ަ', 98 : 'ބ', 99 : 'ޗ', 100 : 'ދ', 101 : 'ެ', 102 : 'ފ', 103 : 'ގ', 104 : 'ހ', 105 : 'ި', 106 : 'ޖ', 107 : 'ކ', 108 : 'ލ', 109 : 'މ', 110 : 'ނ', 111 : 'ޮ', 112 : 'ޕ', 113 : 'ް', 114 : 'ރ', 115 : 'ސ', 116 : 'ތ', 117 : 'ު', 118 : 'ވ', 119 : 'އ', 120 : '×', 121 : 'ޔ', 122 : 'ޒ', 123: '}', 124 : '|', 125 : '{', 126 : '~'},
        'typewriter' : { 33 : '!', 34 : '؛', 35: '#', 36 : '$', 37 : '%', 38 : '&', 39 : 'ﷲ', 40 : ')', 41 : '(', 42 : '*', 43 : '+', 44 : 'ށ', 45 : '-', 46 : 'ޓ', 47 : 'ޯ', 58: 'ޡ', 59 : 'ފ', 60 : '\\', 61 : '=', 62 : 'ޞ', 63 : '؟', 64 : '@', 65 : '<', 66 : 'ޟ', 67 : 'ޏ', 68 : '.', 69 : '“', 70 : '،', 71 : '"', 72 : 'ޥ', 73 : 'ޣ' ,74 : 'ޢ', 75 : 'ޘ' ,76 : 'ޚ', 77 : 'ޝ', 78 : 'ޛ', 79 : 'ޠ', 80 : 'ޙ', 81 : '×', 82 : '/', 83 : '>', 84 : ':', 85 : 'ޜ', 86 : 'ޗ', 87 : '’', 88 : 'ޕ', 89 : 'ޤ', 90 : 'ޖ', 91 : 'ލ', 92 : ']', 93 : '[', 94 : '^', 95: '_', 96 : '`', 97 : 'ި', 98 : 'ޅ', 99 : 'ސ', 100 : 'ް', 101 : 'ާ', 102 : 'ަ', 103 : 'ެ', 104 : 'ވ', 105 : 'މ', 106 : 'އ', 107 : 'ނ', 108 : 'ކ', 109 : 'ބ', 110 : 'ދ', 111 : 'ތ', 112 : 'ހ', 113 : 'ޫ', 114 : 'ީ', 115 : 'ު', 116 : 'ޭ', 117 : 'ރ', 118 : 'ޔ', 119 : 'ޮ', 120 : 'ޑ', 121 : 'ގ', 122 : 'ޒ', 123: '÷', 124 : '}', 125 : '{', 126 : '~'}
      };

      var handleKeyboardInput = function(){
        
        var str = $(this).val(),
        key = str.substring(str.length-1),
        k = key.charCodeAt(0),
        lastLength = $(this).attr('data-length') ? $(this).attr('data-length') : 0,
        diff = str.length - lastLength;
          
        if((typeof(keyboards[settings.keyboard][k]) != "undefined") && (diff == 1 ||  str.length < lastLength)){
            current = $(this).val().substr(0,str.length-1);
            current += keyboards[settings.keyboard][k];
            $(this).val(current);
        }
      };

      $(this).on('keydown',function(e){
        if(e.ctrlKey || e.metaKey || e.which == 8 || e.which == 46){
          $(this).off('input');
        }
        else{
          if(typeof($._data(this,'events')['input']) == "undefined"){
            $(this).on('input',handleKeyboardInput);
          }
        }
        $(this).attr('data-length',$(this).val().length);
      }).on('keyup', function(e){
        $(this).attr('data-length',$(this).val().length);
      });

    });
  };
})( jQuery );
