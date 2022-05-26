// ******* 1 ********* * /
// var manger = {
//     firatName: "natan",
//     lastName: "belay",
//     age: 25,
//     salary: 200
// }

//     ****** 2 ****** * /

// var worker = {
//     firstName: "dani",
//     email: "dani2@gmail.com",
//     YearOfBirth: "1997",
//     addres: "yarkon 65"
// }

//     ****** 3 - 6 ****** * /

// var fruit = {
//     name: "apple",
//     color: "grren",
//     type: "Tree fruit",
// }
// document.write(fruit.name)
// document.write(fruit.color)
// document.write(fruit.type)

//     ********* 7 - 8 ********** * /

// var claas = {
//     numberClaas: 3,
//     numberOfStudents: 33,
//     nameOfStudent: ["dani", "avi", "nati", "dalia", "yoni"]
// }
// for (var i = 0; i < claas.nameOfStudent.length; i++) {
//     document.write(claas.nameOfStudent[i] + "<br>")
// }

// ***** 9 - 11 ****** * /

// var Kindergarten = {
//     nameTeacther: "yona",
//     numberBoys: 10,
//     nameBoys: ["avi", "nati", "natan", "yoni", "shay", "beni", "lidor", "lior", "dan", "dani"]
// };
// for (var i = 0; i < Kindergarten["nameBoys"].length; i++) {
//     document.write(Kindergarten["nameBoys"][i] = "<br>");
// }
// var userKey = prompt("inter key");
// document.write(Kindergarten[userKey]

//     ********* 12 ******** * /

// var curs = {};
// curs.numberClaas = +prompt("inter number");
// curs.numberStudents = +prompt("inter number");
// curs.age = +prompt("inter age");
// console.log(curs);

// ******** 13 ******* * /

// var techer = {};
// for (var i = 0; i < 4; i++) {
//     var myVlaue = prompt("my value")
//     var myKey = prompt("my key");
//     techer[myKey] = myVlaue
//     console.log(techer)
// }

// ***** 14 ******* * /

// var manger = {};
// var firstnam = "first namme"
// var lastnam = "last name"
// var AGE = "age"
// var Money = "money"
// var firstName = prompt("first name");
// var lastName = prompt("last name");
// var age = +prompt("inter age");
// var money = +prompt("inter");
// manger[firstnam] = firstName
// manger[lastnam] = lastName
// manger[AGE] = age
// manger[Money] = money
// console.log(manger)

//     ***** 15 ***** * /

// var users = {};
// var fs = "FirsT Name";
// var ls = "Last Name";
// var EMAIL = "Email";
// var PASSWORD = "password";
// var firstName = prompt("first name");
// var lastNamae = prompt("last name");
// var email = prompt("inter email");
// var password = prompt("inter password");
// console.log(users)
// document.write("<div>" + users[ls] + " " + users[lastNamae] + " " + users[EMAIL] + "</div>")

//     ***** 16 ******* * /

// var carsArray = [];
// for (var i = 0; i < 4; i++) {
//     var car1 = {};
//     car1.brand = prompt("inter the brand");
//     car1.color = prompt("inter the color");
//     car1.model = prompt("inter the model");
//     car1.smk = prompt("inter the smk");
//     carsArray.push(car1)
//     document.write("<div>" + car1.color + " " + car1.brand + " " + car1.model + " " + car1.smk + "</div>")
// }
// console.log(carsArray)

//     ******* 17 ****** * /

// function trheecats() {
//     for (let i = 0; i < 3; i++) {
//         var cats = {};
//         cats.name = prompt("inter name");
//         cats.dayBirth = prompt("inter day brith");
//         cats.Weight = +prompt("inter Weight");
//         cats.type = prompt("inter type");
//         document.write("<h1>" + cats.name + " " + cats.dayBirth + " " + cats.Weight + " " + cats.type + "</h1>")
//     }
// } trheecats()
// console.log(cats)

//     ***** 18 ***** * /

// var users = +prompt("inter number")
// for (var i = 0; i < users; i++) {
//     function usersNumber(users) {
//         var dog = {};
//         dog.name = prompt("inter name");
//         dog.age = +prompt("inter age");
//         dog.type = prompt("inter type");
//         dog.nameBoss = prompt("inter name Boss")
//         document.write("<p>" + dog.name + " " + dog.age + " " + dog.type + " " + dog.nameBoss + "</p>")
//     } usersNumber(users)
// }

// ***** 19 ****** * /

