function websocketInit (server) {
  const WebSocketServer = require('uws').Server

  const wss = new WebSocketServer({
    server
  })

  wss.on('connection', function (ws) {
    ws.send('hello world')
  })

  return wss
}

module.exports = websocketInit
