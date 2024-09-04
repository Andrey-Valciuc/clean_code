# Objects Detailed

## Navigation Links

- [Property names](#property-names)
- [Property descriptions](#property-descriptors)
- [Map and WeakMap](#map-and-weakmap)
- [The prototype](#the-prototype)

## Property names

The keys that are used to add properties to objects (the property names) are internally stored as strings. However, when using the object literal syntax, you can declare the keys as regular identifiers (that is, anything you could use as a variable name), number literals, or string literals:

```javascript
const object = {
  foo: 123, // Using an identifier as the key
  baz: 123, // Using a String literal as the key
  123: 123, // Using a Number literal as the key
};
```

It's preferable to use identifiers where possible as this helpfully restricts you to using key names that can easily be accessed as properties.

If you use a string literal that is not also a valid identifier, then you'll have to use square-bracket notation to access it, which can be
burdensome:

```javascript
const data = {
  hobbies: ["tennis", "kayaking"],
  "my hobbies": ["tennis", "kayaking"],
};
data.hobbies; // Easy
data["my hobbies"]; // Burdensome
```

You can also use computed property names (delimited by square brackets) to add dynamically named items to an object literal:

```javascript
const data = {
  ["item" + (1 + 2)]: "foo",
};
data; // => { item3: "foo" }
data.item3; // => "foo
```

[Go Back](#navigation-links)

## Property descriptors

When adding properties to objects in the conventional fashion, either via property access or via an object literal, the properties will be given the following implicit traits:

- **configurable:** This means the property can be deleted from the object (and if
  its property descriptor can be changed)
- **enumerable:** This means the property will be visible to enumerations such
  as for...in and Object.keys()
- **writable:** This means the property's value can be changed via an assignment operator (such as obj.prop = ...)

JavaScript gives you the power to turn off these traits individually, but be wary that changes to these traits can obscure the behavior of your code.

[Go Back](#navigation-links)

## Map and WeakMap

The Map and WeakMap abstractions are capable of storing key-value pairs where, unlike regular objects, the key can be anything, including non-primitive values:

```javascript
const populationBySpecies = new Map();
const reindeer = { name: "Reindeer", formalName: "Rangifer tarandus" };
populationBySpecies.set(reindeer, 2000000);
populationBySpecies.get(reindeer); // => 2,000,000
```

WeakMap is similar to Map, but it only holds a weak reference to the object that's used as a key, meaning that, if the object becomes unavailable due to being garbage-collected elsewhere in your program, then WeakMap will cease to keep a hold of it.

Most of the time, a plain object is all you will need.

[Go Back](#navigation-links)

## The prototype

JavaScript is a prototypical language where inheritance is achieved via prototypes. JavaScript's prototypal behavior can be described like this: every time a property is accessed on an object, if it is not available on the object itself, JavaScript will attempt to access it on an internally available property called **Prototype**. It will then repeat this process until it either finds the property or gets to the top of the prototype chain and returns undefined.

A **Prototype** object, which could feasibly be attached to any other object, is just a
regular object itself. For example:

```javascript
const engineerPrototype = {
  type: "Engineer",
  sayHello() {
    return `Hello, I'm ${this.name} and I'm an ${this.type}`;
  },
};
```

Then, we could attach this prototype to another object, thus making its properties available there as well.

```javascript
const pandaTheEngineer = Object.create(engineerPrototype);
```

With this newly created pandaTheEngineer object, we are able to access any properties
available on its **Prototype**, such as **engineerPrototype**:

```javascript
pandaTheEngineer.name = "Panda";
pandaTheEngineer.sayHello(); // => "Hello, I'm Panda and I'm an Engineer"
```

[Go Back](#navigation-links)
