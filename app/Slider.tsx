'use client';

import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useCallback, useSyncExternalStore } from 'react';

import type { EmblaCarouselType } from 'embla-carousel';
import { slides } from './content';

const useSelectedIndex = (emblaApi: EmblaCarouselType | undefined) => {
  const subscribe = useCallback(
    (onStoreChange: () => void) => {
      if (!emblaApi) return () => {};
      emblaApi.on('select', onStoreChange);
      emblaApi.on('reInit', onStoreChange);
      return () => {
        emblaApi.off('select', onStoreChange);
        emblaApi.off('reInit', onStoreChange);
      };
    },
    [emblaApi]
  );
  const getSnapshot = useCallback(
    () => emblaApi?.selectedScrollSnap() ?? 0,
    [emblaApi]
  );

  return useSyncExternalStore(subscribe, getSnapshot, () => 0);
};

const Slider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);
  const selectedIndex = useSelectedIndex(emblaApi);

  return (
    <div className='w-full max-w-sm'>
      <div className='overflow-hidden rounded-2xl' ref={emblaRef}>
        <div className='flex'>
          {slides.map((slide) => (
            <div
              key={slide.src}
              className='relative aspect-[4/5] min-w-0 flex-[0_0_100%]'
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                sizes='(min-width: 640px) 384px, 100vw'
                className='object-cover'
                priority={slide.src === slides[0].src}
              />
            </div>
          ))}
        </div>
      </div>
      <div className='mt-4 flex justify-center gap-2'>
        {slides.map((slide, index) => (
          <button
            key={slide.src}
            type='button'
            aria-label={`Zu Bild ${index + 1} wechseln`}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`h-2 w-2 rounded-full transition-colors ${
              index === selectedIndex
                ? 'bg-zinc-950 dark:bg-zinc-50'
                : 'bg-zinc-300 dark:bg-zinc-700'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
