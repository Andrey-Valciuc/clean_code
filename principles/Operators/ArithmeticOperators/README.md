# Arithmetic and numeric operators

There are eight arithmetic or numeric operators in JavaScript:

- [Addition:](#addition) a + b
- [Subtraction:]() a - b
- [Division:]() a / b
- [Multiplication:]() a * b
- [Remainder:]() a % b
- [Exponentiation:]() a ** b
- [Unary plus:]() +a
- [Unary minus:]() -a- 

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

### Operand behavior in relation to operands

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