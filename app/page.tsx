import Slider from './Slider';
import { condolenceForm, hero, sections } from './content';

const Home = () => (
  <div className='flex flex-1 flex-col items-center bg-zinc-50 font-sans dark:bg-black'>
    <main className='flex w-full max-w-3xl flex-col items-center gap-16 px-6 py-24 sm:px-16'>
      <header className='flex flex-col items-center gap-4 text-center'>
        <h1 className='font-serif text-4xl font-semibold tracking-tight text-black dark:text-zinc-50'>
          {hero.title}
        </h1>
        <p className='max-w-md font-serif text-2xl leading-8 text-zinc-600 dark:text-zinc-400'>
          {hero.dedication}
        </p>
      </header>

      <Slider />

      <div className='flex w-full flex-col gap-12'>
        {sections.map((section) => (
          <section
            key={section.heading}
            className='flex flex-col gap-3 text-center sm:text-left'
          >
            <h2 className='font-serif text-2xl font-semibold text-black dark:text-zinc-50'>
              {section.heading}
            </h2>
            <p className='text-lg leading-8 text-zinc-600 dark:text-zinc-400'>
              {section.body}
            </p>
          </section>
        ))}
      </div>

      <a
        href={condolenceForm.url}
        target='_blank'
        rel='noopener noreferrer'
        className='flex h-12 items-center justify-center rounded-full bg-foreground px-6 text-base font-medium text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]'
      >
        {condolenceForm.linkText}
      </a>
    </main>
  </div>
);

export default Home;
