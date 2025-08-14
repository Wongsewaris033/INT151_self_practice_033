//ใช้ฟังก์ชัน shallowEquality (เวอร์ชันพื้นฐานใช้ ===) แล้วทายผลลัพธ์เป็น true/false

// 1.1
const x1 = { a: 1, b: 2 }
const x2 = { b: 2, a: 1 }

// 1.2
const y1 = { a: 1, b: 2 }
const y2 = { a: 1, b: "2" }

// 1.3
const z1 = { a: NaN }
const z2 = { a: NaN }

// 1.4
const n1 = { a: { v: 10 } }
const n2 = { a: { v: 10 } }

//--------------------

//ปรับปรุงให้รองรับ NaN
//โจทย์
//แก้ฟังก์ชันให้ถือว่า NaN เท่ากับ NaN โดยใช้ Object.is แทน ===

function shallowEquality(a, b) {
    const k1 = Object.keys(a)
    const k2 = Object.keys(b)
  
    if (k1.length !== k2.length) {
      return false
    }
  
    for (let key of k1) {
      if (a[key] !== b[key]) {
        return false
      }
    }
    return true
}

//--------------------

//อธิบายเหตุผล (ออบเจ็กต์ซ้อน)
//โจทย์

const a = { author: { name: "John" } }
const b = { author: { name: "John" } }