# Individual Primitive Types

## Navigation Links

- [Number](#number)
- String
- Boolean
- Undefined
- Null
- BigInt
- Symbol

## Number

The number primitive type is used to express numerical data. It stores this data in
the double-precision 64-bit floating-point format (IEEE 754). 64 bits here refers to there
being 64 binary digits available to store information. The entire 64-bit format that's used in
the IEEE 754 standards can be broken down into three chunks:

- **1 bit for the sign of the number being represented:** Whether the number is
  positive or negative
- **11 bits for the exponent of the number:** This tells us where the radix or decimal
  dot resides
- **52 bits for what's termed the fraction or significand:** This tells us the integer
  value

Technically, there are 53 bits available (not 52) for the expression of an integer value as the
leading bit of the significand field resides within the exponent field.

Having 53 bits available to express an integer value means that any numbers
greater than 253-1 are considered unsafe. These safety limits are available as constants on the
Number object:

- Integers larger than 2^53 or 9007199254740991 (Number.MAX_SAFE_INTEGER)
- Integers smaller than -2^53 or -9007199254740991 (Number.MIN_SAFE_INTEGER)

If we feel ourselves needing an integer outside of these bounds, then we can use JavaScript's BigInt primitive:

```javascript
const max = BigInt(Number.MAX_SAFE_INTEGER);
max + 1n; // => 9007199254740992n (correct)
max + 2n; // => 9007199254740993n (correct)
max + 3n; // => 9007199254740994n (correct)
max + 4n; // => 9007199254740995n (correct)
// ... etc.
```

It's also important to consider the precision of decimal values (such as in fractions) as well. When expressing decimals in JavaScript, you'll
likely encounter issues like this:

```javascript
0.1 + 0.2; // => 0.30000000000000004
```

This is due to inherent mechanism by which fractions are expressed in the floating-point
standard. To get around this problem we can use epsilon. The epsilon is the margin of error inherent to
floating-point math, and JavaScript makes this available to use as Number.EPSILON:

```javascript
Number.EPSILON; // => 0.0000000000000002220446049250313
```

If we wish to compare two numbers, we can simply subtract them from each other and check that the margin is less than the
EPSILON:

```javascript
const someValue = 0.1 + 0.2;
if (Math.abs(someValue - 0.3) < Number.EPSILON) {
  // someValue is (effectively) equal to 0.3
}
```

[Go Back](#navigation-links)
