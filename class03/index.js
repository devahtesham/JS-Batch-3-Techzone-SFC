/*
  FALSY VALUES:
  1. false
  2. 0;
  3. ""
  4. null
  5. undefined
  6. NaN
*/
// =========== Relational operators =======
// Note:- we use relational operators between two or more operands
/*
<,>,<=,>=,!=,==,===
== ====> weak equality check (value)
=== ====> strong equality check (value, type)
*/
// let num1 = '20';
// let num2 = 20;
// let ans = num1<num2;
// let ans = num1<=num2;  // 10<=20
// let ans = num1>=num2;  // 21 >=20
// let ans = num1!=num2;  // 21 != 20
// let ans = num1===num2
// console.log(ans);

// =========== LOGICAL OPERATORS ========
// Note:- We use logical operators between two or more relational expression
/*
&& (AND), ||(OR), !
*/
// let num1 = 10;
// let num2 = 20;
// let num3 = 30;
// // let ans = num1 < num2 && num2 < num3 && num3 < num1
// let ans = num1 > num2 || num2 > num3 || num3 < num1
// console.log(!false);

// =========== ASSIGNMENT OPERATOR =======
let a = 5;
let b = 5;
let sum = 0;
// sum = sum+a
sum += a
sum -= a
sum *= a  // sum=sum*a
console.log(sum);
// console.log(Boolean(a));