var topology = require("fully-connected-topology")
var jsonStream = require("duplex-json-stream")
var streamSet = require("stream-set")

var address = process.argv[2]
var peers = process.argv.slice(3)
var swarm = topology(address,peers);
var streams = streamSet()
var received = {}

const {rpc}  = require("./network")

class PubNub {
    constructor() {
    
    }
    broadcastMessage(message) {
      peerBroadcastMessage(JSON.stringify(message))
    }
  }

  const pubsub = new PubNub();
  rpc({pubsub});


swarm.on('connection', function (socket, id) {
    console.log('info> direct connection to', id)

 
    socket = jsonStream(socket)
    socket.on('data', function (data) {
  
        const parsedMessage = JSON.parse(JSON.stringfy(data.message))

        // parsedMessage.chain && mlcoin.replaceChain(parsedMessage, mlcoin)
        console.log("parsed Message" + parsedMessage)

      if (data.seq <= received[data.from]) return // already received this one
      received[data.from] = data.seq
      streams.forEach(function (socket) {
        socket.write(data)
      })
      
    })
  
    streams.add(socket)
  })
  
  var seq = 0
  var id = Math.random()

    function peerBroadcastMessage(data){
    streams.forEach(function (socket) {
      if(data){
        var message = data.toString()
         socket.write({from: id, seq: seq++, username: address, message: message})
      }
    })
  }