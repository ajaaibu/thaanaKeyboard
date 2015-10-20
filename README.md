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
  
**Update: 2015/05/12**

  * Fixes the "undefined" ammendement to the input element while spacing.
  * Fixed the bug that kept transforming the character if you pasted just one alphabet.
  * Demonstration page is moved to [here](http://ajaaibu.github.io/thaanaKeyboard)

**More Issues?**

Yeah there is a known bug that occurs if you pasted something like url or an email address and attempt on deleting it on chrome on mobile devices. But I'll keep it for a later update ;)

## Notice

Shoot any bugs to [@ajaaibu](https://twitter.com/ajaaibu), i'll add it up to the next update (no guarantee when)
