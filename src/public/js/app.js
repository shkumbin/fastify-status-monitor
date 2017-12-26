'use strict'

Chart.defaults.global.defaultFontSize = 8
Chart.defaults.global.animation.duration = 500
Chart.defaults.global.legend.display = false
Chart.defaults.global.elements.line.backgroundColor = 'rgba(0,0,0,0)'
Chart.defaults.global.elements.line.borderColor = 'rgba(0,0,0,0.9)'
Chart.defaults.global.elements.line.borderWidth = 2

var ws = new WebSocket('ws://' + location.hostname + ':' + (port || location.port))

ws.onopen = function () {
  console.log('websocket is connected ...')
  ws.send('connected')
}
ws.onmessage = function (ev) {
  console.log(ev.data)
}
