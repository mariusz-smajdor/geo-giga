import Image from 'next/image';
import { getServerSession } from 'next-auth';

import { authOptions } from '../api/auth/[...nextauth]/route';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';

export async function Profile() {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  return (
    <main className='sm:xl container mx-auto my-12 max-w-md gap-12 md:max-w-2xl lg:max-w-4xl'>
      <section className='flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-12'>
        <section className='flex flex-col items-center gap-2'>
          <Image
            src={user?.image || ''}
            alt={`${user?.name} profile picture`}
            width={200}
            height={200}
            className='rounded-full shadow-lg'
            priority
          />
          <h1 className='text-xl'>{user?.name}</h1>
        </section>
        <section className='flex flex-col gap-6 lg:flex-grow'>
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
      </section>
    </main>
  );
}
