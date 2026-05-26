const evento = require('events')

const miEvento = new evento.EventEmitter()

miEvento.on('mi_evento', () => {
  console.log('¡El evento ha sido emitido!');
});

miEvento.emit('mi_evento');