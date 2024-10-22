import React from 'react';

import Logo from '@/assets/logo.svg?react';
import Norris from '@/components/norris';

const HomePage = () => (
  <main className="flex h-dvh flex-col items-center justify-center gap-8">
    <Logo height={98} title="Vite Logo" width={98} />
    <h1 className="text-center text-3xl font-bold">Vite + React</h1>
    <Norris />
  </main>
);

export default HomePage;
