# Under-abstraction

Under-abstraction is when too little complexity has been removed or replaced. This results in a
situation where the user of the abstraction then needs to concern themselves with the
underlying complexity.

let's see what an under-abstracted version might look like:

```javascript
const gallery = new GalleryComponent({
  web: [
    () => {
      const el = document.createElement("div");
      el.className = "gallery-container";
      return el;
    },
    {
      data: [
        `<img src="/foo/images/PictureOne.jpg" width=200 height=150 />
    <span>The caption</span>`,
        `<img src="/foo/images/PictureTwo.jpg" width=200 height=150 />
    <span>The caption</span>`,
      ],
    },
  ],
  android: [
    (view, galleryPrepData) => {
      view.setHasFixedSize(true);
      view.setLayoutManager(new GridLayoutManager(getApplicationContext(), 2));
      return new MyAdapter(getApplicationContext(), galleryPrepData());
    },
    {
      data: [
        ["/foo/images/PictureOne.jpg", 200, 150, "The Caption"][
          ("/foo/images/PictureTwo.jpg", 200, 150, "The Caption")
        ],
      ],
    },
  ],
});
```

This version of GalleryComponent seems to be forcing us to define web-specific HTML
and Android-specific code. We were, ideally, depending on the abstraction to hide this
complexity from us, giving us a simplified interface with which to harness—it hasn't done
this. The complexity of writing platform-specific code has not been sufficiently abstracted
here, and so we can therefore say that this is an example of under-abstraction.

If we keep an eye out for areas in which we are forced to repeat ourselves, then we can
hope to build better abstractions. But be aware that under-abstraction is not always
obvious.
