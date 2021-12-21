const fs = require('fs');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId, token } = require('./config.json');

/*
 * Les inn og registrer kommandoene du har laget i discord
 */

// En array som skal inneholde en liste med kommandoer
const commands = [];
// Les inn alle filene som ender med .js til commandFiles
const commandFiles = fs. readdirSync('./commands').filter(file => file.endsWith('.js'));

/*
 * Gå gjennom alle filene, les dem inn og legg dem til listen med kommandoer
 */
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	commands.push(command.data.toJSON());
}

const rest = new REST({ version: '9' }).setToken(token);

(async () => {
	try {
		console.log('Started refreshing application (/) commands.');

		await rest.put(
			Routes.applicationGuildCommands(clientId, guildId),
			{ body: commands },
		);

		console.log('Successfully reloaded application (/) commands.');
	}
	catch (error) {
		console.error(error);
	}
})();