function min (a, b){
    if (a < b)
        return a;
    else
        return b;
}

exports.lasMessage = function (res, listMessages) {
    let lst = []
    for (let i = 0; i < min(listMessages.length, 10); i+=1){
        lst.push(listMessages.at(-i - 1))
    }
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(lst));
}