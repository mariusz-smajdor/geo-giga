'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Quote as QuoteIcon,
} from 'lucide-react';

import { cn } from '@/lib/utils';
import { quotes } from './quotes';

const MAX_STAR_RATING = 5;

export function QuoteCarousel() {
  const [currentQuote, setCurrentQuote] = useState(0);

  function changeQuote(direction: -1 | 1) {
    if (currentQuote === 0 && direction === -1) {
      setCurrentQuote(quotes.length - 1);
      return;
    }
    if (currentQuote === quotes.length - 1 && direction === 1) {
      setCurrentQuote(0);
      return;
    }
    setCurrentQuote(currentQuote + direction);
  }

  return (
    <section className='relative z-20 flex flex-col sm:flex-row max-w-full items-center sm:mx-9 sm:max-w-lg sm:gap-6 md:max-w-xl lg:max-w-2xl'>
      <ChevronLeft
        className='absolute -left-12 h-10 w-10 shrink-0 cursor-pointer sm:block hidden hover:text-muted-foreground transition-colors'
        onClick={() => changeQuote(-1)}
      />
      {quotes.map((quote, i) => (
        <div
          key={i}
          className={cn(
            'hidden h-44 w-full rounded-lg border bg-card/50 p-3 shadow-md',
            currentQuote === i && 'flex flex-col'
          )}
        >
          <div className='mb-3 flex items-center gap-2'>
            <Image
              src={quote.icon}
              alt="Quoter's icon"
              width={40}
              height={40}
              className='rounded-full'
            />
            <div className='text-left'>
              <div className='flex gap-2'>
                <span>{quote.user}</span>
                <div className='flex items-center'>
                  <Image
                    src={quote.flag}
                    alt="Quoter's flag"
                    width={25}
                    height={25}
                    className='shrink-0 rounded-[2px] border shadow-xl'
                  />
                </div>
              </div>
              <div className='flex'>
                {Array.from(
                  { length: MAX_STAR_RATING },
                  (_, index) => index + 1
                ).map(num => (
                  <Star
                    key={num}
                    size={16}
                    fill={num <= quote.stars ? 'currentColor' : 'transparent'}
                    className='text-primary'
                  />
                ))}
              </div>
            </div>
          </div>
          <p className='my-auto text-center text-muted-foreground'>
            {quote.text}
          </p>
          <QuoteIcon
            size={32}
            fill='currentColor'
            className='relative bottom-full left-full shrink-0 text-primary'
          />
        </div>
      ))}
      <ChevronRight
        className='absolute -right-12 h-10 w-10 shrink-0 cursor-pointer sm:block hidden hover:text-muted-foreground transition-colors'
        onClick={() => changeQuote(1)}
      />
      <div className='sm:hidden flex gap-1 absolute -bottom-8'>
        {quotes.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentQuote(index)}
            className={cn(
              'h-3 rounded-full w-3 border bg-muted-foreground transition-width duration-300 ease-in-out cursor-pointer',
              index === currentQuote && 'bg-primary w-6'
            )}
          />
        ))}
      </div>
    </section>
  );
}
