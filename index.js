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
      /**
       * mendapatkan dan melihat nilai @var request.payload.data
       */
      const { data } = request.payload;
      console.log(data);
      /**
       * file data akan diterima berupa buffer, namun bisa dilakukan dengan @func fs.writeFile ataupun @func fs.readFile
       * namun, menggunakan fs tidak disarankan, karena saat proses penulisan file yang berukuran besar
       * node process akan terblokir sampai proses menulis file benar-benar selesai
       * proses ini juga akan memakan memori yang besar juga
       * 
       * gunakan teknik @func stream supaya proses berjalan secara @async
       */

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