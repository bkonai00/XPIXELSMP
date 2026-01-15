# Server Offline Page

This is a tiny static site to show a "server offline / donation" message.

Files:
- `index.html` — main page (static).
- `style.css` — styles for the page.

How to deploy
1. GitHub Pages (easy):
   - Add these files to a branch (for example `gh-pages`) or to `main` under `docs/`.
   - In the repository Settings → Pages, set the source to the `gh-pages` branch (or `main` / `docs`).
   - The site will be published at `https://<username>.github.io/<repo>/` (or a custom domain if configured).

   Example (publish to gh-pages branch):
   ```
   git checkout --orphan gh-pages
   git reset --hard
   cp /path/to/index.html /path/to/style.css .
   git add index.html style.css
   git commit -m "Add offline landing page"
   git push -u origin gh-pages
   ```

2. Netlify / Vercel:
   - Drag and drop the folder containing `index.html` and `style.css` to Netlify, or connect the repo and set the publish directory to the repository root.
   - Both services provide a free tier and are straightforward to set up.

Customize
- Replace the `href` for the Donate button in `index.html` with your real donation link (PayPal, Ko-fi, Patreon, etc).
- Edit the text if you want a different message or additional contact links.

Please remove any other files and ensure the default branch contains only these files.