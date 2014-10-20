/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Qoute = require('./qoute.model');

exports.register = function(socket) {
  Qoute.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Qoute.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('qoute:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('qoute:remove', doc);
}