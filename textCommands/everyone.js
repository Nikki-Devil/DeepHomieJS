module.exports = {
    async Test(message){
        if(message.content.includes('@everyone')){
            message.reply("Please use @pingable instead");
        }
    }
}