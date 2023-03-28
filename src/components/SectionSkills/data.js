import {
    generateKey
} from '../../utils/helpers/GenerateKey';

export const accordions = [{
        id: generateKey(),
        toggle: 'frontend',
        collapse: [{
                id: generateKey(),
                name: 'HTML',
                values: [],
            },
            {
                id: generateKey(),
                name: 'CSS',
                values: [{
                        id: generateKey(),
                        name: 'Bootstrap',
                        values: [],
                    },
                    {
                        id: generateKey(),
                        name: 'Sass',
                        values: [],
                    },
                    {
                        id: generateKey(),
                        name: 'BEM',
                        values: [],
                    },
                ],
            },
            {
                id: generateKey(),
                name: 'JavaScript',
                values: [{
                        id: generateKey(),
                        name: 'React',
                        values: [{
                                id: generateKey(),
                                name: ['Redux', 'Redux Toolkit'],
                                values: [],
                            },
                            {
                                id: generateKey(),
                                name: 'React-router',
                                values: [],
                            },
                            {
                                id: generateKey(),
                                name: 'Styled components',
                                values: [],
                            },
                            {
                                id: generateKey(),
                                name: 'Formik',
                                values: [],
                            },
                            {
                                id: generateKey(),
                                name: 'Yup',
                                values: [],
                            },
                        ],
                    },
                    {
                        id: generateKey(),
                        name: 'GSAP3',
                        values: [],
                    },
                ],
            },
        ],
    },
    {
        id: generateKey(),
        toggle: 'backend',
        collapse: [{
                id: generateKey(),
                name: 'NodeJS',
                values: [{
                        id: generateKey(),
                        name: 'Express',
                        values: [],
                    },
                    {
                        id: generateKey(),
                        name: 'Swagger',
                        values: [],
                    },
                    {
                        id: generateKey(),
                        name: 'JSON Web Token',
                        values: [],
                    },
                    {
                        id: generateKey(),
                        name: 'Bcrypt',
                        values: [],
                    },
                    {
                        id: generateKey(),
                        name: 'Multer',
                        values: [],
                    },
                    {
                        id: generateKey(),
                        name: ['Morgan', 'Winston'],
                        values: [],
                    },
                    {
                        id: generateKey(),
                        name: ['Pug', 'EJS'],
                        values: [],
                    },
                ],
            },
            {
                id: generateKey(),
                name: 'MongoDB',
                values: [{
                    id: generateKey(),
                    name: 'Mongoose',
                    values: [],
                }, ],
            },
        ],
    },
    {
        id: generateKey(),
        toggle: 'SEO',
        collapse: [{
                id: generateKey(),
                name: 'Lighthouse',
                values: [],
            },
            {
                id: generateKey(),
                name: 'Google rich snippet',
                values: [],
            },
            {
                id: generateKey(),
                name: 'Wave',
                values: [],
            },
            {
                id: generateKey(),
                name: 'Schema.org',
                values: [],
            },
            {
                id: generateKey(),
                name: 'Aria',
                values: [],
            },
        ],
    },
    {
        id: generateKey(),
        toggle: 'Design',
        collapse: [{
                id: generateKey(),
                name: ['Figma', 'Xd'],
                values: [],
            },
            {
                id: generateKey(),
                name: 'Photoshop',
                values: [],
            },
            {
                id: generateKey(),
                name: 'Illustrator',
                values: [],
            },
        ],
    },
];