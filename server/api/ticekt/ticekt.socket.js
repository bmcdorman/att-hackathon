/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Ticekt = require('./ticekt.model');

exports.register = function(socket) {
  Ticekt.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Ticekt.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('ticekt:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('ticekt:remove', doc);
}