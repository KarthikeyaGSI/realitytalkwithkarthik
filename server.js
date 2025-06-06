const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/podcast', (req, res) => {
    const podcastData = JSON.parse(fs.readFileSync('podcast.json', 'utf8'));
    res.json(podcastData);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
