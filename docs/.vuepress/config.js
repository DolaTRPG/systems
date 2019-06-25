module.exports = {
    title: 'DolaTRPG Systems',
    description: 'DolaTRPG Systems',
    base: '/systems/',
    repo: 'https://github.com/dolatrpg/systems',
    themeConfig: {
        sidebarDepth: 2,
        sidebar:[
            ['/', 'DolaTRPG Systems'],
            {
                title: 'Night of the Dead',
                collaspsable: true,
                children: [
                    '/notd/background.md',
                    '/notd/character.md'
                ]
            },
            {
                title: 'Knave',
                collaspsable: true,
                children: [
                    '/knave/osr.md',
                    '/knave/rules.md',
                    '/knave/character.md',
                    '/knave/items.md'
                ]
            }
        ]
    }
}
