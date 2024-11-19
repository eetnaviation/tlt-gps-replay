const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use('/gps', express.static(path.join(__dirname, 'gps')));  // Serve static files from the gps directory

app.get('/gps-files', (req, res) => {
  const gpsDir = path.join(__dirname, 'gps');
  fs.readdir(gpsDir, (err, files) => {
    if (err) return res.status(500).send(err.message);
    const gpsFiles = files
      .filter(file => file.startsWith('gps-') && file.endsWith('.txt'))
      .map(file => ({
        name: file,
        timestamp: file.split('-').slice(1, 4).join('-') + ' ' + file.split('-')[4].replace('.txt', '')
      }));
    res.json(gpsFiles);
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
