export function handle({ event, resolve }) {
	console.log('in server request');
	return resolve(event);
}
