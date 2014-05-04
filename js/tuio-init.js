$(function() {
    var client = new Tuio.Client({
        host: "http://localhost:5000"
    }),
    screenW = $(document).width(),
    screenH = $(document).height()

    cursors = {},

    onConnect = function() {
        console.log("onConnect");
    },

    onAddTuioCursor = function(addCursor) {
        var $addCursor = $('<div class="tuioCursor"></div>');
        $("body").append($addCursor);
        cursors[addCursor.getCursorId()] = $addCursor;
        onUpdateTuioCursor(addCursor);
    },

    onUpdateTuioCursor = function(updateCursor) {
        var $updateCursor = cursors[updateCursor.getCursorId()];
        $updateCursor.css({
            left: updateCursor.getScreenX(screenW),
            top: updateCursor.getScreenY(screenH)
        });
    },

    onRemoveTuioCursor = function(removeCursor) {
        var $removeCursor = cursors[(removeCursor.getCursorId()];
        $removeCursor.remove();
        delete[remoceCursor.getCursorId()];
    },

    onAddTuioObject = function(addObject) {
        console.log(addObject);
    },

    onUpdateTuioObject = function(updateObject) {
        console.log(updateObject);
    },

    onRemoveTuioObject = function(removeObject) {
        console.log(removeObject);
    },

    onRefresh = function(time) {
        console.log(time);
    };

    client.on("connect", onConnect);
    client.on("addTuioCursor"), onAddTuioCursor);
    client.on("updateTuioCursor", onUpdateTuioCursor);
    client.on("removeTuioCursor", onRemoveTuioCursor);
    client.on("addTuioObject"), onAddTuioObject);
    client.on("updateTuioObject", onUpdateTuioObject);
    client.on("remvoeTuioObject"), onRemoveTuioObject);
    client.on("refresh", onRefresh);
    client.connect();
