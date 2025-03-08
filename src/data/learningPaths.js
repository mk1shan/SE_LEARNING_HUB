export const learningPaths = {
    'software-engineering': {
        title: 'Software Engineering',
        description: 'Master the fundamentals and advanced concepts of Software Engineering',
        url: '/path-template?path=software-engineering',
        isPath: true,
        isClickable: true,
        sections: [
            {
                title: 'Programming Fundamentals',
                resources: [
                    {
                        name: 'Python Programming',
                        url: '/language-template?lang=python',
                        type: 'language',
                        platform: 'Python',
                        isLanguage: true,
                        description: 'Master Python programming from basics to advanced'
                    },
                    {
                        name: 'JavaScript Development',
                        url: '/language-template?lang=javascript',
                        type: 'language',
                        platform: 'JavaScript',
                        isLanguage: true,
                        description: 'Learn modern JavaScript development'
                    },
                    {
                        name: 'Java Programming',
                        url: '/language-template?lang=java',
                        type: 'language',
                        platform: 'Java',
                        isLanguage: true,
                        description: 'Master Java development'
                    },
                    {
                        name: 'C++ Programming',
                        url: '/language-template?lang=cpp',
                        type: 'language',
                        platform: 'C++',
                        isLanguage: true,
                        description: 'Learn modern C++ programming'
                    },
                    {
                        name: 'C# Development',
                        url: '/language-template?lang=csharp',
                        type: 'language',
                        platform: 'C#',
                        isLanguage: true,
                        description: 'Master C# and .NET development'
                    },
                    {
                        name: 'Ruby Programming',
                        url: '/language-template?lang=ruby',
                        type: 'language',
                        platform: 'Ruby',
                        isLanguage: true,
                        description: 'Learn Ruby and Rails development'
                    }
                ]
            },
            {
                title: 'Software Engineering Principles',
                resources: [
                    {
                        name: 'Design Patterns',
                        url: 'https://refactoring.guru/design-patterns',
                        type: 'documentation',
                        platform: 'Refactoring Guru'
                    },
                    {
                        name: 'Clean Code Principles',
                        url: 'https://www.youtube.com/watch?v=7EmboKQH8lM',
                        type: 'video',
                        platform: 'YouTube'
                    },
                    {
                        name: 'SOLID Principles',
                        url: 'https://www.digitalocean.com/community/conceptual-articles/s-o-l-i-d-the-first-five-principles-of-object-oriented-design',
                        type: 'article',
                        platform: 'DigitalOcean'
                    },
                    {
                        name: 'System Design Primer',
                        url: 'https://github.com/donnemartin/system-design-primer',
                        type: 'documentation',
                        platform: 'GitHub'
                    }
                ]
            },
            {
                title: 'Web Development',
                resources: [
                    {
                        name: 'Full Stack Open',
                        url: 'https://fullstackopen.com/',
                        type: 'course',
                        platform: 'University of Helsinki'
                    },
                    {
                        name: 'React Documentation',
                        url: 'https://react.dev/',
                        type: 'documentation',
                        platform: 'React'
                    },
                    {
                        name: 'Node.js Learning',
                        url: 'https://nodejs.dev/learn',
                        type: 'tutorial',
                        platform: 'Node.js'
                    },
                    {
                        name: 'Frontend Development',
                        url: 'https://roadmap.sh/frontend',
                        type: 'path',
                        platform: 'Web Development',
                        description: 'Learn modern frontend development'
                    },
                    {
                        name: 'Backend Development',
                        url: 'https://roadmap.sh/backend',
                        type: 'path',
                        platform: 'Web Development',
                        description: 'Master backend development and APIs'
                    },
                    {
                        name: 'Full Stack Development',
                        url: 'https://www.theodinproject.com/paths/full-stack-javascript',
                        type: 'path',
                        platform: 'Web Development',
                        description: 'Become a full stack developer'
                    },
                    {
                        name: 'DevOps & Deployment',
                        url: 'https://roadmap.sh/devops',
                        type: 'path',
                        platform: 'Web Development',
                        description: 'Learn DevOps practices and deployment'
                    }
                ]
            },
            {
                title: 'Database Systems',
                resources: [
                    {
                        name: 'SQL Tutorial',
                        url: 'https://www.sqlzoo.net/',
                        type: 'interactive',
                        platform: 'SQLZoo'
                    },
                    {
                        name: 'MongoDB University',
                        url: 'https://university.mongodb.com/',
                        type: 'course',
                        platform: 'MongoDB'
                    },
                    {
                        name: 'Database Design',
                        url: 'https://www.postgresql.org/docs/current/tutorial.html',
                        type: 'documentation',
                        platform: 'PostgreSQL'
                    },
                    {
                        name: 'SQL Databases',
                        url: 'https://www.postgresqltutorial.com/',
                        type: 'path',
                        platform: 'Databases',
                        description: 'Master SQL and relational databases'
                    },
                    {
                        name: 'NoSQL Databases',
                        url: 'https://university.mongodb.com/learning_paths/developer',
                        type: 'path',
                        platform: 'Databases',
                        description: 'Learn NoSQL database systems'
                    }
                ]
            },
            {
                title: 'Modern Development Practices',
                resources: [
                    {
                        name: 'Agile Development',
                        url: 'https://www.atlassian.com/agile',
                        type: 'guide',
                        platform: 'Atlassian'
                    },
                    {
                        name: 'Microservices Architecture',
                        url: 'https://microservices.io/',
                        type: 'documentation',
                        platform: 'microservices.io'
                    },
                    {
                        name: 'Domain-Driven Design',
                        url: 'https://martinfowler.com/bliki/DomainDrivenDesign.html',
                        type: 'article',
                        platform: 'Martin Fowler'
                    }
                ]
            },
            {
                title: 'Security Engineering',
                resources: [
                    {
                        name: 'OWASP Top 10',
                        url: 'https://owasp.org/www-project-top-ten/',
                        type: 'documentation',
                        platform: 'OWASP'
                    },
                    {
                        name: 'Web Security Academy',
                        url: 'https://portswigger.net/web-security',
                        type: 'course',
                        platform: 'PortSwigger'
                    },
                    {
                        name: 'Secure Coding Guidelines',
                        url: 'https://wiki.sei.cmu.edu/confluence/display/seccode',
                        type: 'documentation',
                        platform: 'SEI CERT'
                    }
                ]
            },
            {
                title: 'Software Architecture',
                resources: [
                    {
                        name: 'Clean Architecture',
                        url: 'https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html',
                        type: 'article',
                        platform: 'Clean Coder'
                    },
                    {
                        name: 'Software Architecture Patterns',
                        url: 'https://www.oreilly.com/library/view/software-architecture-patterns/9781491971437/',
                        type: 'book',
                        platform: "O'Reilly"
                    },
                    {
                        name: 'Architecture Decision Records',
                        url: 'https://adr.github.io/',
                        type: 'documentation',
                        platform: 'ADR'
                    },
                    {
                        name: 'Design Patterns',
                        url: 'https://refactoring.guru/design-patterns',
                        type: 'path',
                        platform: 'Software Design',
                        description: 'Learn common software design patterns'
                    },
                    {
                        name: 'System Architecture',
                        url: 'https://www.educative.io/path/scalability-system-design',
                        type: 'path',
                        platform: 'Software Design',
                        description: 'Master system architecture principles'
                    },
                    {
                        name: 'Clean Code',
                        url: 'https://clean-code-developer.com/',
                        type: 'path',
                        platform: 'Software Design',
                        description: 'Write maintainable and clean code'
                    }
                ]
            }
        ]
    },
    'frontend': {
        title: 'Frontend Development',
        description: 'Master modern frontend development technologies and frameworks',
        url: '/path-template?path=frontend',
        isPath: true,
        isClickable: true,
        sections: [
            {
                title: 'HTML & CSS Fundamentals',
                resources: [
                    {
                        name: 'MDN Web Docs - HTML',
                        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
                        type: 'documentation',
                        platform: 'MDN'
                    },
                    {
                        name: 'CSS Fundamentals',
                        url: 'https://css-tricks.com/guides/',
                        type: 'tutorial',
                        platform: 'CSS-Tricks'
                    },
                    {
                        name: 'Learn HTML & CSS',
                        url: 'https://www.codecademy.com/learn/learn-html',
                        type: 'course',
                        platform: 'Codecademy'
                    },
                    {
                        name: 'Frontend Masters - HTML & CSS',
                        url: 'https://frontendmasters.com/courses/html-css-basics/',
                        type: 'course',
                        platform: 'Frontend Masters'
                    },
                    {
                        name: 'Web.dev CSS Course',
                        url: 'https://web.dev/learn/css/',
                        type: 'documentation',
                        platform: 'Google'
                    }
                ]
            },
            {
                title: 'JavaScript Frameworks',
                resources: [
                    {
                        name: 'React Documentation',
                        url: 'https://react.dev/',
                        type: 'documentation',
                        platform: 'React'
                    },
                    {
                        name: 'Vue.js Guide',
                        url: 'https://vuejs.org/guide/introduction.html',
                        type: 'documentation',
                        platform: 'Vue.js'
                    },
                    {
                        name: 'Angular Tutorial',
                        url: 'https://angular.io/tutorial',
                        type: 'tutorial',
                        platform: 'Angular'
                    },
                    {
                        name: 'Next.js Documentation',
                        url: 'https://nextjs.org/docs',
                        type: 'documentation',
                        platform: 'Next.js'
                    },
                    {
                        name: 'Svelte Tutorial',
                        url: 'https://svelte.dev/tutorial',
                        type: 'tutorial',
                        platform: 'Svelte'
                    }
                ]
            },
            {
                title: 'State Management',
                resources: [
                    {
                        name: 'Redux Documentation',
                        url: 'https://redux.js.org/',
                        type: 'documentation',
                        platform: 'Redux'
                    },
                    {
                        name: 'Vuex Guide',
                        url: 'https://vuex.vuejs.org/',
                        type: 'documentation',
                        platform: 'Vuex'
                    },
                    {
                        name: 'MobX Documentation',
                        url: 'https://mobx.js.org/',
                        type: 'documentation',
                        platform: 'MobX'
                    },
                    {
                        name: 'React Query',
                        url: 'https://tanstack.com/query/latest',
                        type: 'documentation',
                        platform: 'TanStack'
                    },
                    {
                        name: 'XState Documentation',
                        url: 'https://xstate.js.org/docs/',
                        type: 'documentation',
                        platform: 'XState'
                    }
                ]
            },
            {
                title: 'Web Performance',
                resources: [
                    {
                        name: 'Web Vitals',
                        url: 'https://web.dev/vitals/',
                        type: 'documentation',
                        platform: 'Google'
                    },
                    {
                        name: 'Performance Testing',
                        url: 'https://developers.google.com/web/tools/lighthouse',
                        type: 'tool',
                        platform: 'Google'
                    },
                    {
                        name: 'Frontend Performance',
                        url: 'https://frontendmasters.com/courses/web-performance/',
                        type: 'course',
                        platform: 'Frontend Masters'
                    }
                ]
            },
            {
                title: 'Modern Frontend Tools',
                resources: [
                    {
                        name: 'Webpack Guide',
                        url: 'https://webpack.js.org/guides/',
                        type: 'documentation',
                        platform: 'Webpack'
                    },
                    {
                        name: 'Vite Documentation',
                        url: 'https://vitejs.dev/guide/',
                        type: 'documentation',
                        platform: 'Vite'
                    },
                    {
                        name: 'TypeScript Handbook',
                        url: 'https://www.typescriptlang.org/docs/',
                        type: 'documentation',
                        platform: 'TypeScript'
                    }
                ]
            }
        ]
    },
    'backend': {
        title: 'Backend Development',
        description: 'Master backend development and API design',
        url: '/path-template?path=backend',
        isPath: true,
        isClickable: true,
        sections: [
            {
                title: 'Server-side Programming',
                resources: [
                    {
                        name: 'Node.js Documentation',
                        url: 'https://nodejs.org/en/docs/',
                        type: 'documentation',
                        platform: 'Node.js'
                    },
                    {
                        name: 'Express.js Guide',
                        url: 'https://expressjs.com/guide/routing.html',
                        type: 'documentation',
                        platform: 'Express'
                    },
                    {
                        name: 'Django Documentation',
                        url: 'https://docs.djangoproject.com/',
                        type: 'documentation',
                        platform: 'Django'
                    },
                    {
                        name: 'Spring Framework',
                        url: 'https://spring.io/guides',
                        type: 'documentation',
                        platform: 'Spring'
                    },
                    {
                        name: 'Laravel Documentation',
                        url: 'https://laravel.com/docs',
                        type: 'documentation',
                        platform: 'Laravel'
                    }
                ]
            },
            {
                title: 'API Development',
                resources: [
                    {
                        name: 'REST API Design',
                        url: 'https://restfulapi.net/',
                        type: 'documentation',
                        platform: 'REST API Tutorial'
                    },
                    {
                        name: 'GraphQL Documentation',
                        url: 'https://graphql.org/learn/',
                        type: 'documentation',
                        platform: 'GraphQL'
                    },
                    {
                        name: 'OpenAPI Specification',
                        url: 'https://swagger.io/specification/',
                        type: 'documentation',
                        platform: 'Swagger'
                    },
                    {
                        name: 'gRPC Documentation',
                        url: 'https://grpc.io/docs/',
                        type: 'documentation',
                        platform: 'gRPC'
                    },
                    {
                        name: 'API Security Best Practices',
                        url: 'https://owasp.org/www-project-api-security/',
                        type: 'documentation',
                        platform: 'OWASP'
                    }
                ]
            },
            {
                title: 'Database Management',
                resources: [
                    {
                        name: 'Database Design',
                        url: 'https://www.postgresql.org/docs/current/tutorial.html',
                        type: 'documentation',
                        platform: 'PostgreSQL'
                    },
                    {
                        name: 'MongoDB University',
                        url: 'https://university.mongodb.com/',
                        type: 'course',
                        platform: 'MongoDB'
                    },
                    {
                        name: 'Redis Documentation',
                        url: 'https://redis.io/documentation',
                        type: 'documentation',
                        platform: 'Redis'
                    }
                ]
            },
            {
                title: 'Security & Authentication',
                resources: [
                    {
                        name: 'OAuth 2.0',
                        url: 'https://oauth.net/2/',
                        type: 'documentation',
                        platform: 'OAuth'
                    },
                    {
                        name: 'JWT Authentication',
                        url: 'https://jwt.io/introduction',
                        type: 'documentation',
                        platform: 'JWT'
                    },
                    {
                        name: 'Web Security Guide',
                        url: 'https://infosec.mozilla.org/guidelines/web_security.html',
                        type: 'guide',
                        platform: 'Mozilla'
                    }
                ]
            },
            {
                title: 'System Architecture',
                resources: [
                    {
                        name: 'Microservices Guide',
                        url: 'https://microservices.io/patterns/index.html',
                        type: 'documentation',
                        platform: 'Microservices.io'
                    },
                    {
                        name: 'Event-Driven Architecture',
                        url: 'https://docs.microsoft.com/en-us/azure/architecture/guide/architecture-styles/event-driven',
                        type: 'documentation',
                        platform: 'Microsoft'
                    },
                    {
                        name: 'Clean Architecture',
                        url: 'https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html',
                        type: 'article',
                        platform: 'Clean Coder'
                    }
                ]
            }
        ]
    },
    'ui-ux': {
        title: 'UI/UX Design',
        description: 'Learn user interface and user experience design principles and tools',
        url: '/path-template?path=ui-ux',
        isPath: true,
        isClickable: true,
        sections: [
            {
                title: 'Design Fundamentals',
                resources: [
                    {
                        name: 'UI Design Basics',
                        url: 'https://www.coursera.org/learn/ui-design',
                        type: 'course',
                        platform: 'Coursera'
                    },
                    {
                        name: 'Design Principles',
                        url: 'https://www.interaction-design.org/literature/topics/design-principles',
                        type: 'article',
                        platform: 'Interaction Design Foundation'
                    },
                    {
                        name: 'Color Theory',
                        url: 'https://www.canva.com/learn/color-theory/',
                        type: 'guide',
                        platform: 'Canva'
                    }
                ]
            },
            {
                title: 'UX Design',
                resources: [
                    {
                        name: 'User Research',
                        url: 'https://www.nngroup.com/articles/user-research-methods/',
                        type: 'article',
                        platform: 'Nielsen Norman Group'
                    },
                    {
                        name: 'Usability Testing',
                        url: 'https://www.usability.gov/how-to-and-tools/methods/usability-testing.html',
                        type: 'guide',
                        platform: 'Usability.gov'
                    },
                    {
                        name: 'Information Architecture',
                        url: 'https://www.uxbooth.com/articles/complete-beginners-guide-to-information-architecture/',
                        type: 'article',
                        platform: 'UX Booth'
                    }
                ]
            },
            {
                title: 'Design Tools',
                resources: [
                    {
                        name: 'Figma Tutorial',
                        url: 'https://www.figma.com/resources/learn-design/',
                        type: 'tutorial',
                        platform: 'Figma'
                    },
                    {
                        name: 'Adobe XD Basics',
                        url: 'https://www.adobe.com/products/xd/learn.html',
                        type: 'tutorial',
                        platform: 'Adobe'
                    },
                    {
                        name: 'Sketch Essentials',
                        url: 'https://www.sketch.com/docs/',
                        type: 'documentation',
                        platform: 'Sketch'
                    }
                ]
            },
            {
                title: 'User Research & Testing',
                resources: [
                    {
                        name: 'UX Research Guide',
                        url: 'https://www.uxmatters.com/topics/research/',
                        type: 'guide',
                        platform: 'UX Matters'
                    },
                    {
                        name: 'User Testing Methods',
                        url: 'https://www.hotjar.com/usability-testing/',
                        type: 'guide',
                        platform: 'Hotjar'
                    },
                    {
                        name: 'UX Research Tools',
                        url: 'https://maze.co/guides/ux-research/',
                        type: 'documentation',
                        platform: 'Maze'
                    }
                ]
            },
            {
                title: 'Design Systems & Patterns',
                resources: [
                    {
                        name: 'Design System Handbook',
                        url: 'https://www.designbetter.co/design-systems-handbook',
                        type: 'book',
                        platform: 'InVision'
                    },
                    {
                        name: 'Material Design System',
                        url: 'https://material.io/design',
                        type: 'documentation',
                        platform: 'Google'
                    },
                    {
                        name: 'Apple Human Interface Guidelines',
                        url: 'https://developer.apple.com/design/human-interface-guidelines/',
                        type: 'documentation',
                        platform: 'Apple'
                    }
                ]
            }
        ]
    },
    'qa-testing': {
        title: 'Quality Assurance & Testing',
        description: 'Master software testing and quality assurance practices',
        url: '/path-template?path=qa-testing',
        isPath: true,
        isClickable: true,
        sections: [
            {
                title: 'Testing Fundamentals',
                resources: [
                    {
                        name: 'Software Testing Basics',
                        url: 'https://www.guru99.com/software-testing-introduction-importance.html',
                        type: 'tutorial',
                        platform: 'Guru99'
                    },
                    {
                        name: 'Test Case Writing',
                        url: 'https://www.qasymphony.com/blog/write-test-cases/',
                        type: 'guide',
                        platform: 'QASymphony'
                    },
                    {
                        name: 'Testing Types',
                        url: 'https://www.softwaretestinghelp.com/types-of-software-testing/',
                        type: 'article',
                        platform: 'Software Testing Help'
                    }
                ]
            },
            {
                title: 'Automation Testing',
                resources: [
                    {
                        name: 'Selenium WebDriver',
                        url: 'https://www.selenium.dev/documentation/webdriver/',
                        type: 'documentation',
                        platform: 'Selenium'
                    },
                    {
                        name: 'Cypress Testing',
                        url: 'https://docs.cypress.io/',
                        type: 'documentation',
                        platform: 'Cypress'
                    },
                    {
                        name: 'JUnit Tutorial',
                        url: 'https://junit.org/junit5/docs/current/user-guide/',
                        type: 'documentation',
                        platform: 'JUnit'
                    }
                ]
            },
            {
                title: 'Performance Testing',
                resources: [
                    {
                        name: 'JMeter Tutorial',
                        url: 'https://jmeter.apache.org/usermanual/index.html',
                        type: 'documentation',
                        platform: 'Apache'
                    },
                    {
                        name: 'Load Testing Basics',
                        url: 'https://www.blazemeter.com/blog/load-testing',
                        type: 'article',
                        platform: 'BlazeMeter'
                    }
                ]
            },
            {
                title: 'API Testing',
                resources: [
                    {
                        name: 'Postman Testing',
                        url: 'https://learning.postman.com/docs/writing-scripts/test-scripts/',
                        type: 'documentation',
                        platform: 'Postman'
                    },
                    {
                        name: 'REST Assured',
                        url: 'https://rest-assured.io/',
                        type: 'documentation',
                        platform: 'REST Assured'
                    },
                    {
                        name: 'GraphQL Testing',
                        url: 'https://www.apollographql.com/docs/studio/explorer/testing/',
                        type: 'documentation',
                        platform: 'Apollo'
                    }
                ]
            },
            {
                title: 'Security Testing',
                resources: [
                    {
                        name: 'OWASP Testing Guide',
                        url: 'https://owasp.org/www-project-web-security-testing-guide/',
                        type: 'guide',
                        platform: 'OWASP'
                    },
                    {
                        name: 'Penetration Testing',
                        url: 'https://www.hackthebox.com/',
                        type: 'interactive',
                        platform: 'HackTheBox'
                    }
                ]
            }
        ]
    },
    'data-structures': {
        title: 'Data Structures & Algorithms',
        description: 'Master essential data structures and algorithms for efficient problem-solving',
        url: '/path-template?path=data-structures',
        isPath: true,
        isClickable: true,
        sections: [
            {
                title: 'Basic Data Structures',
                resources: [
                    {
                        name: 'Arrays & Strings',
                        url: 'https://www.geeksforgeeks.org/array-data-structure/',
                        type: 'tutorial',
                        platform: 'GeeksforGeeks'
                    },
                    {
                        name: 'Linked Lists',
                        url: 'https://www.programiz.com/dsa/linked-list',
                        type: 'tutorial',
                        platform: 'Programiz'
                    },
                    {
                        name: 'Stacks & Queues',
                        url: 'https://www.coursera.org/lecture/data-structures/stacks-UdKzQ',
                        type: 'video',
                        platform: 'Coursera'
                    }
                ]
            },
            {
                title: 'Advanced Data Structures',
                resources: [
                    {
                        name: 'Trees & Graphs',
                        url: 'https://www.educative.io/courses/data-structures-coding-interviews-python',
                        type: 'course',
                        platform: 'Educative'
                    },
                    {
                        name: 'Hash Tables',
                        url: 'https://www.hackerearth.com/practice/data-structures/hash-tables/basics-of-hash-tables/',
                        type: 'tutorial',
                        platform: 'HackerEarth'
                    }
                ]
            },
            {
                title: 'Algorithms',
                resources: [
                    {
                        name: 'Sorting Algorithms',
                        url: 'https://visualgo.net/en/sorting',
                        type: 'interactive',
                        platform: 'VisuAlgo'
                    },
                    {
                        name: 'Graph Algorithms',
                        url: 'https://www.khanacademy.org/computing/computer-science/algorithms',
                        type: 'course',
                        platform: 'Khan Academy'
                    },
                    {
                        name: 'Dynamic Programming',
                        url: 'https://www.topcoder.com/community/competitive-programming/tutorials/dynamic-programming-from-novice-to-advanced/',
                        type: 'tutorial',
                        platform: 'TopCoder'
                    }
                ]
            },
            {
                title: 'Interview Preparation',
                resources: [
                    {
                        name: 'Coding Interview University',
                        url: 'https://github.com/jwasham/coding-interview-university',
                        type: 'guide',
                        platform: 'GitHub'
                    },
                    {
                        name: 'System Design Interview',
                        url: 'https://github.com/donnemartin/system-design-primer',
                        type: 'documentation',
                        platform: 'GitHub'
                    },
                    {
                        name: 'AlgoExpert',
                        url: 'https://www.algoexpert.io/',
                        type: 'practice',
                        platform: 'AlgoExpert'
                    }
                ]
            },
            {
                title: 'Competitive Programming',
                resources: [
                    {
                        name: 'Codeforces',
                        url: 'https://codeforces.com/',
                        type: 'practice',
                        platform: 'Codeforces'
                    },
                    {
                        name: 'AtCoder',
                        url: 'https://atcoder.jp/',
                        type: 'practice',
                        platform: 'AtCoder'
                    }
                ]
            }
        ]
    },
    'mobile-development': {
        title: 'Mobile Development',
        description: 'Build modern mobile applications for iOS and Android platforms',
        url: '/path-template?path=mobile-development',
        isPath: true,
        isClickable: true,
        sections: [
            {
                title: 'Cross-Platform Development',
                resources: [
                    {
                        name: 'React Native',
                        url: 'https://reactnative.dev/docs/getting-started',
                        type: 'documentation',
                        platform: 'React Native'
                    },
                    {
                        name: 'Flutter',
                        url: 'https://flutter.dev/docs',
                        type: 'documentation',
                        platform: 'Flutter'
                    },
                    {
                        name: 'Ionic Framework',
                        url: 'https://ionicframework.com/docs',
                        type: 'documentation',
                        platform: 'Ionic'
                    }
                ]
            },
            {
                title: 'iOS Development',
                resources: [
                    {
                        name: 'iOS App Development',
                        url: 'https://developer.apple.com/tutorials/app-dev-training',
                        type: 'tutorial',
                        platform: 'Apple'
                    },
                    {
                        name: 'Swift Programming',
                        url: 'https://docs.swift.org/swift-book/',
                        type: 'documentation',
                        platform: 'Swift'
                    }
                ]
            },
            {
                title: 'Android Development',
                resources: [
                    {
                        name: 'Android Basics',
                        url: 'https://developer.android.com/courses',
                        type: 'course',
                        platform: 'Android'
                    },
                    {
                        name: 'Kotlin Programming',
                        url: 'https://kotlinlang.org/docs/tutorials/',
                        type: 'documentation',
                        platform: 'Kotlin'
                    }
                ]
            },
            {
                title: 'Mobile Design & UX',
                resources: [
                    {
                        name: 'Mobile UX Design',
                        url: 'https://www.interaction-design.org/courses/mobile-user-experience-design',
                        type: 'course',
                        platform: 'Interaction Design Foundation'
                    },
                    {
                        name: 'iOS Design Guidelines',
                        url: 'https://developer.apple.com/design/human-interface-guidelines/ios/',
                        type: 'documentation',
                        platform: 'Apple'
                    },
                    {
                        name: 'Material Design for Android',
                        url: 'https://material.io/develop/android',
                        type: 'documentation',
                        platform: 'Google'
                    }
                ]
            },
            {
                title: 'App Performance & Security',
                resources: [
                    {
                        name: 'Mobile App Security',
                        url: 'https://owasp.org/www-project-mobile-security/',
                        type: 'documentation',
                        platform: 'OWASP'
                    },
                    {
                        name: 'App Performance Testing',
                        url: 'https://firebase.google.com/docs/perf-mon',
                        type: 'documentation',
                        platform: 'Firebase'
                    }
                ]
            }
        ]
    },
    'devops': {
        title: 'DevOps & Cloud',
        description: 'Learn modern DevOps practices and cloud technologies',
        url: '/path-template?path=devops',
        isPath: true,
        isClickable: true,
        sections: [
            {
                title: 'CI/CD',
                resources: [
                    {
                        name: 'Jenkins Tutorial',
                        url: 'https://www.jenkins.io/doc/tutorials/',
                        type: 'documentation',
                        platform: 'Jenkins'
                    },
                    {
                        name: 'GitHub Actions',
                        url: 'https://docs.github.com/en/actions',
                        type: 'documentation',
                        platform: 'GitHub'
                    }
                ]
            },
            {
                title: 'Cloud Platforms',
                resources: [
                    {
                        name: 'AWS Basics',
                        url: 'https://aws.amazon.com/getting-started/',
                        type: 'documentation',
                        platform: 'AWS'
                    },
                    {
                        name: 'Azure Fundamentals',
                        url: 'https://docs.microsoft.com/en-us/learn/azure/',
                        type: 'documentation',
                        platform: 'Microsoft'
                    },
                    {
                        name: 'Google Cloud',
                        url: 'https://cloud.google.com/training',
                        type: 'course',
                        platform: 'Google'
                    }
                ]
            },
            {
                title: 'Container Orchestration',
                resources: [
                    {
                        name: 'Docker Tutorial',
                        url: 'https://docs.docker.com/get-started/',
                        type: 'documentation',
                        platform: 'Docker'
                    },
                    {
                        name: 'Kubernetes Basics',
                        url: 'https://kubernetes.io/docs/tutorials/kubernetes-basics/',
                        type: 'tutorial',
                        platform: 'Kubernetes'
                    }
                ]
            },
            {
                title: 'Infrastructure as Code',
                resources: [
                    {
                        name: 'Terraform Learning',
                        url: 'https://learn.hashicorp.com/terraform',
                        type: 'documentation',
                        platform: 'HashiCorp'
                    },
                    {
                        name: 'Ansible Documentation',
                        url: 'https://docs.ansible.com/',
                        type: 'documentation',
                        platform: 'Red Hat'
                    },
                    {
                        name: 'Pulumi Getting Started',
                        url: 'https://www.pulumi.com/docs/get-started/',
                        type: 'documentation',
                        platform: 'Pulumi'
                    }
                ]
            },
            {
                title: 'Monitoring & Observability',
                resources: [
                    {
                        name: 'Prometheus & Grafana',
                        url: 'https://prometheus.io/docs/visualization/grafana/',
                        type: 'documentation',
                        platform: 'Prometheus'
                    },
                    {
                        name: 'ELK Stack',
                        url: 'https://www.elastic.co/guide/',
                        type: 'documentation',
                        platform: 'Elastic'
                    }
                ]
            }
        ]
    },
    'cloud-computing': {
        title: 'Cloud Computing',
        description: 'Learn cloud platforms and DevOps practices',
        url: '/path-template?path=cloud-computing',
        isPath: true,
        isClickable: true,
        sections: [
            {
                title: 'CI/CD',
                resources: [
                    {
                        name: 'Jenkins Tutorial',
                        url: 'https://www.jenkins.io/doc/tutorials/',
                        type: 'documentation',
                        platform: 'Jenkins'
                    },
                    {
                        name: 'GitHub Actions',
                        url: 'https://docs.github.com/en/actions',
                        type: 'documentation',
                        platform: 'GitHub'
                    }
                ]
            },
            {
                title: 'Cloud Platforms',
                resources: [
                    {
                        name: 'AWS Basics',
                        url: 'https://aws.amazon.com/getting-started/',
                        type: 'documentation',
                        platform: 'AWS'
                    },
                    {
                        name: 'Azure Fundamentals',
                        url: 'https://docs.microsoft.com/en-us/learn/azure/',
                        type: 'documentation',
                        platform: 'Microsoft'
                    },
                    {
                        name: 'Google Cloud',
                        url: 'https://cloud.google.com/training',
                        type: 'course',
                        platform: 'Google'
                    }
                ]
            },
            {
                title: 'Container Orchestration',
                resources: [
                    {
                        name: 'Docker Tutorial',
                        url: 'https://docs.docker.com/get-started/',
                        type: 'documentation',
                        platform: 'Docker'
                    },
                    {
                        name: 'Kubernetes Basics',
                        url: 'https://kubernetes.io/docs/tutorials/kubernetes-basics/',
                        type: 'tutorial',
                        platform: 'Kubernetes'
                    }
                ]
            },
            {
                title: 'Infrastructure as Code',
                resources: [
                    {
                        name: 'Terraform Learning',
                        url: 'https://learn.hashicorp.com/terraform',
                        type: 'documentation',
                        platform: 'HashiCorp'
                    },
                    {
                        name: 'Ansible Documentation',
                        url: 'https://docs.ansible.com/',
                        type: 'documentation',
                        platform: 'Red Hat'
                    },
                    {
                        name: 'Pulumi Getting Started',
                        url: 'https://www.pulumi.com/docs/get-started/',
                        type: 'documentation',
                        platform: 'Pulumi'
                    }
                ]
            },
            {
                title: 'Monitoring & Observability',
                resources: [
                    {
                        name: 'Prometheus & Grafana',
                        url: 'https://prometheus.io/docs/visualization/grafana/',
                        type: 'documentation',
                        platform: 'Prometheus'
                    },
                    {
                        name: 'ELK Stack',
                        url: 'https://www.elastic.co/guide/',
                        type: 'documentation',
                        platform: 'Elastic'
                    }
                ]
            }
        ]
    }
};

