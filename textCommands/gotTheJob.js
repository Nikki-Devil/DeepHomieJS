module.exports = {
    async Test(message){
        let content = message.content.toLowerCase().replace(/(\|\|).*?(\|\|)/, "");
        if(content.includes('i got the job')){
            message.reply('Congratulations!');
            return true;
        }
    }
}