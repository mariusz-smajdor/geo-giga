import { Button } from '@/components/ui/button';
import { Globe } from '@/components/ui/globe';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className='container flex h-[calc(100vh-3.5rem-1px)] items-center lg:justify-evenly'>
      <section className='z-20 max-w-lg'>
        <section className='my-8 flex h-12 items-center gap-4 text-xl'>
          <span>404</span>
          <Separator orientation='vertical' className='bg-muted-foreground' />
          <h1>Oops! You're Off the Map!</h1>
        </section>
        <p className='my-8 text-lg text-muted-foreground'>
          We're sorry, but the page you're looking for seems to have gone on its
          own little adventure.
        </p>
        <Button asChild size='lg'>
          <Link href='/'>Back Home</Link>
        </Button>
      </section>
      <Globe className='fixed right-0 lg:static' />
    </main>
  );
}
