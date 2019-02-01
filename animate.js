function insertSpan(){
    let pElmt = $('<p></p>').appendTo('#loader');

    let words = 'loading...';
    let arry = words.split('');

    for(let i=0; i < arry.length; i++){
        let spanLetter = $(`<span>${arry[i]}</span>`)
        .css('animationDelay',`0.${i}s`)
        .appendTo('p');s
    }
}

insertSpan();