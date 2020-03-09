(function () {
    const list = [
        {
            text: '啦啦啦',
            image: '/avatar.jpg',
        },
        {
            text: '啦啦啦2',
            image: '/avatar.jpg',
        },
        {
            text: '啦啦啦3',
            image: '/avatar.jpg',
        },
        {
            text: '啦啦啦',
            image: '/avatar.jpg',
        },
        {
            text: '啦啦啦',
            image: '/avatar.jpg',
        },
    ]
    window.root0 = {
        x: 0,
        y: 0,
        width: 750,
        height: 1334,
        color: '#fff',
        children: [
            {
                width: '100%',
                height: 56,
                color: '#000',
            },
            {
                width: '100%',
                height: 290,
                children: [
                    {
                        relative: 'parent',
                        top: 60,
                        left: 70,
                        type: 'image',
                        width: 128,
                        height: 128,
                        url: '/avatar.jpg',
                    },
                ]
            },
            {
                width: '100%',
                height: 110,
                color: '#000',
            },
            {
                width: '100%',
                height: 290,
                layout: 'x',
                children: list.map(item => {
                    return {
                        width: '25%',
                        height: 250,
                        children: [
                            {
                                relative: 'parent',
                                left: 20,
                                top: 20,
                                type: 'image',
                                width: 128,
                                height: 128,
                                url: '/avatar.jpg',
                            },
                            {
                                type: 'text',
                                text: item.text,
                                relative: 'parent',
                                left: 20,
                                top: 180,
                                textSize: 24,
                                // text: '124',
                                // width: 128,
                                // height: 128,
                                // url: '/avatar.jpg',
                            },
                        ]
                    }
                })
            },
        ]
    }
})()
