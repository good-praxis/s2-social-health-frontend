const WebSocket = require('ws')

const wss = new WebSocket.Server({ port: 8989 })

const users = []
 
const broadcast = (data, ws) => {
    wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN && client !== ws ) {
            client.send(JSON.stringify(data))
        }
    })
}