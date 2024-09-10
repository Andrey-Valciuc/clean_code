# Assignment operators

An assignment operator will assign the value of its right-side operand to its left-side
operand and will return the newly assigned value. The left-side operand of an assignment
operation must always be an assignable and valid identifier or property:

```javascript
value = 1;
value.property = 1;
value["property"] = 1;
```

You can additionally use destructuring assignment, which enables you to declare your left-
side operand as either an object-literal-like or array-like structure:

```javascript
[name, hobby] = ['Pikachu', 'Eating Ketchup'];
name; // => "Pikachu"
hobby: // => "Eating Ketchup"
```

There are technically a large number of assignment operators because JavaScript combines
regular operators with the basic assignment operator to create more succinct assignment:

- Direct assignment: =
- Additive assignment: +=
- Subtractive assignment: -=
- Multiplicative assignment: \*=
- Divisive assignment: /=
- Remainder assignment: %=
- Bitwise left-shift assignment: <<=
- Bitwise right-shift assignment: >>=
- Bitwise unsigned right-shift assignment: >>>=
- Bitwise AND assignment: &=
- Bitwise XOR assignment: ^=
- Bitwise OR assignment: |=

All assignment operators, apart from the direct assignment = operator, will conduct the
operation that is indicated by the operator preceding =.
