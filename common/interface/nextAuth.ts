import { ExtendedSession } from '@/types';

declare module 'next-auth' {
    interface Session extends ExtendedSession{}
}
