import { renderUI } from "./render/renderUI.js";
import { addListeners } from "./events/addListeners.js";
import { validateDOM } from "./utils/domValidate.js";
validateDOM();
function startApp() {
  addListeners();
  renderUI();
}
startApp();
