// const { getCurrentDate } = require("./dateUtils");

// console.log(getCurrentDate());
// ------------------------------------
// const path = require("path"); //аналог импорта по ум

// const a = path.resolve("./a"); //aбсолютный путь
// const b = "./a"; //относительный путь

// console.log(a, b);
// ------------------------------------
// const fs = require("fs");

// fs.readFile(path.resolve("./data.txt"), "utf8", (error, data) => {
//   if (error) {
//     console.error(error);
//   }
//   console.log(data);
// });
// ------------------------------------
// DZ
// const argv = require("yargs").argv;

const { Command } = require("commander");

const {
  listContacts,
  getContactById,
  addContact,
  updateContactById,
  removeContactById,
} = require("./contacts"); //dir
// } = require("./contacts.js"); //file

const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);
const argv = program.opts();

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const contacts = await listContacts();
      console.table(contacts);
      break;

    case "get":
      const contact = await getContactById(id);
      console.table(contact);
      break;

    case "add":
      const newContact = await addContact({
        name,
        email,
        phone,
      });
      console.table(newContact);
      break;

    case "update":
      const updateContact = await updateContactById({
        id,
        name,
        email,
        phone,
      });
      console.table(updateContact);
      break;

    case "remove":
      const removeContact = await removeContactById(id);
      console.table(removeContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

invokeAction(argv);
// ------------------------------------
// utf8 - нужно указывать кодировку, иначе будет возвращен Buffer

// получить по абсолют пути содержимое файла
// ------------------------------------
// http - двухсторонний протокол
// ------------------------------------
// status-line
// 1-continue
// 2-success/OK
// 3-redirect-перенаправить
// 4-ошибка клиента
// 5-ошибка сервера
// ------------------------------------
// попапчик-нотификашка оповещение
// обработчик запроса-middlewares, а направляю routing`ом
// ------------------------------------
// request - читаем-запрос клиента, response-записываем-ответ клиенту
// buffer - двоичное представление файла
// ------------------------------------
// \n - символ перехода на новую строку
// ------------------------------------
// асинхрон операция, можно еще использовать промисы/asyncawait

// асинк всегда возвращает промис. что бы получить этот промис нужно использ эвэйт. эвэйт поставленный перед промисом сохраняет в переменной не промис, а результат его выполнения.
