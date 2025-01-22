export function handle({ event, resolve }) {
	console.log(
		'SvelteKit sees this:',
		'url',
		event.request.url,
		'headers',
		Object.fromEntries(event.request.headers.entries())
	);
	return resolve(event);
}

