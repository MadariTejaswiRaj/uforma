import { NextRequest } from 'next/server';
import { profileCreationMiddleware } from '../middleware/profilecreationmiddleware';

export default function middleware({ request }: { request: NextRequest; }) {
  return profileCreationMiddleware(request);
}

export const config = {
  matcher: ['/dashboard/**', '/'], // Adjust paths to match your protected routes
};
