import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the public directory
app.use(express.static(join(__dirname, '../../public')));

// Serve compiled frontend modules
app.use('/dist', express.static(join(__dirname, '../../dist')));

// API routes will go here in future tasks
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Serve the main app for all other routes
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, '../../public/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});