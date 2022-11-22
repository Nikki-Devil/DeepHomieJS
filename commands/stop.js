const {SlashCommandBuilder} = require('discord.js');
const {StopQueue} = require('../voicePlayer.js');
module.exports = {
    data: new SlashCommandBuilder()
    .setName('stop')
    .setDescription('Stops the current playlist'),
    async execute(interaction){
        StopQueue(interaction.guild);
        await interaction.reply('Current queue stopped');
    }
}