import { auth } from '@/lib/auth'; // Make sure alias works or use relative path
import { toNextJsHandler } from 'better-auth/next-js';

export const { GET, POST } = toNextJsHandler(auth);
