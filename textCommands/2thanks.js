module.exports = {
    async Test(message){ 
        let content = message.content.toLowerCase().replace(/(\|\|).*?(\|\|)/, "");
        if(content.includes('thank') && (content.includes('dh') || content.includes('homie'))){
            message.reply("You're welcome!");
            return true;
        }

        return false;
    }
}