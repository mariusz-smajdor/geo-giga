import { IntroMessage } from './intro-message';
import { QuoteCarousel } from './quote-carousel';
import { Globe } from '@/components/ui/globe';

export default function Home() {
  return (
    <main className='container relative my-12 flex min-h-[calc(100vh-3.5rem-1px)] flex-col items-center justify-center gap-12 md:my-0 md:items-start'>
      <IntroMessage />
      <QuoteCarousel />
      <Globe className='right-0 md:absolute' />
    </main>
  );
}
