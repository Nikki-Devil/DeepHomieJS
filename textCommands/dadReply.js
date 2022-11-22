
module.exports = {

    async Test(message){
        if(message.author.id == 503720029456695306){
            if(Math.floor(Math.random() * 2) == 1){
                message.channel.send("Thanks dad!");
                return true;
            } else {
                message.channel.send("Hi dad!");
                return true;
            }
        }
        return false;
    }
}