// Language specific resources structure
export const languageResources = {
    python: {
        title: 'Python Programming',
        description: 'Learn Python from beginner to expert level',
        levels: {
            beginner: {
                title: 'Beginner Level',
                resources: [
                    {
                        name: 'Python for Beginners',
                        url: 'https://www.python.org/about/gettingstarted/',
                        type: 'documentation',
                        platform: 'Python.org'
                    },
                    {
                        name: 'Python Basics',
                        url: 'https://www.w3schools.com/python/',
                        type: 'tutorial',
                        platform: 'W3Schools'
                    },
                    {
                        name: 'Python Crash Course',
                        url: 'https://ehmatthes.github.io/pcc/',
                        type: 'book',
                        platform: 'No Starch Press'
                    },
                    {
                        name: 'Python for Everybody',
                        url: 'https://www.py4e.com/',
                        type: 'course',
                        platform: 'PY4E'
                    }
                ]
            },
            intermediate: {
                title: 'Intermediate Level',
                resources: [
                    {
                        name: 'Python Standard Library',
                        url: 'https://docs.python.org/3/library/',
                        type: 'documentation',
                        platform: 'Python.org'
                    },
                    {
                        name: 'Python OOP',
                        url: 'https://realpython.com/python3-object-oriented-programming/',
                        type: 'tutorial',
                        platform: 'Real Python'
                    },
                    {
                        name: 'Python Testing',
                        url: 'https://docs.pytest.org/en/stable/',
                        type: 'documentation',
                        platform: 'pytest'
                    }
                ]
            },
            advanced: {
                title: 'Advanced Level',
                resources: [
                    {
                        name: 'Advanced Python Features',
                        url: 'https://docs.python.org/3/howto/functional.html',
                        type: 'documentation',
                        platform: 'Python.org'
                    },
                    {
                        name: 'Python Design Patterns',
                        url: 'https://python-patterns.guide/',
                        type: 'guide',
                        platform: 'Python Patterns'
                    },
                    {
                        name: 'Python Concurrency',
                        url: 'https://realpython.com/python-concurrency/',
                        type: 'tutorial',
                        platform: 'Real Python'
                    }
                ]
            }
        }
    },
    javascript: {
        title: 'JavaScript Development',
        description: 'Master JavaScript from fundamentals to advanced concepts',
        levels: {
            beginner: {
                title: 'Beginner Level',
                resources: [
                    {
                        name: 'JavaScript Fundamentals',
                        url: 'https://javascript.info/',
                        type: 'tutorial',
                        platform: 'JavaScript.info'
                    },
                    {
                        name: 'MDN JavaScript Guide',
                        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide',
                        type: 'documentation',
                        platform: 'MDN'
                    },
                    {
                        name: 'FreeCodeCamp JavaScript',
                        url: 'https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/',
                        type: 'course',
                        platform: 'freeCodeCamp'
                    }
                ]
            },
            intermediate: {
                title: 'Intermediate Level',
                resources: [
                    {
                        name: 'JavaScript ES6+',
                        url: 'https://www.javascripttutorial.net/es6/',
                        type: 'tutorial',
                        platform: 'JavaScript Tutorial'
                    },
                    {
                        name: 'Async JavaScript',
                        url: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous',
                        type: 'documentation',
                        platform: 'MDN'
                    },
                    {
                        name: 'JavaScript Testing',
                        url: 'https://jestjs.io/docs/getting-started',
                        type: 'documentation',
                        platform: 'Jest'
                    }
                ]
            },
            advanced: {
                title: 'Advanced Level',
                resources: [
                    {
                        name: 'JavaScript Design Patterns',
                        url: 'https://addyosmani.com/resources/essentialjsdesignpatterns/book/',
                        type: 'book',
                        platform: 'Addy Osmani'
                    },
                    {
                        name: 'JavaScript Performance',
                        url: 'https://web.dev/fast/',
                        type: 'documentation',
                        platform: 'web.dev'
                    },
                    {
                        name: 'Functional Programming',
                        url: 'https://mostly-adequate.gitbook.io/mostly-adequate-guide/',
                        type: 'book',
                        platform: 'Mostly Adequate Guide'
                    }
                ]
            }
        }
    },
    java: {
        title: 'Java Programming',
        description: 'Master Java development from core concepts to enterprise applications',
        levels: {
            beginner: {
                title: 'Beginner Level',
                resources: [
                    {
                        name: 'Java Tutorials',
                        url: 'https://docs.oracle.com/javase/tutorial/',
                        type: 'documentation',
                        platform: 'Oracle'
                    },
                    {
                        name: 'W3Schools Java',
                        url: 'https://www.w3schools.com/java/',
                        type: 'tutorial',
                        platform: 'W3Schools'
                    },
                    {
                        name: 'Java Programming MOOC',
                        url: 'https://java-programming.mooc.fi/',
                        type: 'course',
                        platform: 'University of Helsinki'
                    }
                ]
            },
            intermediate: {
                title: 'Intermediate Level',
                resources: [
                    {
                        name: 'Java Collections Framework',
                        url: 'https://docs.oracle.com/javase/tutorial/collections/',
                        type: 'documentation',
                        platform: 'Oracle'
                    },
                    {
                        name: 'Spring Framework',
                        url: 'https://spring.io/guides/gs/spring-boot/',
                        type: 'guide',
                        platform: 'Spring'
                    },
                    {
                        name: 'JUnit Testing',
                        url: 'https://junit.org/junit5/docs/current/user-guide/',
                        type: 'documentation',
                        platform: 'JUnit'
                    }
                ]
            },
            advanced: {
                title: 'Advanced Level',
                resources: [
                    {
                        name: 'Java Concurrency',
                        url: 'https://docs.oracle.com/javase/tutorial/essential/concurrency/',
                        type: 'documentation',
                        platform: 'Oracle'
                    },
                    {
                        name: 'Design Patterns in Java',
                        url: 'https://refactoring.guru/design-patterns/java',
                        type: 'guide',
                        platform: 'Refactoring Guru'
                    },
                    {
                        name: 'Advanced Java Programming',
                        url: 'https://www.baeldung.com/',
                        type: 'tutorial',
                        platform: 'Baeldung'
                    }
                ]
            }
        }
    },
    cpp: {
        title: 'C++ Programming',
        description: 'Learn modern C++ programming from basics to advanced concepts',
        levels: {
            beginner: {
                title: 'Beginner Level',
                resources: [
                    {
                        name: 'C++ Tutorial',
                        url: 'https://www.learncpp.com/',
                        type: 'tutorial',
                        platform: 'LearnCpp'
                    },
                    {
                        name: 'C++ Reference',
                        url: 'https://en.cppreference.com/w/',
                        type: 'documentation',
                        platform: 'CPP Reference'
                    },
                    {
                        name: 'Modern C++ Course',
                        url: 'https://www.udacity.com/course/c-plus-plus-nanodegree--nd213',
                        type: 'course',
                        platform: 'Udacity'
                    }
                ]
            },
            intermediate: {
                title: 'Intermediate Level',
                resources: [
                    {
                        name: 'C++ STL Tutorial',
                        url: 'https://www.geeksforgeeks.org/cpp-stl-tutorial/',
                        type: 'tutorial',
                        platform: 'GeeksforGeeks'
                    },
                    {
                        name: 'Modern C++ Features',
                        url: 'https://github.com/AnthonyCalandra/modern-cpp-features',
                        type: 'documentation',
                        platform: 'GitHub'
                    },
                    {
                        name: 'C++ Templates',
                        url: 'https://www.learncpp.com/cpp-tutorial/template-classes/',
                        type: 'tutorial',
                        platform: 'LearnCpp'
                    }
                ]
            },
            advanced: {
                title: 'Advanced Level',
                resources: [
                    {
                        name: 'C++ Design Patterns',
                        url: 'https://refactoring.guru/design-patterns/cpp',
                        type: 'guide',
                        platform: 'Refactoring Guru'
                    },
                    {
                        name: 'Boost C++ Libraries',
                        url: 'https://www.boost.org/doc/',
                        type: 'documentation',
                        platform: 'Boost'
                    },
                    {
                        name: 'Advanced C++ Concepts',
                        url: 'https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines',
                        type: 'documentation',
                        platform: 'ISO C++'
                    }
                ]
            }
        }
    },
    csharp: {
        title: 'C# Development',
        description: 'Master C# and .NET development for modern applications',
        levels: {
            beginner: {
                title: 'Beginner Level',
                resources: [
                    {
                        name: 'C# Fundamentals',
                        url: 'https://docs.microsoft.com/en-us/dotnet/csharp/',
                        type: 'documentation',
                        platform: 'Microsoft'
                    },
                    {
                        name: 'C# Tutorial',
                        url: 'https://www.w3schools.com/cs/index.php',
                        type: 'tutorial',
                        platform: 'W3Schools'
                    },
                    {
                        name: 'C# Path',
                        url: 'https://www.pluralsight.com/paths/csharp',
                        type: 'course',
                        platform: 'Pluralsight'
                    }
                ]
            },
            intermediate: {
                title: 'Intermediate Level',
                resources: [
                    {
                        name: 'ASP.NET Core',
                        url: 'https://docs.microsoft.com/en-us/aspnet/core/',
                        type: 'documentation',
                        platform: 'Microsoft'
                    },
                    {
                        name: 'Entity Framework Core',
                        url: 'https://docs.microsoft.com/en-us/ef/core/',
                        type: 'documentation',
                        platform: 'Microsoft'
                    },
                    {
                        name: 'LINQ Tutorial',
                        url: 'https://www.tutorialsteacher.com/linq',
                        type: 'tutorial',
                        platform: 'TutorialsTeacher'
                    }
                ]
            },
            advanced: {
                title: 'Advanced Level',
                resources: [
                    {
                        name: 'C# Design Patterns',
                        url: 'https://refactoring.guru/design-patterns/csharp',
                        type: 'guide',
                        platform: 'Refactoring Guru'
                    },
                    {
                        name: 'Advanced C# Features',
                        url: 'https://docs.microsoft.com/en-us/dotnet/csharp/advanced-topics/',
                        type: 'documentation',
                        platform: 'Microsoft'
                    },
                    {
                        name: 'Microservices with .NET',
                        url: 'https://docs.microsoft.com/en-us/dotnet/architecture/microservices/',
                        type: 'documentation',
                        platform: 'Microsoft'
                    }
                ]
            }
        }
    },
    ruby: {
        title: 'Ruby Programming',
        description: 'Learn Ruby programming and web development with Rails',
        levels: {
            beginner: {
                title: 'Beginner Level',
                resources: [
                    {
                        name: 'Ruby in Twenty Minutes',
                        url: 'https://www.ruby-lang.org/en/documentation/quickstart/',
                        type: 'tutorial',
                        platform: 'Ruby-Lang'
                    },
                    {
                        name: 'Try Ruby',
                        url: 'https://try.ruby-lang.org/',
                        type: 'interactive',
                        platform: 'Ruby-Lang'
                    },
                    {
                        name: 'Ruby Course',
                        url: 'https://www.codecademy.com/learn/learn-ruby',
                        type: 'course',
                        platform: 'Codecademy'
                    }
                ]
            },
            intermediate: {
                title: 'Intermediate Level',
                resources: [
                    {
                        name: 'Ruby on Rails Tutorial',
                        url: 'https://www.railstutorial.org/',
                        type: 'book',
                        platform: 'Rails Tutorial'
                    },
                    {
                        name: 'Ruby Style Guide',
                        url: 'https://rubystyle.guide/',
                        type: 'documentation',
                        platform: 'Ruby Style Guide'
                    },
                    {
                        name: 'RSpec Testing',
                        url: 'https://rspec.info/',
                        type: 'documentation',
                        platform: 'RSpec'
                    }
                ]
            },
            advanced: {
                title: 'Advanced Level',
                resources: [
                    {
                        name: 'Ruby Metaprogramming',
                        url: 'https://pragprog.com/titles/ppmetr2/',
                        type: 'book',
                        platform: 'Pragmatic Bookshelf'
                    },
                    {
                        name: 'Ruby Under a Microscope',
                        url: 'http://patshaughnessy.net/ruby-under-a-microscope',
                        type: 'book',
                        platform: 'Pat Shaughnessy'
                    },
                    {
                        name: 'Ruby Performance',
                        url: 'https://github.com/JuanitoFatas/ruby-performance-tips',
                        type: 'documentation',
                        platform: 'GitHub'
                    }
                ]
            }
        }
    }
};

