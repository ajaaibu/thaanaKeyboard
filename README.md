Thaana Keyboard
============================

Thaana Keyboard is a javascript keyboard handler that translate input entries into thaana characters. Supports all major desktop and mobile browsers. (I haven't really tested on IE yet, need help!)

 Previously this worked as a jQuery plugin known as jQuery Thaana KeyHandling. To allow suppport for environments which don't require jQuery and in an effort to keep this at zero dependency, I have decided to rewrite this as a pure javascript module.

## Usage
```js
  (new ThaanaKeyboard()).bindToClass('thaana');
```
**To change default keyboard layout:**

default
```js
  (new ThaanaKeyboard({keyboard: 'phonetic'])).bindToClass('thaana');
```
or
```js
  (new ThaanaKeyboard({keyboard: 'typewriter'])).bindToClass('thaana');
```

**Update: 2018/03/03**
  - Release of v.1.4.2 - If you are looking for old jQuery plugin its archived and tagged [here](https://github.com/ajaaibu/thaanaKeyboard/releases/tag/v1.4.2) (NO FURTHER UPDATES)

**Update: 2015/10/20**

  * Fixed the bug while editing in between lines / characters.
  
**Update: 2015/05/12**

  * Fixes the "undefined" ammendement to the input element while spacing.
  * Fixed the bug that kept transforming the character if you pasted just one alphabet.
  * Demonstration page is moved to [here](http://ajaaibu.github.io/thaanaKeyboard)

### Issues?

The new version is still in development and I have noticed few bugs that I need to attend to.
  - In contenteditable fields, on firefox sometimes when pressed backspace, caret position is not maintained.
  - If a string of english alphabets is pasted, last character is transformed to thaana character.


## Notice

Shoot any bugs to [@ajaaibu](https://twitter.com/ajaaibu) or open up an Issue.
