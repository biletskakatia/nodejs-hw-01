import { PATH_DB } from '../constants/contacts.js';
import * as fs from "node:fs/promises";
import createFakeContact from "../utils/createFakeContact.js";

const generateContacts = async (number) => {
    const contactList = JSON.parse(await fs.readFile(PATH_DB, "utf-8"));
    const newContactList = Array(number).fill(0).map(createFakeContact);
    contactList.push(...newContactList);
    await fs.writeFile(PATH_DB, JSON.stringify(contactList, null, 2));
};

generateContacts(5);
