const WebSocket = require('ws');
const http = require('http');
const path = require('path');
const fs = require('fs');
const { exec } = require('child_process');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('Erreur lors du chargement de index.html');
        return;
      }
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    });
  } else {
    res.writeHead(404);
    res.end();
  }
});

const wss = new WebSocket.Server({ server });

// Gérer les connexions WebSocket
wss.on('connection', ws => {
  console.log('Client connecté');
  ws.send('Serveur WebSocket connecté');

  ws.on('message', message => {
    console.log(`Message reçu : ${message}`);
  });

  const sourceFiles = [
    path.join(__dirname, 'dist/main.js'),
    path.join(__dirname, 'index.html'),
  ];

  sourceFiles.forEach(file => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        ws.send(`ERREUR : Impossible de lire le fichier ${file}`);
        return;
      }
      ws.send(`CONTENU DU FICHIER ${path.basename(file)} :\n${data}`);
    });
  });

  const child = exec('node dist/main.js');

  child.stdout.on('data', data => {
    ws.send(`SORTIE : ${data.toString()}`);
  });

  child.stderr.on('data', data => {
    ws.send(`ERREUR : ${data.toString()}`);
  });

  child.on('close', code => {
    ws.send(`Le processus s'est terminé avec le code ${code}`);
  });
});

server.listen(3000, 'localhost', () => {
  console.log('Serveur à l’écoute sur http://localhost:3000');
});
