// // โจทย์ Practice ข้อแรก week05 ในห้อง
// function getPassingNames(students) {
//     return students.filter(student => student.score >= 70)
//     .map(student => student.name.toUpperCase())
// }

// const studentScores = [
//   {name: 'Alice', score:85},
//   {name: 'Bob', score:92},
//   {name: 'Charlie', score:68},
//   {name: 'David', score:55},
//   {name: 'Eve', score:78}
// ];

// const passingNames = getPassingNames(studentScores);
// console.log(passingNames)

//--------------------

// console.log('mangoteen'.includes('go')) //true
// console.log(['mangoteen','mango'].includes('go')) //false
// console.log(['mangoteen','mango'].includes('Mango')) //false
// console.log(['mangoteen','mango'].includes('mango')) //true

/*includes สนใจ case ของสิ่งที่อยู่ใน array*/

//--------------------

// const nums = [100, 1, 2000, 55, 22]
// console.log(nums.sort())
// /*ถ้าไม่ใส่ callback function จะทำการเปรียบเทียบค่าแบบ string*/
// /*เปรียบเทียบแบบ string '100' < '2' == 1 มาก่อน 2*/

// const array = [100, 1, 2000, 55, 22]
// array.sort((a,b) => b-a)
// console.log(array)
// /*ใส่ callback function == b-a ถ้า result ค่าเป็นบวก a ก็ควรจะไปอยู่ด้านหลัง b === descending*/

// const arrays = [100, 1, 2000, 55, 22]
// arrays.sort((a,b) => a-b)
// console.log(arrays)
// /*ต่างจากด้านบนกลายเป็น ascending*/

//--------------------

// const students = [
//   {id : 66500102, name: 'Suda', gpa: 2.5},
//   {id : 66500555, name: 'ada', gpa: 2.8},
//   {id : 66500589, name: 'pornchai', gpa: 3.25},
//   {id : 66500104, name: 'Pornsak', gpa: 3.8},
// ]

// function stu(studentList) {
//   return studentList.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase())
//   )
// }

// console.log(stu(students));
// /*localeCompare เปรียบเทียบตามภาษาท้องถิ่นจาดโจทย์ก็ตะเปรียบเทียบตามeng รียนตีวอักษรตามeng เลย*/

//--------------------

// export { echo, getLength as default, GPAAverage, Book as BookManagement}
// /*as default ตั้งให้ function getLength เป็นdefault ถึงแม้ไฟล์ที่ importจะตั้งชื่อฟังก์ชันเป็นอะไรก็ตาม*/
// /*Book as BookManagement import file จะต้องใช้ชื่อ BookManagement เท่านั้นถ้าต้องการอ้างอิง func book ใน export file*/