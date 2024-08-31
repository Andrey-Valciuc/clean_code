# The abstracion principle

The principle of abstraction within programming states the following:

_Implementation should be separate from interface_

The craft of creating abstractions that separate implementation from
interface to just the right degree is not as simple as it may seem. As such, the programming world provides two warnings for us:

- **Don't repeat yourself (DRY)**: A warning that tells us to avoid writing code that
  duplicates other code we have written. If you find yourself having to repeat
  yourself, then this indicates that you've failed to abstract something, or have
  under-abstracted something.
- **You aren't gonna need it (YAGNI)**: Also known as keep it simple,
  stupid! (KISS), this warning tells us to be wary of over-abstracting code that
  does not need to be abstracted. It's the polar opposite of DRY, and serves to
  remind us that we should not attempt abstraction unless it's warranted (if we
  start to repeat ourselves, perhaps).

  Between these two warnings, somewhere in the middle, lies the perfect abstraction. Here are the levels of abstraction discussed:

  - Over-abstraction
  - Under-abstraction
  - Balanced abstraction
