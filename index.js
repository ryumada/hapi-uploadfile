const Hapi = require('@hapi/hapi');

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: 'localhost',
  });

  server.route({
    method: 'POST',
    path: '/uploads',
    handler: (request) => {
      return { message: 'Anda berhasil melakukan request' };
    },
    options: {
      payload: {
        allow: 'multipart/form-data',
        multipart: true,
      },
    },
  });

  await server.start();
  console.log(`Server start at ${server.info.uri}`);
};

init();