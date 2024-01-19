import { AppRouter } from "../api/trpc/[trpc]/route";
import {createTRPCReact} from "@trpc/react-query";

export const trpc = createTRPCReact<AppRouter>({});