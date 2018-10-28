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
        $(selector).html('Привет, ' + res.data().NAME + ' ' + res.data().LAST_NAME + '!!');
    });
};


application.prototype.taskItemAdd = function(){
    var dt = new Date();
    var i = 0;
    while (i<70){
        BX24.callMethod(
            'task.item.add',
            [{
                TITLE: 'Автоматическое создание задач' + ' ' + i,
                RESPONSIBLE_ID: 11,
                DESCRIPTION: 'Ебашь эту хуйню в' + ' ' + i + ' ' + 'раз!!!!!',
                DEADLINE: '2019-05-13T16:06:06+03:00'
            }],
            function (result) {
                console.info(result.data());
                console.log(result);
            }
        );
    i++
        setTimeout(1000);
    }
};
app = new application();
