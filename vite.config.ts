import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'lead-capture-api',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url === '/api/leads' && req.method === 'POST') {
            let body = '';
            req.on('data', chunk => {
              body += chunk.toString();
            });
            req.on('end', () => {
              try {
                const lead = JSON.parse(body);
                lead.timestamp = new Date().toISOString();
                
                const leadsFile = path.resolve(process.cwd(), 'leads.json');
                let leads = [];
                if (fs.existsSync(leadsFile)) {
                  leads = JSON.parse(fs.readFileSync(leadsFile, 'utf-8'));
                }
                leads.push(lead);
                fs.writeFileSync(leadsFile, JSON.stringify(leads, null, 2));

                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ success: true }));
              } catch (e) {
                res.statusCode = 500;
                res.end(JSON.stringify({ success: false, error: 'Failed to parse JSON' }));
              }
            });
          } else {
            next();
          }
        });
      }
    }
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
