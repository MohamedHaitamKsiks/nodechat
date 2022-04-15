
exports.send =  function (res, message, listMessages) {
    listMessages.push(message);
    res.setHeader('Content-Type', 'text/plain');
    res.end();
}