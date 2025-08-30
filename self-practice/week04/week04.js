/*ไม่มีฟังก์ชัน (Inline)*/

// 1. map()
// เขียนฟังก์ชัน doubleNumbers(numbers)
// รับ array ของตัวเลข แล้วคืนค่า array ที่แต่ละตัวถูกคูณ 2

function doubleNumbers(numbers) {
    return numbers.map(num => num * 2)
}

// console.log(doubleNumbers([1,2,3,4,5,6])) //[ 2, 4, 6, 8, 10, 12 ]

//--------------------

// 2. filter()
// เขียนฟังก์ชัน getEvenNumbers(numbers)
// รับ array ของตัวเลข แล้วคืนค่าเฉพาะตัวเลขที่เป็นจำนวนคู่

function getEvenNumbers(numbers) {
    return numbers.filter(num => num % 2 == 0)
}

// console.log(getEvenNumbers([1,2,3,4,5,6])) //[ 2, 4, 6 ]

//--------------------

// 3. reduce()
// เขียนฟังก์ชัน multiplyAll(numbers)
// รับ array ของตัวเลข แล้วหาผลคูณของทุกตัว

function multiplyAll(numbers) {
    return numbers.reduce((acc, cur) => acc * cur);
}

// console.log(multiplyAll([1,2,3,4]))
// console.log(multiplyAll([1,3,5]))

//--------------------

// 4. find()
// เขียนฟังก์ชัน findProductByName(products, name)
// รับ array ของ object { name, price } 
// คืนค่า product ที่มีชื่อเท่ากับ name (ถ้ามี)

function findProductByName(products, name) {
    return products.find(product => product.name === name)
}

const product = [
    { name: "Shirt", price: 500 },
    { name: "Shoes", price: 1200 },
    { name: "Hat", price: 300 },
    { name: "Bag", price: 800 }
  ];

// console.log(findProductByName(product, "Shoes")); //{ name: 'Shoes', price: 1200 }

//--------------------

// 5. some()
// เขียนฟังก์ชัน hasTeenager(ages)
// รับ array ของอายุ แล้วตรวจสอบว่ามีใครอายุอยู่ระหว่าง 13-19 หรือไม่

function hasTeenager(ages) {
    return ages.some(ages => ages >= 13 && ages <= 19)
}

const ages1 = [10, 12, 22, 30];   // ไม่มีวัยรุ่น → ผลลัพธ์ควรเป็น false
const ages2 = [8, 15, 25, 40];    // มีอายุ 15 อยู่ในช่วงวัยรุ่น → ผลลัพธ์ควรเป็น true

// console.log(hasTeenager([10, 12, 22, 30])) //false
// console.log(hasTeenager([8, 15, 25, 40])) //true

//--------------------

// 6. every()
// เขียนฟังก์ชัน allPositive(numbers)
// รับ array ของตัวเลข แล้วตรวจสอบว่าทุกตัวเป็นบวกหรือไม่

function allPositive(numbers) {
    return numbers.every(numbers => numbers >= 0)
}

const numbers1 = [5, 12, 8, 130, 44, 0];   // ทุกตัวเป็นบวก → ผลลัพธ์ควรเป็น true
const numbers2 = [5, -3, 10, 20];       // มี -3 เป็นค่าลบ → ผลลัพธ์ควรเป็น false

// console.log(allPositive([5, 12, 8, 130, 44, 0]))
// console.log(allPositive([5, -3, 10, 20]))

//--------------------

// 7. sort()
// เขียนฟังก์ชัน sortNames(names)
// รับ array ของชื่อ แล้วคืนค่าเป็น array ที่เรียงตามลำดับตัวอักษร (A → Z)

function sortNames(names) {
    return names.sort()
}

const names1 = ["Win", "Aek", "Henry", "Timmy", "John"];
const names2 = ["Mango", "Apple", "Banana"];

// console.log(sortNames(["Win", "Aek", "Henry", "Timmy", "John"]))
// console.log(sortNames(["Mango", "Apple", "Banana"]))

//--------------------

// 8. forEach()
// เขียนฟังก์ชัน logItems(items)
// รับ array ของข้อความ แล้วพิมพ์แต่ละข้อความออกมาทีละบรรทัด

function logItems(items) {
    return items.forEach((item) => {
        console.log(`${item}`)
    })
}

// console.log(logItems(["apple", "banana", "cherry"]))

//--------------------

