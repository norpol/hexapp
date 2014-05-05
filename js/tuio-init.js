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
        var $removeCursor = cursors[removeCursor.getCursorId()];
        $removeCursor.remove();

        delete[removeCursor.getCursorId()];
    },

    onAddTuioObject = function(addObject) {
        var $addObject = $('<div id="symbol' + addObject.getSymbolId()+ '" class="tuioObject"></div>');
        $("body").append($addObject);
        cursors[addObject.getSymbolId()] = $addObject;
        onUpdateTuioObject(addObject);;
    },

    onUpdateTuioObject = function(updateObject) {
        var $updateObject = cursors[updateObject.getSymbolId()];
        console.log(updateObject.getAngle();
        $updateObject.css({
            left: updateObject.getScreenX(screenW),
            top: updateObject.getScreenY(screenH)
        });

    },

    onRemoveTuioObject = function(removeObject) {
        var $removeObject = cursors[removeObject.getSymbolId()];
        $removeObject.remove();

        delete[removeObject.getSymbolId()];
     
    },

    onRefresh = function(time) {
        console.log(time);
    };

    client.on("connect", onConnect);
    client.on("addTuioCursor", onAddTuioCursor);
    client.on("updateTuioCursor", onUpdateTuioCursor);
    client.on("removeTuioCursor", onRemoveTuioCursor);
    client.on("addTuioObject", onAddTuioObject);
    client.on("updateTuioObject", onUpdateTuioObject);
    client.on("removeTuioObject", onRemoveTuioObject);
    client.on("refresh", onRefresh);
    client.connect();
});
