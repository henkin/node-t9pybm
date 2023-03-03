import type { RequestHandler } from "@sveltejs/kit";

export const get: RequestHandler = (ctx) => {
  return {
    body: {
      random: Math.random().toFixed(2) + 1,
    },
  };
};
