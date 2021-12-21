const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('hemmelig')
		.setDescription('Denne kommandoen svarer bare til deg!'),
	async execute(interaction) {
		await interaction.reply({
			content: 'Ja, dette er altså en hemmelig beskjed til deg, som bare du kan se.',
			epheral: true,
		});
		await interaction.followUp({
			content: '[Discrod.js Guide](https://discordjs.guide/interactions/replying-to-slash-commands.html#deferred-responses)',
			epheral: true,
		});
	},
};
