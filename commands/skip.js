const {SlashCommandBuilder} = require('discord.js');
const {skipInQueue} = require('../voicePlayer');
module.exports = {
    data: new SlashCommandBuilder()
    .setName('skip')
    .setDescription('Skips the current song')
    .addIntegerOption(option => option
        .setName('number')
        .setDescription('Number of songs to skip')
    ),
    async execute(interaction){
        let num = 1;
        if(interaction.options.getInteger('number') !== null){
            num = interaction.options.getInteger('number');
        }
        skipInQueue(interaction.guild, num);
        await interaction.reply(`Skipped ${num} tracks`);
    }
}