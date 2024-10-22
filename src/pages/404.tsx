import React from 'react';

import Logo from '@/assets/logo.svg?react';
import env from '@/env';

const NotFoundPage = () => (
  <main className="flex h-dvh flex-col items-center justify-center gap-8">
    <Logo height={98} title="Vite Logo" width={98} />
    <h1 className="text-center text-3xl">Vite + React</h1>
    <h2 className="font-mono text-xl text-slate-500">404::PAGE_NOT_FOUND</h2>
    <code className="text-sm text-slate-700">
      {env.APP_NAME}-{env.APP_MODE}-{env.GITHUB_WORKFLOW_SHA.slice(0, 7)}
    </code>
  </main>
);

export default NotFoundPage;
