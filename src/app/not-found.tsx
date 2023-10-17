import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Globe } from '@/components/ui/globe';

export default function NotFound() {
  return (
    <main className='container relative flex h-[calc(100vh-3.5rem-1px)] items-center justify-center sm:justify-normal'>
      <section className='z-20 max-w-md text-center sm:text-left'>
        <p className='mb-6 text-6xl font-bold'>404</p>
        <h2 className='text-2xl'>Oops! You're Off the Map!</h2>
        <p className='my-2 text-lg text-muted-foreground'>
          We're sorry, but the page you're looking for seems to have gone on its
          own little adventure.
        </p>
        <Button size='lg' className='mt-6' asChild>
          <Link href='/'>Back Home</Link>
        </Button>
      </section>
      <Globe className='absolute sm:right-0' />
    </main>
  );
}
