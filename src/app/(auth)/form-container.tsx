import { type ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

import { Globe } from '@/components/ui/globe';
import { Button } from '@/components/ui/button';

type AuthContainerProps = {
  children: ReactNode;
};

export function FormContainer({ children }: AuthContainerProps) {
  const pathname = usePathname();

  return (
    <main className='container relative flex h-[calc(100vh-3.5rem-1px)] items-center justify-center md:justify-normal lg:justify-evenly'>
      <section className='z-20 flex w-full max-w-[350px] flex-col gap-4'>
        <section className='text-center'>
          <h1 className='mb-1 text-2xl font-[500]'>
            {pathname === '/register'
              ? 'Welcome to GeoGIGA'
              : 'Welcome Back to GeoGIGA'}
          </h1>
          <p className='text-muted-foreground'>
            {pathname === '/register'
              ? "Let's get started with your free account!"
              : 'Login to play the best geographic games!'}
          </p>
        </section>
        <Button variant='outline'>
          <Image
            src='/google-logo.png'
            alt='Google Logo'
            width={20}
            height={20}
            className='mr-2'
          ></Image>
          Continue with Google
        </Button>
        <span className='flex items-center text-xs before:mr-2 before:h-px before:grow before:bg-muted before:content-[""] after:ml-2 after:h-px after:grow after:bg-muted after:content-[""]'>
          or
        </span>
        {children}
      </section>
      <Globe className='absolute right-0 lg:static' />
    </main>
  );
}
