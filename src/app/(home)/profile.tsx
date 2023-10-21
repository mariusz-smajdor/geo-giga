import Image from 'next/image';
import { getServerSession } from 'next-auth';
import { Flag, Globe2, Map } from 'lucide-react';

import { authOptions } from '../api/auth/[...nextauth]/route';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';

export async function Profile() {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  return (
    <main className='container my-12'>
      <section className='mx-auto flex w-full max-w-md flex-col gap-6'>
        <section className='mx-auto flex flex-col items-center gap-2'>
          <Image
            src={user?.image || ''}
            alt={`${user?.name} profile picture`}
            width={150}
            height={150}
            className='rounded-full shadow-lg'
            priority
          />
          <h1 className='text-xl'>{user?.name}</h1>
        </section>
        <section className='flex'>
          <div className='flex flex-grow flex-col'>
            <span className='text-xl'>Level</span>
            <span className='text-lg text-muted-foreground'>34</span>
          </div>
          <Separator orientation='vertical' className='mx-4 h-auto' />
          <div className='flex flex-grow flex-col'>
            <span className='text-xl'>Medals</span>
            <span className='text-lg text-muted-foreground'>12</span>
          </div>
        </section>
        <section className='flex flex-col gap-2'>
          <span className='text-lg'>1500 XP to level 35</span>
          <Progress value={33} />
        </section>
      </section>
      <section className='my-20'>
        <h2 className='text-xl'>All Medals</h2>
        <Separator className='my-2' />
        <section className='flex gap-2'>
          <div className='flex h-12 w-12 items-center justify-center rounded-full bg-primary-foreground text-primary'>
            <Flag />
          </div>
          <div className='flex h-12 w-12 items-center justify-center rounded-full bg-primary-foreground text-primary'>
            <Globe2 />
          </div>
          <div className='flex h-12 w-12 items-center justify-center rounded-full bg-primary-foreground text-primary'>
            <Map />
          </div>
        </section>
      </section>
    </main>
  );
}
