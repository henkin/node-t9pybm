import type { RequestHandler } from '@sveltejs/kit/types/internal';

export const post: RequestHandler = async (evt) => {
  let result;

  const video = await evt.request.json();
  console.log(video);
  return {
    body: {
      video,
    },
  };
};
