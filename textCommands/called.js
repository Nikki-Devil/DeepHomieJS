module.exports = {
    async Test(message){
        let content = message.content.toLowerCase().replace(/(\|\|).*?(\|\|)/, "");
        if(content.includes('dh') || content.includes('deep homie')){
            message.channel.send('Someone called?');
            return true;
        }
        return false;
    }
}