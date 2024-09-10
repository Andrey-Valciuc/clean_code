# Property access operators

Accessing properties in JavaScript is achieved by using one of two operators:

- **Direct property access:** obj.property
- **Computed property access:** obj[property]

## Direct property access

The syntax for directly accessing a property is a single period character, with a left-side
operand that is the object you wish to access, and with a right-side operand that is the
property name you wish to access:

```javascript
const street = {
  name: "Marshal St.",
};
street.name; // => "Marshal St."
```

The right-side operand must be a valid JavaScript identifier.

## Computed property access

In cases where you cannot directly access a property via direct property access, it is possible
to compute the property name you wish to access, delimiting it with square brackets:

```javascript
someObject["somePropertyName"];
```

It's a right-side operand of any expression, meaning that you can freely compute some value
that'll then be coerced to a string (if it is not already a string) and used as the property name
to access the object:

```javascript
someObject[computeSomethingHere()];
```

Typically this is used to access property names that contain characters that make them
invalid identifiers, and hence illegal to use with the direct property access operator:

```javascript
object[1];
object["a property name with whitespace"];
object["{[property.name.with.odd.punctuation]}"];
```

However it's best to use names that are valid identifiers within the lagnguage so they can be directly accessed with ease.
