export const dom = {
	appRoot: document.querySelector(`[data-component="root"]`) || "",
	editButton: document.querySelector(`[data-action="toggle-edit"]`) || "",
	menuElement: document.querySelector(`[data-component="menu-items"]`) || "",
	categoryListElement:
		document.querySelector(`[data-component="category-list"]`) || "",
	categoryNavElement: document.querySelector(".category-nav") || "",
	itemTemplate: document.getElementById("item-card-template") || "",
	categoryTemplate: document.getElementById("category-card-template") || "",
	categoryModalTemplate: document.getElementById("category-modal-template"),
	itemModalTemplate: document.getElementById("item-modal-template"),
};
