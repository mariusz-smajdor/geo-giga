'use client';

import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { loginSchema, type LoginSchema } from '@/lib/zod-schema';
import { FormContainer } from '../form-container';
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

export default function Login() {
  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  async function onSubmit(values: LoginSchema) {
    console.log(values);
  }

  return (
    <FormContainer>
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
          <Button type='submit' className='mt-4'>
            Continue
          </Button>
        </form>
        <p className='text-sm'>
          Don't have an account yet?&nbsp;
          <Button asChild variant='link' className='h-0 p-0'>
            <Link href='/register'>Sign up</Link>
          </Button>
        </p>
      </Form>
    </FormContainer>
  );
}
