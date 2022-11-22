module.exports = {
    async Test(message){
        let content = message.content.toLowerCase().replace(/(\|\|).*?(\|\|)/, "");
        if(content.includes('m back')){
            content = content.slice(0, content.lastIndexOf('m back'));
            if(content.includes('i')){
                message.reply('Welcome back!');
                return true;
            }
            
        }
    }
}