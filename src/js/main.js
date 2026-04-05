import { renderUI } from "./render/renderUI.js";
import { addListeners } from "./events/addListeners.js";

function startApp() {
  addListeners();
  renderUI();
}
startApp();
