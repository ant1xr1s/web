function application() {
}


application.prototype.displayCurrentUser = function (selector) {
    /*BX24.callMethod(
        'user.current',
        {},
        function (result) {
        $(selector).html('Hello' + result.data().NAME + ' ' + result.data().LAST_NAME + '!');
    }
    );*/
    BX24.callMethod('user.current', {}, function(res){
        alert('Привет, ' + res.data().NAME + ' ' + res.data().LAST_NAME + '!!');
    });
}
app = new application();