// 9. includes()
// เขียนฟังก์ชัน containsWord(words, word)
// รับ array ของคำ แล้วตรวจสอบว่ามี word อยู่ใน array หรือไม่

function containsWord(words, word) {
    return words.includes(word)
}

const words = ["dog", "cat", "bird", "fish"];

// console.log(containsWord(words, "dog")) //true
// console.log(containsWord(words, "banana")) //false

//--------------------

// 10. filter() + reduce()
// เขียนฟังก์ชัน totalHighScores(scores)
// รับ array ของตัวเลข (คะแนน) 
// ใช้ filter เลือกเฉพาะคะแนนที่ >= 80
// จากนั้นใช้ reduce หาผลรวมคะแนนที่เลือกมา

function totalHighScores(scores) {
    return scores.filter(score => score >= 80)
    .reduce((acc, cur) => acc + cur, 0)
}

const scores1 = [45, 82, 90, 67, 100, 76];
const scores2 = [50, 60, 70];

// console.log(totalHighScores([45, 82, 90, 67, 100, 76]))
// console.log(totalHighScores([50, 60, 70]))

//----------------------------------------------------------------------------------------------------

/*มีฟังก์ชัน (Reusable)*/

// 1. map()
// ให้มี array ของราคาสินค้า
// โจทย์: ใช้ map() เพื่อแปลงราคาทั้งหมดให้เป็นราคาหลังบวก VAT 7%

const prices = [100, 200, 300, 400];
const pricesWithVat = prices.map(price => price *1.07)
// console.log(pricesWithVat)

//--------------------

// 2. filter()
// โจทย์: ใช้ filter() เพื่อหาตัวเลขที่มากกว่า 10

const numbersFil = [5, 12, 8, 130, 44];
const numFil = numbersFil.filter(num => num > 10)
// console.log(numFil)

// //--------------------

// 3. reduce()
// โจทย์: ใช้ reduce() เพื่อหาผลรวมของทุกตัวเลขใน array

const nums = [1, 2, 3, 4, 5];
const numRed = nums.reduce((acc, cur) => acc + cur)
// console.log(numRed)

// //--------------------

// 4. find()
// โจทย์: ใช้ find() เพื่อหาว่า object ไหนมี name เท่ากับ "Win"

const users = [
  { id: 1, name: "Aom" },
  { id: 2, name: "Win" },
  { id: 3, name: "Euro" }
];
const userFind = users.find((user) => user.name == 'Win')
// console.log(userFind)

// //--------------------

// 5. some()
// โจทย์: ใช้ some() เพื่อตรวจสอบว่าใน array มีคนที่อายุต่ำกว่า 18 ปีหรือไม่

const ages = [18, 20, 15, 30];
const someAge = ages.some(age => age < 18)
// console.log(someAge)

// //--------------------

// 6. every()
// โจทย์: ใช้ every() เพื่อตรวจสอบว่าคะแนนทุกตัวมากกว่าหรือเท่ากับ 50 หรือไม่

const scores = [80, 90, 70, 60];
const eveSco = scores.every(score => score >= 50)
// console.log(eveSco)

// //--------------------

// 7. sort()
// โจทย์: ใช้ sort() เพื่อเรียงจากน้อยไปมาก

const numbers = [40, 100, 1, 5, 25, 10];
const sortNum = numbers.sort((a, b) => a-b)
// console.log(numbers)

// //--------------------

// 8. forEach()
// โจทย์: ใช้ forEach() เพื่อพิมพ์ผลไม้แต่ละชนิดออกมา

const fruits = ["apple", "banana", "cherry"];
fruits.forEach((fruit) => {
    // console.log(`${fruit}`)
})

// //--------------------

// 9. includes()
// โจทย์: ใช้ includes() เพื่อตรวจสอบว่า array นี้มี "green" อยู่หรือไม่

const colors = ["red", "green", "blue"];
// console.log(colors.includes('green'))

// //--------------------

// 10. filter() + reduce()
// โจทย์: ใช้ filter() เพื่อหาสินค้าที่มีราคาเกิน 1000 และใช้ reduce() หาผลรวมราคารวมของสินค้าที่ผ่านเงื่อนไข

const products = [
  { name: "Shirt", price: 500 },
  { name: "Pants", price: 1200 },
  { name: "Shoes", price: 2000 },
  { name: "Hat", price: 300 }
];

const prodFil = products.filter(prod => prod.price > 1000)
const prodAll = prodFil.reduce((acc, cur) => acc + cur.price, 0)
// console.log(prodAll)