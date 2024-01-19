import * as trpcNext from '@trpc/server/adapters/next';
import { publicProcedure, router } from '@/server/trpc';
import { z } from 'zod';

const appRouter = router({

});

export type AppRouter = typeof appRouter;

export default trpcNext.createNextApiHandler({
    router: appRouter,
    createContext: () => ({}),
  });