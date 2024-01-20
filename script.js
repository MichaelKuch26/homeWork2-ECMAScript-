// Задание 1: ""Управление библиотекой книг""
// Реализуйте класс Book, представляющий книгу, со следующими свойствами и методами:
// Свойство title (название) - строка, название книги.
// Свойство author (автор) - строка, имя автора книги.
// Свойство pages (количество страниц) - число, количество страниц в книге.
// Метод displayInfo() - выводит информацию о книге (название, автор и количество страниц).

class Book {
  constructor (title, author, pages) {
    this.title = title,
    this.author = author, 
    this.pages = pages
  }
  displayInfo() {
    console.log(`Произведение "${this.title}" автора ${this.author} содержит ${this.pages} страниц`);
  }
}
const book1 = new Book("Книга джунглей", "Редьярд Киплинг", 608);
const book2 = new Book("Остров сокровищ", "Р. Л. Стивенсон", 239)
book1.displayInfo();
book2.displayInfo();

// Задание 2: ""Управление списком студентов""
// Реализуйте класс Student, представляющий студента, со следующими свойствами и методами:

// Свойство name (имя) - строка, имя студента.
// Свойство age (возраст) - число, возраст студента.
// Свойство grade (класс) - строка, класс, в котором учится студент.
// Метод displayInfo() - выводит информацию о студенте (имя, возраст и класс).

// // Пример использования класса
// const student1 = new Student(""John Smith"", 16, ""10th grade"");
// 
// // Вывод:
// // Name: John Smith
// // Age: 16
// // Grade: 10th grade

// 
// student2.displayInfo();
// // Вывод:
// // Name: Jane Doe
// // Age: 17
// // Grade: 11th grade"

class Student {
  constructor (name, age, grade) {
    this.name = name,
    this.age = age,
    this.grade = grade
  }
  displayInfo() {
    console.log(`Name: ${this.name} \nAge: ${this.age}\nGrade: ${this.grade}`);
  }
}

const student1 = new Student("John Smith", 16, "10th grade");
const student2 = new Student("Jane Doe", 17, "11th grade");
student1.displayInfo();
student2.displayInfo();

// Создать класс "Телефонная книга" с методами для добавления, удаления и поиска контактов по имени или номеру телефона.

// // Пример использования
// let phonebook = new Phonebook();
// phonebook.addContact("Иванов", "123-45-67");
// phonebook.addContact("Петров", "987-65-43");
// console.log(phonebook.findContactByName("Иванов")); // { name: "Иванов", phone: "123-45-67" }
// console.log(phonebook.findContactByPhone("987-65-43")); // { name: "Петров", phone: "987-65-43" }
// phonebook.deleteContact("Иванов");
// console.log(phonebook.contacts); // [{ name: "Петров", phone: "987-65-43" }]

// class Phonebook {
//   contacts = [];
  
//   constructor (name, phone) {
//     this.name = name,
//     this.phone = phone
//   }
//   addContact(name, phone) {
//     let contact = {name, phone};
//     this.contacts.push(contact);
//   }
//   findContactByName(name) {
//     for (let i = 0; i < this.contacts.length; i++) {
//       if (this.contacts[i].name === name) {
//         return this.contacts[i];
//       }  
//     }
//   }
//   findContactByPhone(phone) {
//     for (let i = 0; i < this.contacts.length; i++) {
//       if (this.contacts[i].phone === phone) {
//         return this.contacts[i];
//       }  
//     }
//   }
//   deleteContact(name) {
//     for (let i = 0; i < this.contacts.length; i++) {
//       if (this.contacts[i].name === name) {
//         let filtered = this.contacts.filter(f => f.name !== name);
//         this.contacts = filtered;
//       }  
//     }
//   }
// }

class Phonebook {
  contacts = [];

  addContact(name, phone) {
      this.contacts.push({ name, phone });
  }

  findContactByName(searchName) {
      return this.contacts.find((contact) => contact.name === searchName);
  }

  findContactByPhone(searchPhone) {
      return this.contacts.find((contact) => contact.phone === searchPhone);
  }

  deleteContact(searchName) {
      this.contacts = this.contacts.filter((contact) => contact.name !== searchName);
  }
}

let phonebook = new Phonebook();
phonebook.addContact("Иванов", "123-45-67");
phonebook.addContact("Петров", "987-65-43");
phonebook.addContact("Котов", "987-65-43");
console.log(phonebook.contacts);
console.log(phonebook.findContactByName("Иванов"));
console.log(phonebook.findContactByName("Петров"));
console.log(phonebook.findContactByPhone("987-65-43"));
phonebook.deleteContact("Иванов");
console.log(phonebook.contacts);
phonebook.deleteContact("Петров");
console.log(phonebook.contacts);

