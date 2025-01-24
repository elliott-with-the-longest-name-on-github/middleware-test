import { rewrite, next } from '@vercel/edge';

export default function middleware(request: Request) {
	console.log('URL in middleware: ', request.url);
	console.log('rewriting to: ', '/rewritten');
	return rewrite('/rewritten');
}
