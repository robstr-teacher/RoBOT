const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('Svarer med litt serverinformasjon!'),
	async execute(interaction) {
		await interaction.reply('Pong!');
	},
};
