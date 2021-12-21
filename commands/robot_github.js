const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('github')
		.setDescription('Vis lenke til RoBOT på GitHub!'),
	async execute(interaction) {
		await interaction.reply(`
Du kan finne repository for RoBOT på GitHub her:

[RoBOT](https://github.com/robstr-teacher/RoBOT)
`);
	},
};
