const {SlashCommandBuilder} = require('discord.js');
const {getCurrentTrack} = require('../voicePlayer.js');
module.exports = {
    data: nowPlaying = new SlashCommandBuilder()
    .setName('now_playing')
    .setDescription('Displays the current song that is playing'),
    async execute(interaction){
        // Very simple,
        await interaction.reply(getCurrentTrack(interaction.guild));
    }
}