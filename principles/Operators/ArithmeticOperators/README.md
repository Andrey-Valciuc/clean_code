# Arithmetic and numeric operators

There are eight arithmetic or numeric operators in JavaScript:

- [Addition:](#addition)                a + b
- [Subtraction:](#substraction)         a - b
- [Division:](#division)                a / b
- [Multiplication:](#multiplication)    a * b
- [Remainder:](#remainder)              a % b
- [Exponentiation:](#exponentation)     a ** b
- [Unary plus:](#unary-plus)            +a
- [Unary minus:](#unary-minus)          -a 

Arithmetic and numeric operators will typically coerce their operands to numbers. The only exception is the + addition operator. There is one guaranteed outcome of all of these operations that is worth knowing about beforehand. An input of __NaN__ guarantees an output of __NaN__:

```javascript
    1 + NaN; // => NaN
    1 / NaN; // => NaN
    1 * NaN; // => NaN
    -NaN; // => NaN
    +NaN; // => NaN
    // etc.
```

## Addition
The addition operator is a dual-purpose operator:

- If either operand is __String__, then it'll concatenate both operands together
- If neither operand is __String__, then it'll add both operands as numbers

### Operand behavior in relation to operands:

**Both operands are numbers:**

**Explanation:** When both operands are primitive numbers, the + operator very simply adds
them together:

```javascript
1 + 2; // => 3
```

**Both operands are strings:**

**Explanation:** When both operands are primitive strings, the + operator very simply
concatenates them together:

```javascript
'a' + 'b'; // => "ab"
```
**One operand is a string:**

**Explanation:** When only one operand is a primitive string, the + operator will coerce the
other into String and will then concatenate both resulting strings together:

```javascript
123 + 'abc'; => "123abc"
'abc' + 123; => "abc123"
```

**One operand is a non-primitive:**

**Explanation:** When either operand is a non-primitive, the + operator will convert it into a
primitive, and then act as it usually would with that new primitive representation. Here's
an example:

```javascript
[123] + 123; // => "123123"
```

[Go Back](#arithmetic-and-numeric-operators)

## Substraction

The subtraction operator (-) does what it says on the tin. It takes two operands, subtracting
the right-side operand from the left-side operand:

```javascript
555 - 100; // => 455
```

If either operand is not a number, it will be coerced into one:

```javascript
'5' - '3'; // => 2
'5' - 3; // => 2
5 - '3'; // => 2
```

[Go Back](#arithmetic-and-numeric-operators)

## Division

The division operator, much like the subtraction operator, accepts two operands that it will
coerce to numbers. It will divide its left-side operand by its right-side operand:

```javascript
10 / 2; // => 5
```
Watch out when dividing by zero, as you may end up with either NaN (when dividing zero
by zero) or Infinity (when dividing a non-zero number by zero):

```javascript
10 / 0; // => Infinity
10 / -0; // => -Infinity
0 / 0; // => NaN
```

If your divisor is Infinity, your division will always evaluate to zero (0 or -0), unless
your dividend is also Infinity, in which case, you'll receive NaN:

```javascript
1000 / Infinity; // => 0
-1000 / Infinity; // => -0
Infinity / Infinity; // => NaN
```

[Go Back](#arithmetic-and-numeric-operators)


## Multiplication

The multiplication operator behaves similarly to the division operator, apart from the
obvious fact that it performs multiplication:

```javascript
5 * 25; // => 125
```

Multiplying any non-zero finite value by Infinity will always result in Infinity (with the appropriate sign):

```javascript
100 * Infinity; // => Infinity
-100 * Infinity; // => -Infinity
```

However, multiplying zero by Infinity will always result in NaN:

```javascript
0 * Infinity; // => NaN
-Infinity * -0; // => NaN
```

[Go Back](#arithmetic-and-numeric-operators)


## Remainder

The remainder operator (%), also known as the modulo operator, is similar to the division
operator. It accepts two operands: a dividend, on the left side, and a divisor on the right
side. It will return the remainder following an implied division operation:

```javascript
10 % 5; // => 0
10 % 4; // => 2
10 % 3; // => 1
10 % 2; // => 0
```

If the divisor is zero, the dividend is Infinity, or either operand is NaN, then the operation
will evaluate to NaN:

```javascript
Infinity % Infinity; // => NaN
Infinity % 2; // => NaN
NaN % 1; // => NaN
1000 % 0; // => NaN
```

And if the divisor is infinity, then the result will be equal to the divident:

```javascript
1000 % Infinity; // => 1000
0.03 % Infinity; // => 0.03
```

[Go Back](#arithmetic-and-numeric-operators)


## Exponentation

The exponentiation operator (**) takes two operands, a base on the left side and
an exponent on the right side. It will evaluate to the base raised to the power of
the exponent:

```javascript
10 ** 2; // => 100
10 ** 3; // => 1,000
10 ** 4; // => 10,000
```

It is functionally identical to using the Math.pow(a, b) operation, although is more
succinct. One curious case worth mentioning is that, if the exponent is zero, then the result will
always be 1, regardless of what the base is:

```javascript
1000 ** 0; // => 1
0 ** 0; // => 1
Infinity ** 0; // => 1
NaN ** 0; // => 1
```

[Go Back](#arithmetic-and-numeric-operators)


## Unary plus

 The unary plus operator (+...) will convert its operand into Number as if it were passed
to Number(...):

```javascript
+'42'; // => 42
+({ valueOf() { return 42; } });
```
 Non-numeric strings will result in NaN:

 ```javascript
+({ toString() { return 'not a number'; } }); // => NaN
 ```

The unary + operator is usually used in places where a programmer wishes to cast a
number-like object to Number so that they can then use it with other numeric operations.
Usually, however, it is preferable to explicitly use Number(...) as it is much clearer what
the intention is.

[Go Back](#arithmetic-and-numeric-operators)


## Unary minus

The unary minus operator (-...) will first convert its operand into Number in the same
way as the unary + operator, detailed in the last section, and will then negate it:

```javascript
-55; // => -55
-(-55); // => 55
-'55'; // => -55
```

Its usage is fairly straightforward and intuitive, although, as with unary +, it's useful to
disambiguate cases where you have a unary operator next to its binary operator
counterpart. Cases like these can be confusing:

```javascript
number - -otherNumber
```
It is best, in these situations, to lend clarity with parentheses:

```javascript
number - (-otherNumber)
```

The unary minus operator is usually only used directly with a literal number operand to
specify a negative value.

[Go Back](#arithmetic-and-numeric-operators)