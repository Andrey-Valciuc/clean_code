# Scopes and declarations

The scope of a given variable can be thought of as the areas within the program where that
variable can be accessed.

When we declare a variable at the beginning of a module (outside all functions), we think
that it's only natural that this variable should then be accessible to all functions within the
module:

```javascript
var hello = "hi";
function a() {
  hello; // a() can "see" the hello variable
}
function b() {
  hello; // b() can "see" the hello variable
}
```

And if we define a variable within a function, then we expect all inner functions to have
access to it:

```javascript
var value = "I exist";
function doSomething() {
  value; // => "I exist"
}
```

Internally, when you declare variables, JavaScript will create and store that variable within
a lexical environment, which contains the mappings of identifiers to values. A typical
JavaScript program can be thought of as having four types of lexical environments, as
shown in the following list:

- **The global environment:** There is only one of these, and it is considered the
  outer scope of all other scopes. It is the global context in which all other
  environments (that is, scopes) exist. The global environment mirrors a global
  object that can be referred to by window or self in the browser and global in
  Node.js.
- **A module environment:** This environment will be created for each distinct
  JavaScript module that is run as part of a singular Node.js process or for
  each <script type="module"> in the browser.
- **A function environment:** This environment will be in effect for every running
  function, however it is declared or invoked.
- **A block environment:** This environment will be in effect for every block ({...})
  in your program, whether following another language construct, such
  as if(...) or while(...), or situated independently.

## Variable declaration

A variable declaration occurs via a var keyword followed by a valid identifier or an
assignment of the form a = b:

```javascript
var foo;
var baz = 123;
```

Variables declared via var are scoped to the
nearest function, module, or global environment—that is, they are not block-scoped. At
parse time, variable declarations within a given scope will be collected and then, at the
point of execution, those declared variables will be hoisted to the top of their execution
context and initialized with the undefined value.

This means that, within a given scope,
technically you can access a variable prior to its assignment, but it'll be undefined:

```javascript
foo; // => undefined
var foo = 123;
foo; // => 123
```

The hoisting behavior of var is in contrast to variables declared via let and const, which
will produce an ReferenceError if you attempt to access them prior to their declaration:

```javascript
thing; // ! ReferenceError: Cannot access 'thing' before initialization
let thing = 123;
```

The hoisting behavior of var can lead to some unexpected results.
there may be a situation where you're attempting to refer to a variable that exists
within the outer scope but you are unable to do so because of a variable declaration in your
current scope being hoisted:

```javascript
var config = {};
function setupUI() {
  config; // => undefined
  var config;
}
setupUI();
```

Here, the inner scope's variable declaration of **config** will be hoisted to the top of its scope,
meaning that, from the very first line of setupUI, config is undefined.

Variable declarations have fallen
out of favor because of the more recently introduced const and let declarations, which
are both block-scoped and do not have any odd hoisting behavior.

## Let declarations

Let declarations will be scoped to their nearest environment and have no complicated hoisting behaviors.

Their ability to be scoped to a block means that a let declaration inside a block will not have
an effect on the outer function scope. In the following code, we can see three different
environments (scopes) with a respective place variable in each:

```javascript
let place = "outer";
function foo() {
  let place = "function";
  {
    let place = "block";
    place; // => "block"
  }
  place; // => "function"
}
foo();
place; // => "outer"
```

This demonstrates two things to us:

- Declaring via let will not overwrite or mutate a variable by the same name in an
  outer scope
- Declaring via let will allow each scope to have its own variable, invisible to
  outer scopes

## Const declarations

A const declaration has the same characteristics as let, exept for one crucial difference: variables declared via const are immutable, meaning that the variable cannot be reassigned to a different value:

```javascript
const pluto = "a planet";
pluto = "a dwarf planet"; // ! TypeError: Assignment to constant variable
```

It's important to note that this does not affect the mutability of the value itself. So if the
value is any type of object, then all of its properties will retain their mutability:

```javascript
const pluto = { designation: "a planet" };
// Assignment to a property:
pluto.designation = "a dwarf planet";
// It worked! (I.e. the object is mutable)
pluto.designation; // => "a dwarf planet"
```

Even though const does not protect values from all mutability, it does protect us from
some common mistakes and bad practices, such as reusing a variable to refer to several
different concepts, or accidentally reassigning a variable because of a typo.

## Function declarations

In terms of scoping, function declarations behave similarly to variable declarations. They will be scoped to their closest function, module, or global environment, and will be hoisted to the top of their respective execution context.

Unlike variable declarations, however, a function declaration will cause the actual
assignment of the Function to its identifier to be hoisted as well, meaning that
the Function is effectively available before it is declared:

```javascript
myFunction(); // => "This works!"
function myFunction() {
  return "This works!";
}
```

This behavior is quite obscure and as such is inadvisable unless it is very obvious where the
definition for myFunction comes from upon invocation

## Closures

Inner scopes, as we've seen, have access to the variables of outer scopes:

```javascript
function outer() {
  let thing = 123;
  function inner() {
    // I can access `thing` within here!
    thing; // => 123
  }
  inner();
}
outer();
```

What naturally follows from this is the concept of a closure. A closure is how JavaScript
enables you to continue to access the scope of an inner function regardless of where or
when it is called

**!!!** It's simplest to think of a closure as simply a retained scope. A closure is a
wrapped-up or enclosed scope that is passed around alongside the
function, invisibly. When you call the function, it has implicit access to its
scope provided by this closure.

Consider the following function (fn), which returns another function. It has its own scope,
in which we declare the coolNumber variable:

```javascript
function fn() {
  let coolNumber = 1;
  return function () {
    console.log(`
I have access to ${coolNumber}
wherever and whenever I am called
`);
  };
}
```

The inner function, which we return, has access to the coolNumber variable, as we would
expect. When we call fn(), its scope is effectively kept alive so that, when we eventually
call the inner function, it is still able to access coolNumber.
