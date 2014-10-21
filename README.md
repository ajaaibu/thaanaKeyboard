jQuery Thaana KeyHandling
============================

jQuery Plugin to manipulate thaana keyboard. Supports mobile platforms such as android, ios and all major desktop browsers. However please 
be informed that this plugin is highly in experimental state.

## Usage

  $('.classname').thaana();
  
  $('#elementId').thaana();
  
  $('elementname').thaana();
  
**To change default keyboard layout:**

**Default**

  $('.thaana').thaana({keyboard: 'phonetic'});
  
or

  $('.thaana').thaana({keyboard: 'typewriter'});
  
** JSFIDDLE **

http://jsfiddle.net/yojuhw57/

## Notice

Compatibility with mobile browsers, especially Android browsers are achieved by sacrificing keyboard event, as some browsers does not fire events as how it should. There might be issues while pasting,
line breaks and backspacing. Mostly in Chrome.

Working on alternatives for further improvement ;)
