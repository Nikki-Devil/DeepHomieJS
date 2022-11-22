module.exports = {
    async Test(message){
        let content = message.content.toLowerCase().replace(/(\|\|).*?(\|\|)/, "").replace("'", "");
        if(content.includes('go')){
            content.slice(0, content.lastIndexOf('go'));
            if(content.includes("lets")){
                message.channel.send({files:[{attachment: "https://cdn.discordapp.com/attachments/774465420534743050/821140941612122112/video0.mov", name: "letsGo.mov"}]});
                return true;
            }
        } else if(content.includes('pog') || content == 'sick' || (content.includes('that') && content.includes('sick')) || content.includes('hype')){
            message.channel.send({files:[{attachment: "https://cdn.discordapp.com/attachments/774465420534743050/821140941612122112/video0.mov", name: "letsGo.mov"}]});
            return true;
        }
        

        return false;
    }

}