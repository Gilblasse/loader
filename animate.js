function insertSpan(){
    let pElmt = $('<p></p>').appendTo('#loader');

    let words = 'loading...';
    let wordsArry = words.split('');

    for(let i=0; i < wordsArry.length; i++){
        let spanLetter = $(`<span>${wordsArry[i]}</span>`)
        .css('animationDelay',`0.${i}s`)
        .appendTo('p');s
    }
}

insertSpan();
