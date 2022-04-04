import * as ReactDOMClient from "react-dom/client";
import App from "./App";

const container = document.getElementById("root") as HTMLElement;
// Create a root.
const root = ReactDOMClient.createRoot(container);

root.render(<App />);
