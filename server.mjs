import http from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
const root = fileURLToPath(new URL('.', import.meta.url));
const types = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.json':'application/json; charset=utf-8'};
const server = http.createServer(async (req,res)=>{ const path = req.url === '/' ? '/index.html' : req.url.split('?')[0]; const file = join(root,path); try { const data=await readFile(file); res.writeHead(200,{'Content-Type':types[extname(file)]||'text/plain; charset=utf-8'}); res.end(data); } catch { res.writeHead(404); res.end('Not found'); }});
server.listen(process.env.PORT||3000,'0.0.0.0',()=>console.log(`Portfolio listening on ${process.env.PORT||3000}`));
