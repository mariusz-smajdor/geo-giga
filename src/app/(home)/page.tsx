import { getServerSession } from 'next-auth';

import { authOptions } from '../api/auth/[...nextauth]/route';

import { Profile } from './profile';
import { IntroMessage } from './intro-message';
import { QuoteCarousel } from './quote-carousel';
import { Globe } from '@/components/ui/globe';

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <>
      {session ? (
        <Profile />
      ) : (
        <main className='container relative my-12 flex min-h-[calc(100vh-3.5rem-1px)] flex-col items-center justify-center gap-12 md:my-0 md:items-start md:gap-20'>
          <IntroMessage />
          <QuoteCarousel />
          <Globe className='right-0 md:absolute' />
        </main>
      )}
    </>
  );
}
