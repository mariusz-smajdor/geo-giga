'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Info } from 'lucide-react';

import { registerSchema, type RegisterSchema } from '@/lib/zod-schema';
import { FormContainer } from '../form-container';
import { useToast } from '@/components/ui/toast/use-toast';
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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export default function Register() {
  const { toast } = useToast();
  const router = useRouter();
  const form = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  async function onSubmit(values: RegisterSchema) {
    try {
      await axios.post('/api/register', values);
      toast({
        title: 'Successfully registered!',
        description: 'You can now login to your account.',
      });
      router.push('/login');
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const errors = error.response.data;
        Object.entries(errors).forEach(([key, value]) => {
          form.setError(key as keyof RegisterSchema, {
            type: 'server',
            message: value as string,
          });
        });
      }
    }
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
                <FormLabel className='flex items-center justify-between'>
                  Password:
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Info className='h-3 w-3 cursor-pointer text-muted-foreground' />
                      </TooltipTrigger>
                      <TooltipContent>
                        <section>
                          <p className='my-1'>
                            Password must contain at least one:
                          </p>
                          <ul className='list-disc px-4 text-muted-foreground'>
                            <li>uppercase letter</li>
                            <li>lowercase letter</li>
                            <li>number</li>
                            <li>special character</li>
                          </ul>
                        </section>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </FormLabel>
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
    </FormContainer>
  );
}
