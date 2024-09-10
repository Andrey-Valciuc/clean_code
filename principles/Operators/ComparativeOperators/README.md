# Comparative operators

Comparative operators are a collection of binary operators that always
return Boolean derived from a comparison between the two operands:

- Abstract equality (a == b)
- Abstract inequality (a != b)
- Strict equality (a === b)
- Strict inequality (a !== b)
- Greater than (a > b)
- Greater than or equal to (a >= b)
- Less than (a < b)
- Less than or equal to (a <= b)
- Instance of (a instanceof b)
- In (a in b)

## Abstract equality and inequality

The abstract equality (==) and inequality (!=) operators rely on the same algorithm
internally, which is responsible for determining whether two values can be considered
equal.

Where both operands, the left-side and the right-side, are of the same type, then the operator will check whether the two operands are identical values:

```javascript
100 == 100; // => true
null == null; // => true
"abc" == "abc"; // => true
123n == 123n; // => true
```

When both operands are of the same type, abstract equality (==) is exactly
identical to strict equality (===). However, where both operands are of different types, the exact
behavior of abstract equality will depend on the operands themselves.

If either operand is Number, and the other is String, then the a == b operation is
equivalent to the following:

```javascript
Number(a) === Number(b);
//----------------------
123 == "123"; // => true
"123" == 123; // => true
"1e3" == 1000; // => true
```

The abstract inequality (!=) is simply the opposite of abstract equality (==)

Due to their complicated coercive behaviors, the abstract equality and inequality operators are
best avoided. Anyone reading code littered with these operators won't be able to have a
good level of confidence in the conditions and control flow of the program because there
are simply too many odd edge cases where abstract equality can bite.

## Strict equality and inequality

The strict equality (===) and strict inequality (!==) operators in JavaScript, unlike their abstract cousins, provide certainty and simplicity in how they treat their operands.

The === operator will only ever return true if both of its operands are identical:

```javascript
1 === 1; // => true
null === null; // => true
"hi" === "hi"; // => true
```

The only exception to this rule is when either operand is NaN, in which case, it'll
return false:

```javascript
NaN === NaN; // => false
```

No internal coercion will ever occur with strict equality, so even if you have two primitives
that could be coerced to the same number, for example, they will still be considered
inequal:

```javascript
"123" === 123; // => false
```

It is always advisable to use strict equality instead of abstract equality. It provides far more
certainty and reliability in the outcome of every operation and allows you to free your mind
from the myriad coercive behaviors that abstract equality entails.

## Greater than and less than

The greater-than (>), less-than (<), greater-than-or-equal-to (>=), and less-than-or-equal-to (<=)
operators all operate in a similar manner.

The first thing to note is that all operands to these operators will first be coerced to their
primitive representation. Following that, if their primitive representations are both strings,
then they'll be compared lexicographically. If their primitive representations are not both
strings, then they'll be coerced from whatever they are to numbers and then compared.

### Lexicographic comparison

Lexicographic comparison occurs when both operands are strings, and involves the
character-by-character comparison of each string.

JavaScript uses UTF-16 to encode strings and therefore each codeunit is a 16-bit integer.
he UTF-16 codeunits from 65 (U+0041) to 122 (U+007A) are as follows:

```
ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz
```

To compare any two given codeunits, JavaScript will simply compare their integer values. For the case
of comparing B to A, this might look something like this:

```javascript
const intA = "A".charCodeAt(0); // => 65
const intB = "B".charCodeAt(0); // => 66
intB > intA; // => true
```

Every character in each operand string must be compared codeunit-by-codeunit. At each index of each string, if codeunits differ, the larger codeunit will be considered greater, and that string will, therefore, be considered greater than the other:

```
"AAA" > "AAB";
"AAB" > "AAC";
```

And if one operand is equal to the prefix of the other, then it will always be considered less
than, as shown here:

```javascript
"coff" < "coffee"; // => true
```

The lowercase English letters occupy higher UTF-16 integers than uppercase letters. This has the effect of meaning that uppercase is considered less than lowercase and would:

```javascript
"A" < "a"; // => true
"Z" < "z"; // => true
"Adam" < "adam"; // => true
```

### Numeric comparison

Numeric comparison using JavaScript's greater-than and less-than operators is fairly
intuitive. Operands will be coerced first to their primitive representations, and then coerced a second time, explicitly, to a number.

For cases where both operands are numbers, the result is entirely intuitive:

```javascript
123 < 456; // => true
```

For NaN and Infinity, the following assertions can be made:

```javascript
Infinity > 123; // => true
Infinity >= Infinity; // => true
Infinity > Infinity; // => false
NaN >= NaN; // => false
NaN > 3; // => false
NaN < 3; // => false
```

If one operand has a primitive representation that is not Number, then it will be coerced
to Number before comparison. Due to the potentially complicated coercions that may occur, it is always best to pass
operands of the same type to >, <, >=, and <=.
