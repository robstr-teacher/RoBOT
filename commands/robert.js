const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('robert')
		.setDescription('What about?'),
	async execute(interaction) {
		await interaction.reply('Nice weather today isn\'t it?');
	},
};
