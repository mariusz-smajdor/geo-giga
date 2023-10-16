import { IntroMessage } from './intro-message';
import { QuoteCarousel } from './quote-carousel';
import { Globe } from '@/components/ui/globe';

export default function Home() {
  return (
    <main className='mt-14 container flex min-h-[calc(100vh-3.5rem-1px)] flex-col justify-evenly gap-14 sm:mt-0 sm:gap-0'>
      <IntroMessage />
      <QuoteCarousel />
      <Globe className='right-[5%] sm:fixed' />
    </main>
  );
}
