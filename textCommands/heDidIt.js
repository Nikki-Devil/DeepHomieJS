module.exports = {
    async Test(message){
        let content = message.content.toLowerCase().replace(/(\|\|).*?(\|\|)/, "");
        if(content.includes('did it')){
            content = content.slice(0, content.lastIndexOf('did it'));
            if(content.includes('she ')){
                await message.channel.send('She did it!');
            } else if (content.includes('he ')){
                await message.channel.send('He did it!');
            } else {
                await message.channel.send('They did it!');
            }
            return true;
        }
    }
}