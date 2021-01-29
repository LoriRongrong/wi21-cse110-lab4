## 1

specific number； because i exists as a variable in the scope of function.

## 2

specific number; because the discountedPrice exists as a variable in the scope of function.

## 3

specific number; because it exists as a variable in the scope of function.

## 4

[ 50, 100, 150 ]; the loop runs 3 times, and each time we append the discounted value (here is 50% off) into the discounted array.

## 5

undefined; because i is defined as part of the block scope, so i is local to the loop.

## 6

undefined; because discountedPrice is defined in the block scope

## 7

specific number; finalPrice is defined on the function scope, and updated within the loop.

## 8

[ 50, 100, 150 ]; because the discounted array is successfully defined on the function scope and updated successfully in the loop. The remaining rationale is similar to question 4.

## 9

(obviously line 7 throws exception but assume the update is successful) undefined; since i is declared using 'let', it is defined as part of the block scope, so i is local to the loop.

## 10

undefined; it is local to the loop

## 11

(line 7 throws exception) exception/0; I think we can't update finalPrice within the loop. If assume we didn't update it in the loop, then we can print out the value declared on line 3. If we really want to update it in the loop, we can't even proceed to execute line 13.

## 12

exception/[]; it simply doesn't work because discounted is a constant variable which cannot be modified. Whenever the function tries to push an element, it will throw exception. If we just assume that we don't update discounted in the loop, then discounted will just remain as [], the same when it is declared on line 2.

## 13

- A: student.name
- B: student['Grad Year']
- C: student.greeting
- D: student['Favorite Teacher'].name
- E: student.courseLoad[0]

## 14

- A: SyntaxError: Invalid or unexpected token
- B: SyntaxError: Invalid or unexpected token
- C: 3
- D: 3null
- E: 4
- F: 0
- G: 3undefined
- H: NaN

## 15

- A: true
- B: false
- C: true
- D: false
- E: false
- F: true

## 16

=== is a strict equality comparison operator in JavaScript, will return false if two values are not the same type.

Double equals (==) is a comparison operator, which transforms the operands having the same type before comparison.

## 17

printed out 'How are you?; because as tested in question 15, `true==2` evaluates as false. When evaluated in a else if statement, it implicitly performs `2===boolean(2)`.

## 19

[ 6, 8, 10 ]

when for each element passed into the for loop, it will first be called on `doSomething()`, and `doSomething()` will call on the `function(x){return x*2}` after do the operation `num+2`. Take `1` as the example, `1` will become 3, and then `doSomething` will return `(1+2)*2`.

## 21
1,4,3,2

The rationale for the result is that it ```console.log(1)``` and ```console.log(4)``` are on the same stack. The setTimeout() will wait the current stack to clear and then execute. That is why 3 is after 4. Since the code print out 2 has a longer delay, it will be printed out last. 