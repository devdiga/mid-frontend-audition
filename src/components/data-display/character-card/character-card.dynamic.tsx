import dynamic from 'next/dynamic';

export const CharacterCardDynamic = dynamic(
  () => import('./character-card.component'),
  {
    ssr: false
  }
);
