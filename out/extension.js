"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
const vscode = require("vscode");
function activate(context) {
    context.subscriptions.push(vscode.commands.registerCommand('catCoding.start', () => {
        const panel = vscode.window.createWebviewPanel('catCoding', 'Cat Coding', vscode.ViewColumn.One, {
            // Enable scripts in the webview
            enableScripts: true
        });
        panel.webview.html = getWebviewContent();
    }));
}
exports.activate = activate;
function getWebviewContent() {
    return `
	<!DOCTYPE html>
	<html lang="en">
	<head>
			<meta charset="UTF-8">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<title>Cat Coding</title>
	</head>
	<body>
			<img id="catto" src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif" width="300" />
			<h1 id="lines-of-code-counter">0</h1>

			<script>
					const counter = document.getElementById('lines-of-code-counter');

					let count = 0;
					var cattoInterval = setInterval(() => {
						counter.textContent = count++;
						if (count == 100) {
							clearInterval(cattoInterval);
							document.getElementById('catto').src = "https://media1.tenor.com/images/944b4dda3cc83af427dabfa49a635af3/tenor.gif?itemid=5551196";
							counter.textContent = "Catto coded too much! Catto is sleepy ;-;";
						}
  				}, 100);
			</script>
	</body>
	</html>`;
}
//# sourceMappingURL=extension.js.map