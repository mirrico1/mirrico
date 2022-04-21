var phoneMask = IMask(
    document.getElementById('phone-mask'), {
      mask: '+{7}(000) 000-00-00'
    });

// var zipMask = new IMask(document.getElementById('mailSecond'), {
//     mask: 'N{@}D{.}Y[{.}Z]',
//     lazy: true,
//     definitions: {
//         'N': /[a-z0-9_\.-]+/,
//         'D':/[a-z0-9-]+/,
//         'Y':/[a-z]{2,4}/,
//         'Z':/[a-z]{2,4}/
//     }
// });

$(function() {
    let $input = $('#mailSecond');
    let cursor = $input[0].selectionStart;
    let prev = $input.val();
    
    $input.inputmask({
        mask: "*{1,50}[.*{1,50}][.*{1,50}]@*{1,50}.*{1,20}[.*{1,20}][.*{1,20}]",
        greedy: false,
        clearIncomplete: true,
        showMaskOnHover: false,
        definitions: {
        '*': {
            validator: "[^_@.]"
        }
        }
    }).on('keyup paste', function() {
        if (this.value && /[^_a-zA-Z0-9@\-.]/i.test(this.value)) {
        this.value = prev;
        this.setSelectionRange(cursor, cursor);
        $input.trigger('input');
        } else {
        cursor = this.selectionStart;
        prev = this.value;
        }
    });
});