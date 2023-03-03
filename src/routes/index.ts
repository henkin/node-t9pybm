import type { RequestHandler } from "@sveltejs/kit";

export const get: RequestHandler = (event) => {
  return {
    body: { msg: "get request success" },
  };
};

export const post: RequestHandler = (event) => {
  return {
    body: {},
  };
};
