/**
 * More info about this file:
 * https://v2.quasar.dev/quasar-cli-vite/developing-ssr/ssr-webserver
 *
 * Runs in Node context.
 */

/**
 * Make sure to yarn add / npm install (in your project root)
 * anything you import here (except for express and compression).
 */
import express from 'express';
import compression from 'compression';
path = require('path');
fs = require('fs');
throttle = require('express-throttle-bandwidth');
formidable = require('formidable');

/**
 * Create your webserver and return its instance.
 * If needed, prepare your webserver to receive
 * connect-like middlewares.
 *
 * Should NOT be async!
 */
export function create(/* { ... } */) {
  const app = express();

  folder = path.join(__dirname, 'files');

  if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder);
  }

  // attackers can use this header to detect apps running Express
  // and then launch specifically-targeted attacks
  app.disable('x-powered-by');

  //blog uport bandpassante
  app.use(throttle(1024 * 128)); // throttling bandwidth

  var cors = require('cors');
  app.use(cors());

  const odbc = require('odbc');

  const { Pool } = require('pg');

  const pool = new Pool({
    host: '192.168.1.200',
    port: 5433,
    database: 'AlmaCAMClipper',
    user: 'postgres',
    password: 'almaC38!',
  });

  app.get('/PG', (req, res) => {
    console.log('pg: ok');

    const REF = req.query.REF;

    let result = { devisAlma: {}, devisClipper: {}, affaireClipper: {} };

    pool.query(
      'SELECT _quote_finalization_item__reference,id__quote_finalization_item__quote_finalization,_quote_finalization_item__franco_unit_cost,_quote_finalization_item__quantity,timestamp__quote_finalization_item FROM "public"."doc__quote_finalization_item" where "_quote_finalization_item__reference" like' +
        "'%" +
        REF +
        "%'",
      (err, resquery) => {
        if (err) {
          throw err;
        }
        /*console.log(
          'queryAlma: SELECT _quote_finalization_item__reference,id__quote_finalization_item__quote_finalization,_quote_finalization_item__franco_unit_cost,_quote_finalization_item__quantity,timestamp__quote_finalization_item FROM "public"."doc__quote_finalization_item" where "_quote_finalization_item__reference" like' +
            "'%" +
            REF +
            "%'"
        );
        */
        result.devisAlma = resquery.rows;
        //console.log('devisAlma:', resquery.rows);

        result.devisClipper = [{}];
        result.affaireClipper = [{}];
        console.log('return:', toJson(result));
        res.end(toJson(result));
      }
    );
  });

  app.get('/BC', (req, res) => {
    const BC = parseInt(req.query.BC);
    const AFF = parseInt(req.query.AFF);

    if (BC || AFF) {
      odbc.pool('DSN=HFSQL', (error1, pool) => {
        if (error1) {
          return;
        } // handle

        if (BC) {
          const result = pool.query(
            'SELECT COFOU,DETAILBC.COBC,NAF,COCLI,DATE,DELAI,ART,DESA1,DESA2,DESA3,QTE FROM DETAILBC LEFT JOIN BC ON DETAILBC.COBC = BC.COBC where BC.COBC=' +
              BC,
            (error2, result) => {
              if (error2) {
                console.log(error2);
              } // handle
              //res.end(JSON.stringify(result));
              //console.log(result);
              res.end(toJson(result));
            }
          );
        } else if (AFF) {
          pool.query(
            'SELECT COFOU,DETAILBC.COBC,NAF,COCLI,DATE,DELAI,ART,DESA1,DESA2,DESA3,QTE FROM DETAILBC LEFT JOIN BC ON DETAILBC.COBC = BC.COBC where DETAILBC.NAF = ' +
              AFF,
            (error2, result) => {
              if (error2) {
                console.log(error2);
              } // handle
              //res.end(JSON.stringify(result));
              //console.log(result);
              res.end(toJson(result));
            }
          );
        }
      });
    }
  });

  app.post('/upload', (req, res) => {
    const form = new formidable.IncomingForm();

    form.uploadDir = folder;
    form.parse(req, (_, fields, files) => {
      console.log('\n-----------');
      console.log('Fields', fields);
      console.log('Received:', Object.keys(files));
      console.log();
      res.send('Thank you');
    });
  });

  function toJson(data) {
    if (data !== undefined) {
      return JSON.stringify(data, (_, v) =>
        typeof v === 'bigint' ? `${v}#bigint` : v
      ).replace(/"(-?\d+)#bigint"/g, (_, a) => a);
    }
  }

  // place here any middlewares that
  // absolutely need to run before anything else
  if (process.env.PROD) {
    app.use(compression());
  }

  return app;
}

/**
 * You need to make the server listen to the indicated port
 * and return the listening instance or whatever you need to
 * close the server with.
 *
 * The "listenResult" param for the "close()" definition below
 * is what you return here.
 *
 * For production, you can instead export your
 * handler for serverless use or whatever else fits your needs.
 */
export async function listen({ app, port, isReady }) {
  await isReady();
  return await app.listen(port, () => {
    if (process.env.PROD) {
      console.log('Server listening at port ' + port);
    }
  });
}

/**
 * Should close the server and free up any resources.
 * Will be used on development only when the server needs
 * to be rebooted.
 *
 * Should you need the result of the "listen()" call above,
 * you can use the "listenResult" param.
 *
 * Can be async.
 */
export function close({ listenResult }) {
  return listenResult.close();
}

const maxAge = process.env.DEV ? 0 : 1000 * 60 * 60 * 24 * 30;

/**
 * Should return middleware that serves the indicated path
 * with static content.
 */
export function serveStaticContent(path, opts) {
  return express.static(path, {
    maxAge,
    ...opts,
  });
}

const jsRE = /\.js$/;
const cssRE = /\.css$/;
const woffRE = /\.woff$/;
const woff2RE = /\.woff2$/;
const gifRE = /\.gif$/;
const jpgRE = /\.jpe?g$/;
const pngRE = /\.png$/;

/**
 * Should return a String with HTML output
 * (if any) for preloading indicated file
 */
export function renderPreloadTag(file) {
  if (jsRE.test(file) === true) {
    return `<link rel="modulepreload" href="${file}" crossorigin>`;
  }

  if (cssRE.test(file) === true) {
    return `<link rel="stylesheet" href="${file}">`;
  }

  if (woffRE.test(file) === true) {
    return `<link rel="preload" href="${file}" as="font" type="font/woff" crossorigin>`;
  }

  if (woff2RE.test(file) === true) {
    return `<link rel="preload" href="${file}" as="font" type="font/woff2" crossorigin>`;
  }

  if (gifRE.test(file) === true) {
    return `<link rel="preload" href="${file}" as="image" type="image/gif">`;
  }

  if (jpgRE.test(file) === true) {
    return `<link rel="preload" href="${file}" as="image" type="image/jpeg">`;
  }

  if (pngRE.test(file) === true) {
    return `<link rel="preload" href="${file}" as="image" type="image/png">`;
  }

  return '';
}
