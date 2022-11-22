const { SlashCommandBuilder } = require("discord.js");
const {setTextEnabled } = require('../voicePlayer');
module.exports = {
    data: new SlashCommandBuilder()
    .setName('text_commands')
    .setDescription('Displays whether text commands are currently enabled')
    .addBooleanOption(option => option.setName('enable').setDescription('Should the text commands be enabled (true) or disabled (false)')),
    async execute(interaction){
        enabled = interaction.options.getBoolean('enable');
        setTextEnabled(enabled, interaction.guild.id);
        if(enabled){
            await interaction.reply({content: 'Text commands are now enabled', ephemeral: true});
        } else {
            await interaction.reply({content: 'Text commands are now disabled', ephemeral: true});
        }
    }
}
