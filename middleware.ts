import { rewrite, next } from '@vercel/edge';

export default function middleware(request: Request) {
	const pathname = new URL(request.url).pathname;

	console.log('URL in middleware: ', request.url);

	return rewrite(pathname + '-rewritten');
}
