import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { publicProcedure, router } from '@/server/trpc';
import { z } from 'zod';

const appRouter = router({
    sing: publicProcedure
        .input(z.object({
            fullName: z.string(),
            email: z.string(),
            password: z.string(),
            cPassword: z.string()
        }))
        .mutation((opts)=>{
            console.log(opts.input.cPassword);
            console.log(opts.input.email);
            console.log(opts.input.fullName);
            console.log(opts.input.password);
        }),
    hello: publicProcedure
        .query((opts)=>{
            return "it's working"
        })

});

export type AppRouter = typeof appRouter;

const handler = (req: Request) =>

  fetchRequestHandler({
    endpoint: '/api/trpc',
    req,
    router: appRouter,
    createContext: () => ({  }),
   
  });
export { handler as GET, handler as POST };

