'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { registerSchema, type RegisterSchema } from '@/lib/zod-schema';
import { Globe } from '@/components/ui/globe';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormLabel,
  FormItem,
  FormMessage,
} from '@/components/ui/form';

export default function Register() {
  const form = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  async function onSubmit(values: RegisterSchema) {
    console.log(values);
  }

  return (
    <main className='container relative flex h-[calc(100vh-3.5rem-1px)] items-center justify-center md:justify-normal lg:justify-evenly'>
      <section className='z-20 flex w-full max-w-xs flex-col gap-4'>
        <section className='text-center'>
          <h1 className='mb-1 text-2xl font-[500]'>Welcome to GeoGIGA</h1>
          <p className='text-muted-foreground'>
            Let's get started with your free account!
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
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='flex flex-col gap-2'
          >
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email:</FormLabel>
                  <FormControl>
                    <Input placeholder='example@email.com' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password:</FormLabel>
                  <FormControl>
                    <Input
                      type='password'
                      placeholder='Your password'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='confirmPassword'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password:</FormLabel>
                  <FormControl>
                    <Input
                      type='password'
                      placeholder='Repeat password'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type='submit' className='mt-4'>
              Continue
            </Button>
          </form>
          <p className='text-sm'>
            Already have an account?&nbsp;
            <Button asChild variant='link' className='h-0 p-0'>
              <Link href='/login'>Sign in</Link>
            </Button>
          </p>
        </Form>
      </section>
      <Globe className='absolute right-0 lg:static' />
    </main>
  );
}
