const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Svarer med et pong!'),
	async execute(interaction) {
		await interaction.reply('Pong!');
	},
};
