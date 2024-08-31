# Over-abstraction

Over-abstraction is when too much complexity has been removed or replaced, so that the underlying complexity becomes difficult to leverage. The risk with over-abstraction is that we either remove too much complexity in favor of simplicity or we add new unnecessary complexity that confuses the user of our abstraction.

For example, say that we are in need of a gallery abstraction that we want to use to display a gallery on both our website and various mobile applications.

Our initial requirements for the gallery are quite simple:

- The ability to display one or more images
- The ability to display captions alongside images
- The ability to control the dimensions of individual images

An external team has created a Gallery component for us to use:

```javascript
const gallery = new GalleryComponent(
    [
        new GalleryComponentImage(
            new GalleryComponentImage.PathOfImage('JPEG',
                '/foo/images/Picture1.jpg'),
            new GalleryComponentImage.Options({
                imageDimensionWidth: { unit: 'px', amount: 200 },
                imageDimensionHeight: { unit: 'px', amount: 150 },
                customStyleStrings: ['border::yellow::1px']
            }),
            [
                new GalleryComponentImage.SubBorderCaptionElementWithText({
                    content: { e: 'paragraph', t: 'The caption for this employee' }
                })
            ]
    }),
new GalleryComponentImage(
    new GalleryComponentImage.PathOfImage('JPEG',
        '/foo/images/Picture2.jpg'),
    new GalleryComponentImage.Options({
        imageDimensionWidth: { unit: 'px', amount: 200 },
        imageDimensionHeight: { unit: 'px', amount: 150 },
        customStyleStrings: ['border::yellow::1px']
    }),
    [
        new GalleryComponentImage.SubBorderCaptionElementWithText({
            content: { e: 'paragraph', t: 'The caption for this employee' }
        })
    ]
    })
    ]
    )
```

This interface seems very complex for the basic purpose of only displaying a couple of images. It does technically fulfill our requirements, but we must navigate its realm of complexity to
achieve what we want.

Over-abstraction can, curiously, also take the form of over-simplification, where levers to the underlying complexity are not made available to us. An oversimplified version of our _GalleryComponent_ interface may look like the following:

```javascript
const gallery = new GalleryComponent(
  "/foo/images/PictureOne.jpg",
  "/foo/images/PictureTwo.jpg"
);
```

In this case, the lever is just too simple, only providing very limited leverage for the complexity that we wish to harness. It does not allow us to add captions or control image dimensions; it only allows us to list a set of images, nothing more.
