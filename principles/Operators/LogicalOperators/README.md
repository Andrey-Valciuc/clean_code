# Logical operators

Logical operators are typically used to build logical expressions where the result of the
expression informs some action or inaction. There are three logical operators in JavaScript:

- [The NOT operator](#the-logical-not-operator) (!a)
- [The AND operator](#the-logical-and-operator) (a && b)
- [The OR operator](#the-logical-or-operator) (a || b)

The AND and OR operators, unusually, do not always evaluate to a Boolean value, and both utilize a mechanism called short-circuit evaluation to only execute both operands if some condition is met.

## The logical NOT operator

The NOT operator is a unary operator. It accepts only a single operand and converts that
operand into its Boolean representation, then inverts it, so that truthy items
become false and falsy items become true

```javascript
!1; // => false
!true; // => false
!"hi"; // => false
!0; // => true
!""; // => true
!true; // => false
```

Internally, the NOT operator will perform the following:

- Cast the operand to a Boolean (Boolean(operand)).
- If the resulting value is true, then return false; otherwise, return true

As a result of there being only seven falsy values in JavaScript, the NOT operator can only
evaluate to true in these seven scenarios:

```javascript
!false; // => true
!""; // => true
!null; // => true
!undefined; // => true
!NaN; // => true
!0n; // => true
!0; // => true
```

[Go Back](#logical-operators)

## The logical AND operator

The logical AND operator (&&) in JavaScript accepts two operands. If its left-side operand is
truthy, then it will evaluate and return the right-side operand; otherwise, it will return the
left-side operand:

```javascript
0 && 1; // => 0
1 && 2; // => 2
```

In fact, this operator can be described by the following statement:

**If A is truthy then give me B; otherwise, I'll settle for A.**

JavaScript will evaluate both operands, but it in fact will only evaluate the right-side
operand if the left-side operand is truthy. This is known as short-circuit evaluation.

The && operator can be used in more interesting ways too, such as when needing
to return a value but only if some prior condition is met:

```javascript
function getFavoriteDrink(user) {
  return user && user.favoriteDrink;
}
```

Here, the && operator is being used in a non-Boolean context, where there is no coercion of
its result occurring. In this case, if its left-side operand is falsy (that is, if user is falsy), then
it will return that; otherwise, it will return the right-side operand.

[Go Back](#logical-operators)

## The logical OR operator

The logical OR operator (||) in JavaScript accepts two operands. If its left-side operand is
truthy, then it will return that immediately; otherwise, it will evaluate and return the right-
side operand:

```javascript
0 || 1; // => 1
2 || 0; // => 2
3 || 4; // => 3
```

Like the && operator, the || operator is flexible in that it does not cast what it returns
to Boolean, and it evaluates in a short-circuited manner:

```javascript
true || thisWillNotExecute();
false || thisWillExecute();
```

The || operator is akin to:

**If A is falsy, then give me B, otherwise, I'll settle for A.**

Just as with &&, this means that || can be used flexibly to provide control flow or to
evaluate specific expressions conditionally:

```javascript
const nameOfUser = user.getName() || user.getSurname() || "Unknown";
```

As such, it should be used cautiously in a way that considers what readers of the code are
familiar with.

[Go Back](#logical-operators)
