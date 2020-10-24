const { EDOM } = require('constants');
const { create } = require('core-js/fn/object');
const { reject } = require('core-js/fn/promise');
const http = require('http');
const Storage = require('./storage');

console.log('server')
createServer();

function readBody(req) {
  return new Promise((resolve, reject) => {
    let dataRow = "";

    req.on('data', (chunk) => (dataRow += chunk));
    req.on('error', reject);
    req.on('end', () => resolve(JSON.parse(dataRow)));
  })
}

function end(res, data, statusCode = 200) {
  res.statusCode = statusCode;
  res.end(JSON.stringify(data));
}

function createServer() {
  console.log('server create')
  const storage = new Storage();

  http
    .createServer(async (req, res) => {
      res.setHeader('content-type', 'application/json');

      console.log('>', req.method, req.url);

      if(req.method !== 'POST') {
        end(res, {});
        return;
      }

      try {
        const body = await readBody(req);

        if(req.url === '/coords'){
          console.log('coord', req)
          end(res, storage.getCoords());
        } else if (req.url === '/add') {
          storage.add(body);
          end(res, { ok: true });
        } else if (req.url === '/list' ) {
    
          end(res, storage.getByCoords(body.coords));
        } else {
          end(res, {})
        }
      } catch (e) {
        end(res, { error: { message: e.message}}, 500)
      }
    })
    .listen(8080);
}