const { ChannelType } = require("discord.js");

module.exports = {
    async execute(message){
        
        let newName = message.content.substring(3).replace(/(\|\|).*?(\|\|)/, "");;

        if(newName.endsWith('era')){
            newName += 'l';
        } else if(newName.endsWith('er')){
            newName += 'al';
        } else if(newName.endsWith('e')){
            newName += "ral";
        } else {
            newName += 'eral';
        }
        // 592055714764029962 Normal voice channel id
        // 834159938199879732 Testing voice channel
        let nameFound = false;
        let channels = await message.guild.channels.fetch()
        // console.log(channels);
        channels.forEach(channel => {
            if(channel.type == ChannelType.GuildVoice){
                if(channel.name == newName){
                    nameFound = true;
                }
            }

        });       
        console.log(nameFound);
        console.log(newName);
        
        if(!nameFound){
            let channel = await message.guild.channels.fetch('592055714764029962');
            channel.edit({name: newName});
        }
        //  message.guild.channels.edit(834159938199879732, {name: newName});
    },
    
    async Test(message){
        var content = message.content.toLowerCase();
        // 834198675940048897 Normal joining channel id
        // 824062654863769603 Test channel id
        if(content.startsWith('in ') && message.channelId == 834198675940048897){
            //If some criteria is met, call the execute function.
            this.execute(message);
            // If you want to make a command not be the only one that can activate, set the return statement to true
            return false;
        }
        return false;
        // Return false if another command can be tested
    
    }
}