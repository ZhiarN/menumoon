import "./styles/reset.css";
import "./styles/style.css";
import { addListeners } from "./events/addListeners.js";
import { renderUI } from "./render/renderUI.js";
import { validateDOM } from "./utils/domValidate.js";

function startApp() {
  validateDOM();
  renderUI();
  addListeners();
}
startApp();
