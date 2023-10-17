import Link from 'next/link';

import { Button } from '@/components/ui/button';

export function IntroMessage() {
  return (
    <section className='z-20 w-full max-w-md text-center md:ml-12'>
      <h1 className='mb-6 text-2xl uppercase'>Explore the World!</h1>
      <p className='my-2 text-lg text-muted-foreground'>
        Get dropped anywhere from the busy streets of Kalety to the beautiful
        beaches of Stegna.
      </p>
      <p className='my-2 text-lg text-muted-foreground'>
        Join 0 million players now!
      </p>
      <Button size='lg' className='mt-4' asChild>
        <Link href='/register'>Play for Free!</Link>
      </Button>
    </section>
  );
}
