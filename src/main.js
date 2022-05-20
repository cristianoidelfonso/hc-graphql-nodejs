import { createServer } from 'http';

const HOSTNAME = process.env.HOSTNAME || '127.0.0.1';
const PORT = process.env.PORT ? parseInt(process.env.PORT) : 8000;

const server = createServer((request, response) => {
  switch(request.url) {
    case '/status': {
      response.writeHead(200, {
        'Content-Type': 'application/json'
      });
      response.write(JSON.stringify({ status: 'Okay'}));
      response.end();
      break;  
    }

    default: {
      response.writeHead(404, 'Server not found.');
      response.end();
    } 
  }
});

server.listen(PORT, HOSTNAME, () => {
  console.log(`Server is listening at https://${HOSTNAME}:${PORT}`);
})