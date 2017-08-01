# Mon super Websocket

## Présentation

Mon super Websocket est une api géniale qui vous permet de dire **bonjour** au serveur distant, de recevoir une réponse de celui ci (la politesse) et d'envoyer des **YO** à tous les autres clients connectés (pas de jaloux)

## Ressources nécessairess

    npm install socket.io --save


## Initialisation du client

    let socket = new ClientWebService('http://localhost:8080', 'Lionel')


## Fonctionnalités

`sendBonjour()` : Permet d'envoyer la chaîne de caractère *bonjour* au serveur.<br/>
`onBonjour()` : Permet de récupérer la réponse du serveur suite à un `sendBonjour()`


* Valeur de retour de type *String*

* ### Example
            $('#bonjour').click(() => {
                socket.sendBonjour()
            })

            socket.onBonjour((returnBonjour) => {
                console.log(returnBonjour)
            })


> (Client) bonjour
> > (Serveur) bonjour à toi aussi !
