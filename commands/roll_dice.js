const {SlashCommandBuilder} = require('discord.js');
module.exports = {
    data: new SlashCommandBuilder()
    .setName('roll_dice')
    .setDescription('Rolls a die')
    .addIntegerOption(option => option.setName('num_sides').setDescription('How many sides does this die have').setRequired(true))
    .addIntegerOption(option => option.setName('num_dice').setDescription('How many dice to roll'))
    .addIntegerOption(option => option.setName('add').setDescription('How much to add to the roll'))
    .addBooleanOption(option => 
        option.setName('add_to_each_die')
        .setDescription('Whether to add the adder to every dice rolled')
    ),
    async execute(interaction){
        const numSides = interaction.options.getInteger('num_sides');
        const numDice = interaction.options.getInteger('num_dice');
        const addToEach = interaction.options.getBoolean('add_to_each_die');
        const adder = interaction.options.getInteger('add');
        let DiceNums = [];
        let total = 0;
        if(numDice != null){
            for(let i = 0; i < numDice; i++){
                let currentInt = randomIntFromInterval(1,numSides);
                total += currentInt;
                DiceNums.push(currentInt);
            }
            let currentOutput = "You rolled: ";
            DiceNums.forEach(element => {
                currentOutput += element.toString();
                currentOutput += ", "
            });
            currentOutput = currentOutput.slice(0,-2);
            currentOutput = currentOutput + "\nTotal: "
            currentOutput += total.toString();
            if(adder != null){
                if(addToEach == null || !addToEach){
                    currentOutput += "\nAdd " + adder.toString() + " 1 time: "
                    total += adder;
                    currentOutput += total.toString();
                } else {
                    currentOutput += "\nAdd " + adder.toString() + " " + numDice.toString() + " times: "
                    total += (adder * numDice);
                    currentOutput += total.toString();

                }
            }
            await interaction.reply(currentOutput);
        } else {
            let currentInt = randomIntFromInterval(1,numSides);
            var currentOutput = "You rolled: ";
            currentOutput += currentInt.toString();
            currentOutput += "\n"
            if(adder != null){
                currentOutput += "Add " + adder.toString() + ": " + (currentInt + adder).toString();
            }
            interaction.reply(currentOutput);
        }
        
    }
}
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
// const rollDice = new SlashCommandBuilder()
//     .setName('roll_dice')
//     .setDescription('Rolls a die')
//     .addUserOption(option =>option.setName('number_dice').setDescription('How many dice to roll'))
//     .addUserOption(option => option.setName('num_sides').setDescription('How many sides does this die have').setRequired(true))
//     .addUserOption(option => option.setName('add').setDescription('How much to add to the roll'))
//     .addUserOption(option => option.setName('add_to_each_die').setDescription('Whether to add the adder to every dice rolled').addChoices(
//         { name: 'True', value: true},
//         { name: 'False', value: false}
//     ));