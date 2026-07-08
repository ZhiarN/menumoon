import { dom } from "../utils/dom.js";

export function validateDOM() {
	for (const [key, el] of Object.entries(dom)) {
		if (!el) {
			console.error(`Missing DOM element: dom.${key}`);
		}
	}
}
