import Link from 'next/link';
import { CircleOff } from 'lucide-react';

import { UserMenu } from './user-menu';

export function Header() {
  return (
    <header className='sticky left-0 right-0 top-0 z-50 border-b backdrop-blur-sm'>
      <div className='container flex h-14 items-center justify-between'>
        <Link href='/' className='flex select-none items-center gap-1'>
          <CircleOff size={22} strokeWidth={1.4} />
          <span className='text-xl'>GeoGIGA</span>
        </Link>
        <UserMenu />
      </div>
    </header>
  );
}
