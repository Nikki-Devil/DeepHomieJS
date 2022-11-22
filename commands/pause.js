const {SlashCommandBuilder} = require('discord.js');
const {pauseQueue} = require('../voicePlayer.js');
module.exports = {
    data: new SlashCommandBuilder()
    .setName('pause')
    .setDescription('Pause the current playlist')
    .addIntegerOption(option => option
        .setName('time').setDescription('Number of seconds to pause the current playlist.')
    ),
    async execute(interaction){
        var time = 0;
        var pauseAddon = "";

        if(interaction.options.getInteger('time') != null){
            time = interaction.options.getInteger('time');
            pauseAddon = ` for ${time} seconds`;
        }
        pauseQueue(interaction.guild, time);
        await interaction.reply(`The playlist has been paused${pauseAddon}`);
    }
}