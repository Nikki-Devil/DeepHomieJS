
module.exports = {
    async execute(message){
        await message.react('🦀');
    },
    
    async Test(message){
        var content = message.content.toLowerCase().replace(/(\|\|).*?(\|\|)/, "");
        if(content.includes('s dead') || content.includes('s died')){
            //If some criteria is met, call the execute function.
            this.execute(message);
            // If you want to make a command not be the only one that can activate, set the return statement to true
            return false;
        }
        return false;
        // Return false if another command can be tested
    
    }
}
