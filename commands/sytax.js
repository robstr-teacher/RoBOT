const { SlashCommandBuilder } = require('@discordjs/builders');

const syntaxes = {
	function: `
function name([param[, param,[..., param]]]) {
    [statements]
}

Se: [function declaration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)`,
	'if...else': `
if (condition) {
   statement1
} else {
   statement2
}

Se: [if...else](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)`,
	switch: `
switch (expression) {
  case value1:
    //Statements executed when the
    //result of expression matches value1
    [break;]
  case value2:
    //Statements executed when the
    //result of expression matches value2
    [break;]
  ...
  case valueN:
    //Statements executed when the
    //result of expression matches valueN
    [break;]
  [default:
    //Statements executed when none of
    //the values match the value of the expression
    [break;]]
}

Se: [switch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)`,
	block: `
{
  StatementList
}

Se: [block](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/block)`,
	break: `
break [label];

Se: [break](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break)`,
	continue: `
continue [label];

Se: [continue](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/continue)`,
	let: `
let name1 [= value1] [, name2 [= value2]] [, ..., nameN [= valueN];

Se: [let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)`,
	const: `
const name1 = value1 [, name2 = value2 [, ... [, nameN = valueN]]];

Se: [const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)`,
	'async function': `
async function name([param[, param[, ...param]]]) {
   statements
}

Se: [async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)`,
	return: `
return [expression];

Se: [return](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return)`,
	empty: `
;

Se: [empty](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/Empty)`,
	throw: `
throw expression;

Se: [throw](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw)`,
	'try...catch': `
try {
  try_statements
}
catch (exception_var) {
  catch_statements
}
finally {
  finally_statements
}

Se: [try...catch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)`,
	class: `
class name [extends otherName] {
  // class body
}

Se: [class](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/class)`,
	'do...while': `
do
   statement
while (condition);

Se: [do...while](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while)`,
	for: `
for ([initialization]; [condition]; [final-expression])
   statement
   
Se: [for](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)`,
	'for...in': `
for (variable in object) {
  statement
}

Se: [for...in](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)`,
	'for...of': `
for (variable of iterable) {
  statement
}

Se: [for...of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)`,
	'for await...of': `
for await (const variable of iterable) {
  statement
}

Se: [for await...of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of)`,
	while: `
while (condition)
  statement
  
Se: [while](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)`,
	debugger: `
function potentiallyBuggyCode() {
    debugger;
    // do potentially buggy stuff to examine, step through, etc.
}

Se: [debugger](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/debugger)`,
}

module.exports = {
	data: new SlashCommandBuilder()
		.setName('syntaks')
		.setDescription('Spør om syntaks for javascript!')
		.addStringOption(option => 
			option.setName('input')
				.setDescription('Hvilken syntaks ønsker du?')
				.setRequired(true)),
	async execute(interaction) {
		const inputString = interaction.options.getString('input');
		await interaction.reply({
			content: `Du ønsker syntaks til "${inputString}"`,
			epheral: true,
		});
		if (inputString in syntaxes) {
			await interaction.followUp({content: `
Syntax til "${inputString}":

${syntaxes[inputString]}`, epheral: true});
		} else {
			let message = `
Beklager, kunne ikke finne sytaks til "${inputString}"
            
Her er en liste over sytakser du kan spørre om:
`;
			syntaxList = Object.keys(syntaxes);
			for(let i = 0; i < syntaxList.length; i++) {
				message += `
    - ${syntaxList[i]}`;
			}
			await interaction.followUp({content: message, epheral: true});
		}
	},
};

