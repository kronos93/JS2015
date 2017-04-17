(function(w, d) {
    let myStorage = localStorage;
    myStorage.curso = 'Javascript desde cero';
    console.log(myStorage);
    let saveComment = function() {
        setInterval(function() {
            console.log('Autoguardado');
            console.log(comment.value);
            myStorage.comment = comment.value;
            console.log(myStorage.comment);
        }, 1000);
    };
    let comment = d.getElementById('comment');
    comment.addEventListener('focus', saveComment);
    comment.value = myStorage.comment;
})(window, document);