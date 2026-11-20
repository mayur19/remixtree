import { createApp } from "./app.js";
const port = Number(process.env.PORT ?? 3104);
createApp().listen(port, () => process.stdout.write(`RemixTree listening on http://localhost:${port}\n`));

