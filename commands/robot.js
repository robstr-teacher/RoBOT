const fs = require('fs');
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('robot')
		.setDescription('Vis RoBOT kommandoer'),
	async execute(interaction) {
		const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js')).map(fileName => fileName.slice(0, -3));
		let message = 'Følgende kommandoer er tilgjengelige fra RoBOT:';
		for (const kommando of commandFiles) {
			message += `
    /${kommando}`;
		}
		await interaction.reply({ content: message, epheral: true });
	},
};
