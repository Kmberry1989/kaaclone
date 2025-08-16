// Minimal image fetcher (uses Node 18+ global fetch).
// Edit image-sources.json with real URLs, then run:  npm run fetch:images
// Files will be saved into public/images/<name>.ext and HTML can be updated accordingly.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')
const outDir = path.join(root, 'public', 'images')

const cfg = JSON.parse(fs.readFileSync(path.join(__dirname, 'image-sources.json'), 'utf-8'))
fs.mkdirSync(outDir, { recursive: true })

for (const { name, url, ext='.jpg' } of cfg) {
  if (!name || !url) continue
  const res = await fetch(url)
  if (!res.ok) {
    console.error('Failed:', name, res.status, url)
    continue
  }
  const buf = Buffer.from(await res.arrayBuffer())
  const out = path.join(outDir, `${name}${ext}`)
  fs.writeFileSync(out, buf)
  console.log('Saved', out)
}
console.log('Done. Now update your HTML to reference the new files if needed.')
