import { config } from 'dotenv';
config();

import { Client } from '.';

let client = new Client();

client.on('ready', () => {
	console.log(`Logged in as ${client.user?.username}!`);

	/*client.findChannel('01E1CDFQ4QWT93Q2Z6YWVTW2ND')
		.then(async x => {
			let [ temp, next ] = x.sendMessage('bruh');
			await next;
			console.log(Array.from(x.messages.values()).map(x => x.id));
		})*/
});

client.on('message', msg => {
	console.log(`[${msg.user.username}] ${msg.content}`);
});

client.on('message_update', (msg, old) => {
	console.log(`[${msg.user.username}::edited] ${msg.content}`);
});

client.on('message_delete', id => {
	console.log(`[deleted] ${id}`);
});

client.on('connected', () => {
	console.error('Connected.');
});

client.on('dropped', () => {
	console.error('Disconnected.');
});

client.on('error', err => {
	console.error('Encountered an error!', err);
});

client.login(process.env.TOKEN as string);
