export default {
  async fetch(request: Request, env: {}, ctx: ExecutionContext) {
    request;
    env;
    ctx;
    return new Response('Hello, world!');
  },
};