// Add new detailed path resources
export const pathResources = {
    'cloud-architecture': {
        title: 'Cloud Architecture',
        description: 'Master cloud architecture patterns and best practices',
        levels: {
            beginner: {
                title: 'Beginner Level',
                resources: [
                    {
                        name: 'AWS Cloud Essentials',
                        url: 'https://aws.amazon.com/getting-started/',
                        type: 'documentation',
                        platform: 'AWS'
                    },
                    {
                        name: 'Azure Fundamentals',
                        url: 'https://docs.microsoft.com/en-us/learn/azure/',
                        type: 'documentation',
                        platform: 'Azure'
                    }
                ]
            },
            intermediate: {
                title: 'Intermediate Level',
                resources: [
                    {
                        name: 'Cloud Design Patterns',
                        url: 'https://docs.microsoft.com/en-us/azure/architecture/patterns/',
                        type: 'documentation',
                        platform: 'Microsoft'
                    },
                    {
                        name: 'AWS Architecture Center',
                        url: 'https://aws.amazon.com/architecture/',
                        type: 'documentation',
                        platform: 'AWS'
                    }
                ]
            },
            advanced: {
                title: 'Advanced Level',
                resources: [
                    {
                        name: 'Multi-Cloud Architecture',
                        url: 'https://cloud.google.com/architecture',
                        type: 'documentation',
                        platform: 'Google Cloud'
                    },
                    {
                        name: 'Cloud Security',
                        url: 'https://www.cloudflare.com/learning/',
                        type: 'documentation',
                        platform: 'Cloudflare'
                    }
                ]
            }
        }
    },
    'automated-testing': {
        title: 'Automated Testing',
        description: 'Learn automated testing frameworks and best practices',
        levels: {
            beginner: {
                title: 'Beginner Level',
                resources: [
                    {
                        name: 'Jest Testing',
                        url: 'https://jestjs.io/docs/getting-started',
                        type: 'documentation',
                        platform: 'Jest'
                    },
                    {
                        name: 'Selenium Basics',
                        url: 'https://www.selenium.dev/documentation/',
                        type: 'documentation',
                        platform: 'Selenium'
                    }
                ]
            },
            intermediate: {
                title: 'Intermediate Level',
                resources: [
                    {
                        name: 'Cypress Testing',
                        url: 'https://docs.cypress.io/',
                        type: 'documentation',
                        platform: 'Cypress'
                    },
                    {
                        name: 'API Testing',
                        url: 'https://learning.postman.com/docs/getting-started/introduction/',
                        type: 'documentation',
                        platform: 'Postman'
                    }
                ]
            },
            advanced: {
                title: 'Advanced Level',
                resources: [
                    {
                        name: 'Test Architecture',
                        url: 'https://martinfowler.com/testing/',
                        type: 'article',
                        platform: 'Martin Fowler'
                    },
                    {
                        name: 'CI/CD Testing',
                        url: 'https://about.gitlab.com/topics/ci-cd/',
                        type: 'documentation',
                        platform: 'GitLab'
                    }
                ]
            }
        }
    }
};