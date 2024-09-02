const gallery = new GalleryComponent({
    web: [
        () => {
            const el = document.createElement('div');
            el.className = 'gallery-container';
            return el;
        },
        {
            data: [
                `<img src="/foo/images/PictureOne.jpg" width=200 height=150 />
    <span>The caption</span>`,
                `<img src="/foo/images/PictureTwo.jpg" width=200 height=150 />
    <span>The caption</span>`
            ]
        }
    ],
    android: [
        (view, galleryPrepData) => {
            view.setHasFixedSize(true);
            view.setLayoutManager(new
                GridLayoutManager(getApplicationContext(), 2));
            return new MyAdapter(getApplicationContext(), galleryPrepData());
        },
        {
            data: [
                ['/foo/images/PictureOne.jpg', 200, 150, 'The Caption']
                ['/foo/images/PictureTwo.jpg', 200, 150, 'The Caption']
            ]
        }
    ]
});