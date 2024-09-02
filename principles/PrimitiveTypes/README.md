# Primitive Types

A primitive type in JavaScript is any value that is not an object and thus does not have any
methods or properties. There are seven primitive types in JavaScript:

- Number
- String
- Boolean
- Undefined
- Null
- BigInt
- Symbol
- [Show more](https://github.com/Andrey-Valciuc/clean_code/tree/main/principles/PrimitiveTypes/IndividualPrimitiveTypes)

## Immutability of primitives

All primitive values are immutable, meaning that you cannot mutate their values. This is a
core part of their primitiveness. You cannot, for example, change the number value of 3.14
to 42, or change the value of a string to its uppercased variation.

When we reassign a variable, giving it a new value, we are not changing the value itself; we
are only changing which value the variable refers to, as shown here:

```javascript
let name = "simon";
let copy = name;
// Assign a new value to `name`:
name = name.toUpperCase();
// New value referred to by name:
name; // => "SIMON"
// Old value remains un-mutated:
copy; // => "simon"
```

Note how copy has remained lowercase. The primitive value simon has not been mutated;
instead, a new primitive value has been derived from it, via the toUpperCase method, and
then assigned to the variable that previously held the lowercase variant.

## Primitive wrappers

Primitive values don't have methods as they are
not objects. So, how exactly are we able to call toUpperCase on the preceding string? JavaScript wraps
primitive values in their respective wrapper objects at the time of property access. This
occurs for all primitive values, apart from null and undefined.

You are free to instantiate these wrapper objects yourself: you will observe that they no longer
behave like primitives, though; they are objects, and, as such, you can add and mutate
properties on them:

```javascript
const name = new String("James");
// We can add arbitrary properties, since it is an object:
// (Warning: this is an anti-pattern)
name.surname = "Padolsey";
name.surname; // => "Padolsey"
```

Invoking a wrapper constructor (for example, Number, String, and so on) as a regular
function has a unique behavior. Instead of returning a new wrapper instance, it will cast the
value to a particular type and return a regular primitive. This is quite useful when you're
casting one type to another:

```javascript
// Cast a number to a string:
String(123); // => "123"
// Cast a string to a number
Number("2"); // => 2
// Cast a number to a boolean
Boolean(0); // => false
Boolean(1); // => true
```

## The falsy primitives

In JavaScript, all the values in Boolean contexts will evaluate to either true or false. To
describe this behavior, we usually refer to values as either truthy or falsy. To determine the
truthiness of a value, we can simply pass it to the Boolean function:

```javascript
Boolean("hi"); // => true
Boolean(0); // => false
Boolean(42); // => true
Boolean(0.1); // => true
Boolean(""); // => false
Boolean(true); // => true
Boolean(null); // => false
```

There are only eight falsy values in JavaScript, and all of them are primitive types:

- null
- undefined
- +0 or -0 (zero, a number)
- false (a Boolean)
- "" (an empty string)
- 0n (zero, a BigInt)
- NaN (not a number)
