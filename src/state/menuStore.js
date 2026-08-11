import { repository } from "../data/repository";
import { STORAGE_KEY } from "../data/storageKey";
export const menuStore = repository.loadMenu(STORAGE_KEY);
