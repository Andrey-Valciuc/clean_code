# Readability

When we write code, we need to consider how the human brain will perceive it. If it can't read and cognitively navigate the code you've written, it will be less able to use it. This will drastically limit the usefulness and value of your code.

Machines care purely about specifications and will parse valid code into its parts with little
effort. Humans, however, are more complex. We rely on difference, or contrast, to focus our
attention. If a pattern is not being followed then it creates more work for our brains. For an
example of such inconsistency, have a look at this code:

```javascript
var TheName='James' ;
  var City    =    'London'
var      hobby = 'Photography',job='Programming'
```

he naming and spacing are inconsistent. Our brains struggle with this, and so reading the code, and building a full understanding of it, becomes more cognitively expensive.

We might refactor the preceding code to be more consistent, like so:

```javascript
var name = 'James';
var city = 'London';
var hobby = 'Photography';
var job = 'Programming';
```

Here, we've used a single naming pattern and have employed consistent syntax and
spacing in every statement.