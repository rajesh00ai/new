import { QueryClient, QueryFunction } from "@tanstack/react-query";

const throwIfResNotOk = async (res: Response) => {
  if (!res.ok) throw new Error(`${res.status}: ${(await res.text()) || res.statusText}`);
};

export async function apiRequest(method: string, url: string, data?: unknown): Promise<Response> {
  const res = await fetch(url, {
    method,
    headers: data ? { "Content-Type": "application/json" } : {},
    body: data ? JSON.stringify(data) : undefined,
  });
  await throwIfResNotOk(res);
  return res;
}

export const getQueryFn: <T>() => QueryFunction<T> = () => async ({ queryKey }) => {
    const res = await fetch(queryKey.join("/") as string);
    await throwIfResNotOk(res);
    return await res.json();
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: getQueryFn(),
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: false,
    },
    mutations: { retry: false },
  },
});
