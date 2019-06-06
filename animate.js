function insertSpan(){
    let pElmt = $('<p></p>').appendTo('#loader');

    let word = 'loading...';
    let letterArry = word.split('');

    for(let i=0; i < letterArry.length; i++){
        let spanLetter = $(`<span>${letterArry[i]}</span>`)
        .css('animationDelay',`0.${i}s`)
        .appendTo('p');
    }
}();
