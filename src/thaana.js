import Keymap from './keymapping';

let defaultSettings = {
    keyboard: 'phonetic'
};

export default class ThaanaKeyboard {

    constructor(settings) {

        this.keymap = Keymap;

        if (settings) {
            this.settings = Object.assign(defaultSettings, settings);
        } else {
            this.settings = defaultSettings;
        };

        this.handleKey = this.handleKey.bind(this)
    }

    setHandler(element) {
        element.oninput = this.handleKey;
    }

    handleLegacyFields(evt) {
        var sel, range, target;

        target = evt.target;

        let subject = null;
        let text = null;

        if (target.value.length > 0) { // get the char to transform
            subject = target.value.substr(target.selectionStart - 1, target.selectionStart);
        }

        if (subject && subject !== null && subject !== '\ ') { // do the transformation if not a white-space and mapping exists for key
            if (this.keymap[this.settings.keyboard][subject.charCodeAt(0)]) {
                let position = target.selectionStart;
                text = this.keymap[this.settings.keyboard][subject.charCodeAt(0)];
                target.value = target.value.substr(0, target.selectionStart - 1) + text + target.value.substr(target.selectionStart);

                target.selectionStart = position;
                target.selectionEnd = position;
            }
        }
    }

    handleContentEditable(evt) {
        var sel, range, textNode;
        if (window.getSelection) {
            sel = window.getSelection();
            if (sel.getRangeAt && sel.rangeCount) {

                range = sel.getRangeAt(0);
                range.deleteContents();

                let subject = null;
                let text = null;

                if (range.startContainer.nodeValue !== null) { // get the character to transform
                    subject = range.startContainer.nodeValue.substr(range.startOffset - 1, range.startOffset);
                }

                if (subject && evt.data !== '\ ' && subject !== '\ ') { // remove last char from node if not a whitespace and mapping exists for key
                    let clone = range.cloneRange();
                    if (this.keymap[this.settings.keyboard][subject.charCodeAt(0)]) {
                        text = this.keymap[this.settings.keyboard][subject.charCodeAt(0)]
                        clone.setStart(range.startContainer, range.startOffset - 1);
                    } else {
                        clone.setStart(range.startContainer, range.startOffset);
                    }
                    clone.setEnd(range.startContainer, range.startOffset);


                    clone.deleteContents();
                } else if (!evt.data || evt.data === ' ' || subject === ' ') { // handle white-spaces
                    text = "\ ";
                }

                if (text) { // append the transformed text node and set selection range for caret positioning
                    textNode = document.createTextNode(text);
                    range.insertNode(textNode);

                    range.setStart(textNode, textNode.length);
                    range.setEnd(textNode, textNode.length);
                } else { // set selection range for caret positioning of white-spaces & backspaces entries
                    range.setStart(range.startContainer, range.startOffset);
                    range.setEnd(range.startContainer, range.startOffset);
                }

                // Move caret to the end of the newly inserted text node
                // range.setStart(textNode, textNode.length);
                // range.setEnd(textNode, textNode.length);
                sel.removeAllRanges();
                sel.addRange(range);
            }
        } else if (document.selection && document.selection.createRange) {
            range = document.selection.createRange();
            range.pasteHTML(text);
        }
    }

    handleKey(e) {

        if (e.target.tagName === 'TEXTAREA' || e.target.tagName === 'INPUT') {
            this.handleLegacyFields(e);
        } else {
            this.handleContentEditable(e);
        }
    }

    bindToClass(selector) {

        let elements = document.getElementsByClassName(selector);

        if (elements.length) {

            for (var element of elements) {
                this.setHandler(element);
            }
        }
    }
}

window.onload = function() {
    (new ThaanaKeyboard).bindToClass('thaana');
}