// var usersnum = +prompt("inter number");
// for (var i = 0; i < usersnum; i++) {
//     function numberusers(usersnum) {
//         var insect = {};
//         insect.normalName = prompt("inter normal name");
//         insect.ScientificName = prompt("inter Scientific name");
//         insect.numberLegs = +prompt("inter number legs");
//         insect.wings = confirm("Does he have wings?");
//         if (insect.wings == true) {
//             document.write("<h3>" + insect.normalName + " " + insect.ScientificName + " " + insect.numberLegs + "</h3>")
//         }
//     } numberusers(usersnum)
// }


// ***** 20 ***** * /

// var numberUsers = +prompt("inter Number");
// for (var i = 0; i < numberUsers; i++) {
//     function kids(numberUsers) {
//         var boy = {};
//         boy.fullname = prompt("inter full name");
//         boy.age = +prompt("inter age boy");
//         boy.kindergarten = confirm("Is he in kindergarten");
//         if (boy.age > 4) {
//             document.write("<p>" + boy.fullname + " " + boy.age + "</p>")
//         }
//     } kids(numberUsers)
// }

// ******* 21 ****** * /

// var computers = +prompt("inter number ");
// for (var i = 0; i < computers; i++) {
//     function comp(computers) {
//         var computer = {};
//         computer.Society = prompt("inter Society name");
//         computer.model = prompt("inter model");
//         computer.Weight = +prompt("inter Weight");
//         computer.stock = confirm("Is in stock");
//         if (computer.stock == true) {
//             if (computer.Weight > 2) {
//                 document.write("<p>" + computer.Society + " " + computer.model + " " + computer.Weight + "</p>")
//             }
//         }
//     } comp(computers)
// }


// ******* 22 ******** * /

// var number = +prompt("inter number");
// for (var i = 0; i < number; i++) {
//     function techerNumber(number) {
//         var techer = {};
//         techer.fullName = prompt("inter full name");
//         techer.email = prompt("inter email");
//         techer.Ybirthy = prompt("inter yearBirthy");
//         techer.salary = +prompt("inter wages hour");
//         if (techer.salary > 100 || techer.Ybirthy < 1990) {
//             document.write("<span>" + techer.fullName + " " + techer.email + " " + techer.salary + " " + techer.Ybirthy + "</span>");
//         }
//     } techerNumber(number)
// }
// ******* 23 ******* * /

// var piecenum = +prompt("inter number");
// function Piece(piecenum) {
//     for (var i = 0; i < piecenum; i++) {
//         var piece = {};
//         piece.name = prompt("inter piece name");
//         piece.brand = prompt("inter brand");
//         piece.arrayStors = ["haifa", "ashdod", "rehovot", "lod" + "ramla"];
//         piece.price = +prompt("inter price");
//         document.write("<h1>" + piece.name + "<h1>" + "<h3>" + piece.arrayStors + "</h3>" + "<br>");
//     }
// } Piece(piecenum)

//     ****** 24 ******* * /
// var hoseNumber = +prompt("inter number");
// function Hose(hoseNumber) {
//     for (var i = 0; i < hoseNumber; i++) {
//         var home = {};
//         home.address = prompt("inter address");
//         home.rentalPrice = +prompt("inter rental price");
//         home.buyingPrice = +prompt("inter buying price");
//         home.interested = ["avi", "dani", "nati", "dana", "lea"];
//         home.mediation = confirm("Is there mediation");
//         if (!home.mediation) {
//             document.write("<P>" + home.address + "<br>" + home.interested)
//         }
//     }
// } Hose(hoseNumber)

//     ******** 25 ******** * /

// var cantryNum = +prompt("inter bumber");
// function Cantry(cantryNum) {
//     for (var i = 0; i < cantryNum; i++) {
//         var cantry = {};
//         cantry.name = prompt("inter cantry name");
//         cantry.numberResidents = +prompt("inter number");
//         cantry.arrayCity = ["lod", "bat-yam", "haifa", "ashdod", "rehovot"];
//         cantry.chabad = confirm("Is there a Chabad house");
//         if (cantry.chabad == true) {
//             document.write("<p>" + cantry.name + "</p>" + "<br>" + cantry.arrayCity);
//         }
//     }
// } Cantry(cantryNum)

//     ******** 26 ****** * /
// var movienum = +prompt("inter number");
// for (var i = 0; i < movienum; i++) {
//     function Movie(movienum) {
//         var movie = {};
//         movie.name = prompt("inter movie name");
//         movie.numberViews = +prompt("inter number views");
//         movie.year = +prompt("inter year");
//         movie.pic =
// } Movie(movienum)
// }

