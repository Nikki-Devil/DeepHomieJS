const { SlashCommandBuilder } = require("discord.js");
// const {setTextEnabled } = require('../voicePlayer');
module.exports = {
    data: new SlashCommandBuilder()
    .setName('pick_between')
    .setDescription('Picks an item between given items')
    .addStringOption(option => option
        .setName('choices')
        .setDescription('The things to pick between (seperated by a "/")')
        .setRequired(true)
    ),
    async execute(interaction){
        var strOptions = interaction.options.getString('choices');
        var arrayOptions = strOptions.split('/');
        var numOptions = arrayOptions.length;
        await interaction.reply(arrayOptions[Math.floor(Math.random() * numOptions)]);
    }
}