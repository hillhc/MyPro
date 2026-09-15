# Created with React
- Simple basic structure.
- My first taste of web development.
- Website hosted on hillchoy.com via CloudFlare service.

## Local preview in VS Code

1. Open this project folder in VS Code. Node.js and npm must be installed; run `npm.cmd ci` in the terminal if dependencies are missing (use `npm ci` on macOS/Linux).
2. Open **Run and Debug** (`Ctrl+Shift+D`), select **Website: Preview inside VS Code**, then press **F5**.
3. The task compiles the app and opens `http://127.0.0.1:3000` in VS Code's integrated browser beside your code. Save edits to refresh the page automatically.

If a server is already running on port 3000, choose **Website: Preview existing server** instead. To stop the development server, use **Tasks: Terminate Task** from the Command Palette and select **Website: Start local server**. Stopping the browser debugger alone leaves the server running for your next preview.

Press **Ctrl+Shift+B** to create the production build in `build/`. This compiles the deployment files; use the development preview above to view the site while editing.

For a manual preview, run **Tasks: Run Task > Website: Start local server**, then **Browser: Open Integrated Browser** and enter `http://127.0.0.1:3000`. On older VS Code versions without the integrated browser, use **Simple Browser: Show** with the same URL, or update VS Code.

Resize the browser editor pane to check narrow layouts. See the [VS Code integrated browser documentation](https://code.visualstudio.com/docs/debugtest/integrated-browser) for browser and debugging controls.
