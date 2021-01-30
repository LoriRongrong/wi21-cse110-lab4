## 1

`prices.length`； because i exists as a variable in the scope of function.

## 2

`prices[prices.length-1] * (1 - discount)`; because the discountedPrice exists as a variable in the scope of function.

## 3

`Math.round(prices[prices.length-1] * (1 - discount) * 100) / 100`; because it exists as a variable in the scope of function.

## 4

`[ 50, 100, 150 ]`; the loop runs 3 times, and each time we append the discounted value (here is 50% off) into the discounted array.

## 5

`undefined`; because i is defined as part of the block scope, so i is local to the loop.

## 6

`undefined`; because discountedPrice is defined in the block scope

## 7

`0`; finalPrice is defined on the function scope, and updated within the loop.

## 8

`[ 50, 100, 150 ]`; because the discounted array is successfully defined on the function scope and updated successfully in the loop. The remaining rationale is similar to question 4.

## 9

(obviously line 7 throws exception but assume the update is successful) `undefined`; since i is declared using 'let', it is defined as part of the block scope, so i is local to the loop.

## 10

`undefined`; it is local to the loop

## 11

(line 7 throws exception) `exception/0`; I think we can't update finalPrice within the loop. If assume we didn't update it in the loop, then we can print out the value declared on line 3. If we really want to update it in the loop, we can't even proceed to execute line 13.

## 12

`exception/[]`; it simply doesn't work because discounted is a constant variable which cannot be modified. Whenever the function tries to push an element, it will throw exception. If we just assume that we don't update discounted in the loop, then discounted will just remain as [], the same when it is declared on line 2.

## 13

- A: student.name
- B: student['Grad Year']
- C: student.greeting()
- D: student['Favorite Teacher'].name
- E: student.courseLoad[0]

## 14

- A: '32'; `+` is used for both string concatenation and addition. If either operant is a string, concatenation is used; the number is concated after the string.
- B: 1; `-` cannot be used on strings, so its operands are converted to numbers.
- C: 3; `null` coerces to 0; the same logic as the second question.
- D: 3null; `null` used as a string follow the same logic as the first question.
- E: 4; `true` coerces to 1
- F: 0; `false` and `null` both coerces to 0.
- G: 3undefined; `undefined` used as a string.
- H: NaN; `undefined` coerces to NaN; All operations on NaN return NaN.

## 15

- A: true; When comparing values of different types, JavaScript converts the values to numbers. So `2 > 1` will return true.
- B: false; when perform string-string comparison, javascript uses "dictionary" order. Since 1 is in front of 2, the statement is false.
- C: true; it transforms '2' to number 2, which is equal to 2.
- D: false; because `===` is strict equality and '2' and 2 are not the same type.
- E: false; `true` is evaluated as 1, and 1 doesn't equal to 2.
- F: true; If the value is omitted or is 0, -0, null, false, NaN, undefined, or the empty string (""), the object has an initial value of false. All other values, including any object, an empty array ([]), or the string "false", create an object with an initial value of true. so `Boolean(2)` is evaluated as true. and `true==true`.

## 16

`===` is a strict equality comparison operator in JavaScript, will return false if two values are not the same type.

Double equals `==` is a comparison operator, which transforms the operands having the same type before comparison.

## 17

printed out 'How are you?; because as tested in question 15, `true==2` evaluates as false. When evaluated in a else if statement, it implicitly performs `Boolean(2)`, which is `true`.

## 19

`[ 6, 8, 10 ]`

when for each element passed into the for loop, it will first be called on `doSomething()`, and `doSomething()` will call on the `function(x){return x*2}` after do the operation `num+2`. Take `1` as the example, `1` will become 3, and then `doSomething` will return `(1+2)*2`.

## 21

```
1
4
3
2
```

When you set a timeout, it actually queues the asynchronous code until the engine executes the current call stack. So `console.log(1)` and `console.log(4)` are on the current call stack. The setTimeout() will wait the current stack to clear and then execute. That is why 3 is after 4. Since the code print out 2 has a longer delay, it will be printed out last.
