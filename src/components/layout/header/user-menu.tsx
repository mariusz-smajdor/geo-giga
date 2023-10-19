'use client';

import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';
import { useTheme } from 'next-themes';
import {
  MoonStar,
  Sun,
  SunMoon,
  User as UserIcon,
  LogIn,
  LogOut,
  ClipboardEdit as SignUp,
} from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from '@/components/ui/dropdown-menu';

export function UserMenu() {
  const { theme, setTheme } = useTheme();
  const { data: session } = useSession();

  const user = session?.user;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className='cursor-pointer'>
          <AvatarImage src={user?.image || ''} />
          <AvatarFallback>
            <UserIcon className='text-muted-foreground' />
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>
          {user ? user.name : 'Play for Free!'}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {user ? (
          <DropdownMenuItem asChild>
            <div className='flex items-center gap-2' onClick={() => signOut()}>
              <LogOut className='h-4 w-4' />
              Sign out
            </div>
          </DropdownMenuItem>
        ) : (
          <>
            <DropdownMenuItem asChild>
              <Link href='/login' className='flex items-center gap-2'>
                <LogIn className='h-4 w-4' />
                Sign in
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href='/register' className='flex items-center gap-2'>
                <SignUp className='h-4 w-4' />
                Sign up
              </Link>
            </DropdownMenuItem>
          </>
        )}
        <DropdownMenuSeparator />
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            {theme === 'light' && <Sun className='h-4 w-4' />}
            {theme === 'dark' && <MoonStar className='h-4 w-4' />}
            {theme === 'system' && <SunMoon className='h-4 w-4' />}
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuItem onClick={() => setTheme('light')}>
              <Sun className='mr-2 h-4 w-4' />
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme('dark')}>
              <MoonStar className='mr-2 h-4 w-4' />
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme('system')}>
              <SunMoon className='mr-2 h-4 w-4' />
              System
            </DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
