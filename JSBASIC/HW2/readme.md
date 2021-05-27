CodeCamp#8
อรรถวุฒิ สุขสรรควณิช

// Lab 1
// ให้ประกาศตัวแปรชื่อ human และ name
// ใส่ชื่อตัวเองลงในตัวแปร name
// นำค่าที่อยู่ในตัวแปร name ไปใส่ให้ human 
// เมื่อ console.log(human) ออกมาต้องเป็นชื่อตัวเอง

// Lab 2
// ตั้งชื่อตัวแปรที่ใช้เก็บจำนวนเงินในกระเป๋าตังของคุณ
// ตั้งชื่อตัวแปรที่ใช้เก็บชื่อของ พ่อและแม่ของคุณ
// ตั้งชื่อตัวแปรที่ใช้เก็บที่อยู่ของบ้านคุณ
// ตั้งชื่อตัวแปรที่ใช้เก็บอายุของจักรวาล

ex1
ผลลัพธ์ทั้ง console.log ทั้งสามคืออะไร

ex2
ให้ระบุค่าของ a, b, c และ d หลังจากจบ statements ทั้งสามบรรทัด

ex3
จงหาค่าของการเปรียบเทียบต่อไปนี้
5 > 4
“apple” > “pineapple”
“2” > “12”
undefined == null
undefined === null
“bee” < “be”
“bee” > “Bee”
“Bee” < “be”

ex4
Browser จะโชว์ข้อความ “Hello Codecamp #5” ไหม

ex5
// 1. จงคำนวณค่าด้านล่างต่อไปนี้ และ คอมเม้นตอบหลังคำถาม
5 + "34"            // ตอบตรงนี้
5 ** 4              // ตอบตรงนี้
5 - "4"             // ตอบตรงนี้
10 % 5
5 % 10;
(2 ** 5) % 2
"Java" + "Script"
" " + " "
" " + 0
20 + 4 + "15"
true + true
true + false
false + true
false - true
false - true + false - true + false;
(true + true) ** 4
19 + true + "20"
3 - 4
"Bob" - "bill"
"Code" + "Camp" + true + false + null + undefined

// 2. จงคำนวณค่าเปรียบเทียบต่อไปนี้ และ คอมเม้นตอบด้านหลังเหมือนข้างบน
5 >= 1
0 === 1
4 <= 1
1 != 1
1 == "1"
1 === "1"
"2" == "2"
"2" === "2"
"12" !== 12
"15" != 15
"A" > "B"
"B" < "C"
"a" > "A"
"b" < "A"
"bee" > "bbe"
"BeE" < "Bee"
"SonTer" > "Soncom"
"circle" > "circles"
"NaRuTo" < "nArUtO"
true === false
true != true

// 3. สร้าง String ที่มีค่า "Hello, It's me. "Mario"."

ex6
คำสั่งต่อไปนี้จะแสดงค่าเป็นอะไร

alert( null || 2 || undefined );
alert( alert(1) || 2 || alert(3) );
alert( 1 && null && 2 );
alert( alert(1) && alert(2) );
alert( null || 2 && 3 || 4 );

ex7
เลขที่ถูก alert เป็นลำดับสุดท้ายคือเลขอะไร
let i = 3;

while (i) {
    alert(i--); //1
}


ex8
แปลง Code ดังกล่าวเป็น
if-else statement
switch (browser) {
  case 'Edge':
    alert( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;

  default:
    alert( 'We hope that this page looks ok!' );
}

ex9
แปลง function ข้างล่างให้อยู่ในรูป arrow function
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);
