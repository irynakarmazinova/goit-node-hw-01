const { v4 } = require("uuid");

const listContacts = require("./listContacts");
const updateContacts = require("./updateContacts");

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

module.exports = addContact;
