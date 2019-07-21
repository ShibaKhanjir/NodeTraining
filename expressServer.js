"use strict";
exports.__esModule = true;
var express = require("express");
var exportAPI = /** @class */ (function () {
    function exportAPI() {
        this.app = express();
        this.app.listen(3000, 'localhost', function () {
            console.log('Server started');
        });
    }
    return exportAPI;
}());
var myApp = new exportAPI();
myApp.app.get('/getAllToDo', function (req, res) {
    console.log(req.url);
    console.log(req.query);
    console.log(req.param);
    console.log(req.method);
    res.send("Hello World");
});
myApp.app.get('/getTodoById/:todoId/user/:userId', function (req, res) {
    console.log(req.url);
    console.log(req.query);
    console.log(req.param);
    console.log(req.method);
    //res.send("Hello World");
    res.json({
        todoId: req.params.todoId,
        userId: req.params.userId,
        appMsg: 'Hello World'
    });
});
