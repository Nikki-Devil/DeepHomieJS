module.exports = {
    async Test(message){
        var content = message.content.toLowerCase().replace(/(\|\|).*?(\|\|)/, "");;
        if(content.includes('jayden') || content.includes('jaiden') || content.includes('jaden') || content.includes('jaeden')){
            message.reply('Phjaiyden*');
            return true;
        }
    }
}