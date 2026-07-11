export const hero = {
  title: 'Frank "Der Baubär" Schliemann',
  dedication: '* 16.11.1964 ✝ 30.6.2025',
};

export const sections = [
  {
    heading: 'Wer er war',
    body: 'Hier steht später ein Absatz über sein Leben, seine Persönlichkeit und was ihn ausgemacht hat. Dieser Platzhaltertext kann durch die echte Geschichte ersetzt werden.',
  },
  {
    heading: 'Erinnerungen',
    body: 'Hier steht später ein Absatz mit Erinnerungen, Anekdoten oder Momenten, die in guter Erinnerung bleiben. Dieser Platzhaltertext kann durch echte Erinnerungen ersetzt werden.',
  },
  {
    heading: 'Zum Abschied',
    body: 'Hier steht später ein abschließender Gedanke oder ein Zitat.',
  },
] as const;

export const slides = [
  { src: '/images/2014_hochzeit.jpg', alt: 'Hochzeit, 2014' },
  { src: '/images/eishockey_strand.jpg', alt: 'Eishockey am Strand' },
  { src: '/images/pool.jpg', alt: 'Am Pool' },
] as const;
