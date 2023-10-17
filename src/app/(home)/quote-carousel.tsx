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
    <section className='relative z-20 flex w-full flex-col items-center gap-2 md:flex-row'>
      <ChevronLeft
        className='hidden h-10 w-10 cursor-pointer transition-colors hover:text-muted-foreground md:block'
        onClick={() => changeQuote(-1)}
      />
      {quotes.map((quote, i) => (
        <div
          key={i}
          className={cn(
            'hidden',
            currentQuote === i &&
              'relative flex min-h-[11rem] w-full flex-col rounded-lg bg-card/50 p-3 shadow md:max-w-xl',
          )}
        >
          <QuoteIcon
            size={32}
            fill='currentColor'
            className='absolute -right-4 -top-4 text-primary'
          />
          <div className='flex items-center gap-2'>
            <Image
              src={quote.icon}
              alt="Quoter's icon"
              width={40}
              height={40}
              className='rounded-full'
            />
            <div>
              <div className='flex items-center gap-1'>
                <span className='whitespace-nowrap'>{quote.user}</span>
                <div className='flex-shrink-0'>
                  <Image
                    src={quote.flag}
                    alt="Quoter's flag"
                    width={25}
                    height={25}
                    className='border'
                  />
                </div>
              </div>
              <div className='flex'>
                {Array.from(
                  { length: MAX_STAR_RATING },
                  (_, index) => index + 1,
                ).map((num) => (
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
          <div className='flex flex-grow items-center justify-center'>
            <p className='text-center'>{quote.text}</p>
          </div>
        </div>
      ))}
      <ChevronRight
        className='hidden h-10 w-10 cursor-pointer transition-colors hover:text-muted-foreground md:block'
        onClick={() => changeQuote(1)}
      />
      <div className='absolute -bottom-8 flex gap-1'>
        {quotes.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentQuote(index)}
            className={cn(
              'h-3 w-3 cursor-pointer rounded-full bg-muted-foreground duration-300 ease-in-out md:hidden',
              index === currentQuote && 'w-6 bg-primary',
            )}
          />
        ))}
      </div>
    </section>
  );
}
