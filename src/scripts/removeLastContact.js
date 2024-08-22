import { PATH_DB } from '../constants/contacts.js';
import getAllContacts from './getAllContacts.js';
import * as fs from "node:fs/promises";

export const removeLastContact = async () => {
    const contactList = await getAllContacts();
    contactList.pop();
    await fs.writeFile(PATH_DB, JSON.stringify(contactList, null, 2));
};

removeLastContact();
