import { reactive } from 'vue';

//store che contiene i dati per popolare header e footer
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
    restaurants: [
        {
            address: '1614 E. Bell Rd #104',
            city: 'Salerno, AZ 85022',
            number: '(602)867-1010',
        },
        {
            address: '204 E. Pizzetta Tommaso',
            city: 'Sorrento, AZ 85022',
            number: '(358)867-1010',
        },
        {
            address: 'Vale Puglia 54',
            city: 'Torre Del Greco AZ 85022',
            number: '(359)867-1010',
        },
        {
            address: 'Corso Itali AA',
            city: 'Naples, AZ 85022',
            number: '(989)867-1010',
        }
    ]
})