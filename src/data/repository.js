import { localStorageAdapter } from "./localStorageAdapter";

export const repository = {
    loadMenu(STORAGE_KEY) {
        const menu = localStorageAdapter.read(STORAGE_KEY);
        if (!menu) () => console.error("Couldn't load menu from database. Check if it exists.")
        return menu
    },
    saveMenu(STORAGE_KEY, menu) {
        localStorageAdapter.write(STORAGE_KEY, menu)
    }
    
}