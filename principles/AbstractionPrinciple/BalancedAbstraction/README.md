# Balanced abstracion

Balanced abstraction is one that sits neatly in between these two undesirable opposites. (under-abstraction and over-abstraction)
For the previous example of a **_GalleryComponent_**, we should, once again, explore the requirements of the abstraction:

- The ability to display one or more images
- The ability to display captions alongside images
- The ability to control the dimensions of individual images

Our abstraction should solely aim to expose these levers and no other unnecessary complexity. The following is an example of such an abstraction:

```javascript
const gallery = new GalleryComponent([
  {
    src: "/foo/images/PictureOne.jpg",
    caption: "The Caption",
    width: 200,
    height: 150,
  },
  {
    src: "/foo/images/PictureTwo.jpg",
    caption: "The Caption",
    width: 200,
    height: 150,
  },
]);
```

It fulfills all of the requirements without inviting new complexities or leaking complexities from the underlying implementation. This is,therefore, a balanced abstraction.
