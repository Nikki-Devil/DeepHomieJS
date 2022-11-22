const { SlashCommandBuilder } = require("discord.js");
module.exports = {
    data: new SlashCommandBuilder()
    .setName('pick_a_number')
    .setDescription('Picks a number between a and b')
    .addIntegerOption(option => option
        .setName('a')
        .setDescription('The starting value')
        .setRequired(true)
    )
    .addIntegerOption(option => option
        .setName('b')
        .setDescription('The ending value')
        .setRequired(true)
    )
    .addBooleanOption(option => option
        .setName('inclusive')
        .setDescription('Whether to include the starting and ending values')
    ),
    async execute(interaction){
        var a = interaction.options.getInteger('a');
        var b = interaction.options.getInteger('b');
        if(a > b){
            var c = b;
            b = a;
            a = c;
        }
        var inclusive = interaction.options.getBoolean('inclusive');
        if(inclusive == null){
            inclusive = true;
        }
        if(!inclusive){
            a += 1;
            b -= 1;
        }
        await interaction.reply(Math.floor(Math.random() * (b - a + 1) + a).toString());
    }

}