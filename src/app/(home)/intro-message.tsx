import Link from 'next/link';

import { Button } from '@/components/ui/button';

export function IntroMessage() {
  return (
    <section className='relative z-20 text-center sm:max-w-lg md:max-w-[50%]'>
      <h1 className='mb-6 text-2xl uppercase'>Explore the World!</h1>
      <p className='my-2 text-lg text-muted-foreground'>
        Get dropped anywhere from the busy streets of Kalety to the beautiful
        beaches of Stegna.
      </p>
      <p className='my-2 text-lg text-muted-foreground'>
        Join 0 million players now!
      </p>
      <Button size='lg' className='mt-6' asChild>
        <Link href='/'>Play for Free!</Link>
      </Button>
    </section>
  );
}
