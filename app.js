# Smart Expiry Date Tracker (PWA)

This project has been heavily modularized into a full Progressive Web App (PWA) and optimized for GitHub Pages. Since all data is stored via standard Browser `LocalStorage`, updating the application to this format will seamlessly preserve all your previously stored products and processed items.

## Setup & Deployment to GitHub Pages

1. **Upload Files:** Upload `index.html`, `style.css`, `app.js`, `manifest.json`, and `service-worker.js` directly to the root of your `Smart-Expiry-Date-Tracker` repository.
2. **Create Icons:** For a PWA to be installable on Desktop and Android, real `192x192` and `512x512` images are required inside an `icons/` folder.
   
   **Quick Bootstrap:** (If you have access to a Unix/MacOS terminal, you can generate 100% compliant transparent placeholder images immediately using the commands below). 
   ```bash
   mkdir -p icons
   echo "iVBORw0KGgoAAAANSUhEUgAAAMAAAADAAQMAAAA8O1TfAAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAACNJREFUeNrtwTEBAAAAwiD7p7bED8gAAAAAAAAAAAAAAAAAdB2DAAFkO/VfAAAAAElFTkSuQmCC" | base64 -d > icons/icon-192.png
   echo "iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAMAAADDpiTIAAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAAH5JREFUeNrtwQENAAAAwiD7p7bHBwwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAODdAAEAAQCA/E8bDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAuB5WJwAB287ZqAAAAABJRU5ErkJggg==" | base64 -d > icons/icon-512.png