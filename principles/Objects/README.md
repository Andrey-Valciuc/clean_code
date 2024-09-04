# Objects

Everything that is not a primitive value in JavaScript can be considered an object. Usually, however, when we use the term Object, we are referring to a plain object that is normally declared as an object literal delimited by curly braces, with a set of key-value pairs within:

```javascript
const animal = {
  name: "Duck",
  hobby: "Paddling",
};
```

You can also instantiate an object via the Object constructor and then add properties directly:

```javascript
const animal = new Object();
animal.name = "Duck";
animal.hobby = "Paddling";
```

Even though they are equivalent, it's preferable to use an object literal in most situations as it is simpler to declare and to read, especially if there are many properties.

Other Keypoints:

- Property names
- Property descriptions
- Map and WeakMap
- The prototype
  [Show details](https://github.com/Andrey-Valciuc/clean_code/tree/main/principles/Objects/ObjectsDetailed)
