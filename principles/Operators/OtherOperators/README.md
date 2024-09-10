# Other operators

There are a few remaining operators and pieces of syntax that don't fall into any other operator category:

- The delete operator: delete VALUE
- The void operator: void VALUE
- The new operator: new VALUE
- The comma operator: VALUE, VALUE, ...

## The delete operator

The delete operator can be used to remove properties from objects, as such its only
operand usually takes the form of a property accessor, like so:

```javascript
delete object.property;
delete object[property];
```

All properties added conventionally are, by default, configurable and can, therefore, be deleted. However if the property has been added via defineProperty with configurable set to false then it'll be not deletable:

```javascript
const foo = {};
Object.defineProperty(foo, "baz", {
  value: 123,
  configurable: false,
});
foo.baz; // => 123
delete foo.baz; // => false
foo.baz; // => 123
"baz" in foo; // => true
```

The delete operator has historically been the subject of many inconsistencies between
JavaScript implementations, most especially between different browsers. Because of this,
only its conventional usage of deleting properties on objects is advisable.

## The void operator

The void operator will evaluate to undefined regardless of its operand. Its operand can be
any valid reference or expression:

```javascript
void 1; // => undefined
void null; // => undefined
void [1, 2, 3]; // => undefined
```

It doesn't have many uses nowadays, although void 0 is sometimes used as an idiom
for undefined either for succinctness or to avoid issues in legacy environments
where undefined was an untrusted mutable value.

## The new operator

The new operator is used to form an instance from a constructor. Its right-side operand must
be a valid constructor, either provided by the language (for example, new String()) or by
ourselves:

```javascript
function Thing() {}
new Thing(); // => Instance of Thing
```

The new operator only cares that its right-side operand is constructible. This means it cannot
be a function formed by an arrow function, as in this example:

```javascript
const Thing = () => {};
new Thing(); // ! TypeError: Thing is not a constructor
```

As long as you've defined your constructor using a function expression or declaration, it'll
work fine. You can even instantiate an anonymous inline constructor if you want:

```javascript
const thing = new (function () {
  this.name = "Anonymous";
})();
thing.name; // => "Anonymous"
```

The new operator does not formally require the calling parentheses. They only need to be
included if you are passing arguments to the constructor.

The usage of the new operator is usually very straightforward. Semantically, it is
understood to relate to the construction of an instance and should therefore ideally only be
used to do that.

## The comma operator

The comma operator (a, b) accepts a left-side and right-side operand and will always
evaluate to its right-side operand. It is sometimes not considered an operator since it does
not technically operate on its operands. It's also quite rare.

It's most commonly seen in the iteration statement portion of a for(;;) loop:

```javascript
for (let i = 0; i < length; i++, x++, y++) {
  // ...
}
```

Note how three increment operations are occurring in the third statement (which occurs at
the end of each iteration in a conventional for(;;) statement), and that they are each
separated by a comma. In this context, the comma is used merely to ensure that all of these
individual operations will occur, regardless of each other, within the context of a singular
statement. In regular code outside a for(;;) statement, you would likely just have these
each dedicated to their own line and statement, like so:

```javascript
i++;
x++;
y++;
```

However, due to the constraints of the for(;;) syntax, they must all exist within a
singular statement and so the comma operator becomes necessary.
