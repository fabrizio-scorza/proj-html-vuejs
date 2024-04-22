import { reactive } from 'vue';

export const store = reactive({
    headerLinks: [
        {
            id: 0,
            svg: '/svg/svg-0.svg',
            type: 'link',
            name: 'home',
            href: '#',
        },
        {
            id: 1,
            type: 'link',
            name: 'pages',
            href: '#',
        },
        {
            id: 2,
            type: 'link',
            name: 'menu',
            href: '#',
        },
        {
            id: 3,
            img: '/img/h5-logo-divided-header.png',
            type: 'logo',
        },
        {
            id: 4,
            type: 'link',
            name: 'event',
            href: '#',
        },
        {
            id: 5,
            type: 'link',
            name: 'blog',
            href: '#',
        },
        {
            id: 6,
            type: 'link',
            name: 'landing',
            href: '#',
        }
    ],
    headerActions: [
        {
            id: 0,
            svg: '/svg/svg-1.svg',
            type: 'link',
            name: 'cart',
            href: '#',
        },
        {
            id: 1,
            svg: '/svg/svg-12.svg',
            type: 'link',
            name: 'search',
            href: '#',
        },
    ]


})