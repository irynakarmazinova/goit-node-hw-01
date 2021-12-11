const { v4 } = require("uuid");

// const fs = require("fs/promises");
const fs = require("fs").promises;
const path = require("path");

const contactsPath = path.join(__dirname, "db", "contacts.json");

const listContacts = async () => {
  try {
    const data = await fs.readFile(contactsPath);
    const contacts = JSON.parse(data);
    return contacts;
  } catch (error) {
    console.error(error);
  }
};

const getContactById = async (contactId) => {
  try {
    const contacts = await listContacts();
    const result = contacts.find(({ id }) => id === contactId);

    if (!result) {
      return null;
    }

    return result;
  } catch (error) {
    console.error(error);
  }
};

const updateContacts = async (contacts) => {
  try {
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  } catch (error) {
    console.error(error);
  }
};

const addContact = async (data) => {
  try {
    const newContact = { id: v4(), ...data };
    const contacts = await listContacts();

    contacts.push(newContact);

    await updateContacts(contacts);
    //   fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));

    return newContact;
  } catch (error) {
    console.error(error);
  }
};

const updateContactById = async ({ contactId, name, email, phone }) => {
  try {
    const contacts = await listContacts();
    const idx = contacts.findIndex(({ id }) => id === contactId);

    if (idx === -1) {
      return null;
    }

    contacts[idx] = { id, name, email, phone };
    await updateContacts(contacts);
    return contacts[idx];
  } catch (error) {
    console.error(error);
  }
};

const removeContactById = async (contactId) => {
  try {
    const contacts = await listContacts();
    //   const updateContacts = contacts.filter(({ id }) => id !== contactId);
    const idx = contacts.findIndex(({ id }) => id === contactId);

    if (idx === -1) {
      return null;
    }

    const newContacts = contacts.filter((_, index) => index !== idx);
    await updateContacts(newContacts);
    return contacts[idx];

    // const removeContact = contacts.splice(idx, 1);
    // await updateContacts(contacts);
    // return removeContact;
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  listContacts,
  getContactById,
  addContact,
  updateContactById,
  removeContactById,
};
