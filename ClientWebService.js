class ClientWebService {

    constructor(address, ident) {
        this.address = address
        this.ident = ident
        this.socket = io(address)


        this.onConnect = (callback) => {
            this.socket.on('connectionMessage', (returnConnectionMessage) => {
                this.socket.emit('ident', 'Lionel')
                callback(returnConnectionMessage)
            })
        }

        this.onBonjour = (callback) => {
            this.socket.on('returnBonjour', (returnBonjour) => {
                callback(returnBonjour)
            })
        }

        this.onYo = (callback) => {
            this.socket.on('yo', (returnYo) => {
                callback(returnYo)
            })
        }

        this.getStatus = () => {
            this.socket.on('status', (status) => {
                return status
            })
        }


        this.sendBonjour = () => {
            this.socket.emit('bonjour', 'bonjour')
        }

        this.yo = () => {
            this.socket.emit('yo', 'yo')
        }
    }
}





