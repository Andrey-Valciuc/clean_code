# Comunicating Intent

We can say that writing code for humans is broadly about the clarity of intent. And writing
code for machines is broadly about functionality. These needs do cross over, of course, but
it's vital to discern the difference. Here is the example:

```javascript
function chb(d, m, y) {
  return new Date(y, m - 1, d) - (new Date() / 6e4) * 70;
}
```

Do you understand what this code is doing? You may be able to decipher what's going on
in this code, but it is intent—its true meaning—will be almost impossible to discern.
If we clearly express our intent then the preceding code would look something like this:

```javascript
const AVG_HEART_RATE_PER_MILLISECOND = 70 / 60000;
function calculateHeartBeatsSinceBirth(birthDay, birthMonth, birthYear) {
  const birthMonthIndex = birthMonth - 1;
  const birthDate = new Date(birthYear, birthMonthIndex, birthDay);
  const currentDate = new Date();
  return (currentDate - birthDate) / AVG_HEART_RATE_PER_MILLISECOND;
}
```

From the preceding code, we can discern that this function is intended to calculate the
number of times a heart has beaten since birth. There is no functional difference between
these two pieces of code. However, the latter code better communicates the programmer's
intentions, and thus is easier to understand and to maintain.
