const {SlashCommandBuilder} = require('discord.js');
const {resumeQueue} = require('../voicePlayer');
module.exports = {
    data: new SlashCommandBuilder()
    .setName('resume')
    .setDescription('Resume the current playlist'),
    async execute(interaction){
        resumeQueue(interaction.guild);
        interaction.reply("The playlist has been resumed");
    }
}