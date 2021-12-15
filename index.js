const Hapi = require('@hapi/hapi');

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: 'localhost',
  });

  server.route({
  });

  await server.start();
  console.log(`Server start at ${server.info.uri}`);
};

init();