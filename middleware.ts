import { next } from '@vercel/edge';

console.log('Middleware loaded');

export default function middleware(request: Request) {
	console.log('in middleware');
	return next();
}
