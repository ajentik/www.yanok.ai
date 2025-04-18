# Accessing Your Local Yanok.ai Server

## Option 1: Using Docker (as specified in README.md)
According to your project's README.md, the recommended way to run the local server is:

1. First, ensure Docker is running on your system
   - Check if Docker daemon is active (`docker ps` should not show the error we encountered)
   - Start Docker Desktop if you're using macOS or Windows

2. Run the Jekyll server via Docker:
   ```bash
   docker run --rm -p "4000:4000" -p "35729:35729" -v "$(pwd):/site" -v "$(pwd)/.bundle_cache:/usr/local/bundle/" -it www.yanok.ai
   ```

3. Access the site at: http://localhost:4000

## Option 2: Using Jekyll directly (if installed locally)
If you have Ruby and Jekyll installed directly on your machine:

1. Install dependencies (first time only):
   ```bash
   bundle install
   ```

2. Start Jekyll server:
   ```bash
   bundle exec jekyll serve --livereload
   ```

3. Access the site at: http://localhost:4000

## Option 3: Using a simple HTTP server
If you have a built `_site` directory but don't want to use Jekyll or Docker:

### Using Python (if installed):
```bash
# Navigate to the _site directory
cd _site

# Python 3
python -m http.server 4000

# Python 2
python -m SimpleHTTPServer 4000
```

Then access the site at: http://localhost:4000

### Using Node.js (if installed):
```bash
# Install serve globally (if not already installed)
npm install -g serve

# Navigate to the _site directory
cd _site

# Start the server
serve -p 4000
```

Then access the site at: http://localhost:4000

## Option 4: Using VS Code Live Server extension
If you have the Live Server extension installed in VS Code:

1. Open the `_site/index.html` file in VS Code
2. Click "Go Live" in the status bar or right-click and select "Open with Live Server"
3. The site will open in your default browser

## Troubleshooting
- If Docker gives a "daemon not running" error, start Docker Desktop or the Docker service
- If ports are in use, try a different port number (e.g., 3000, 8000, 8080)
- Jekyll errors may require installing missing gems with `bundle install`
