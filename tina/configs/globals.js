export const ColorOptions = [
    { label: "Primary", value: "primary" },
    { label: "Secondary", value: "secondary" },
    { label: "Tertiary", value: "tertiary" },
    { label: "Light", value: "light"},
    { label: "Dark", value: "dark"},
]

const LinkConfig = {
    type: 'object',
    list: true,
    ui: {
        component: 'group-list',
        itemProps: (item) => ({
            key: item.id,
            label: item?.text?.split(' ').map(i => i.substring(0, 1).toUpperCase() + i.substring(1, i.length)).join(' ')
        }),
        defaultItem: () => {
            return {
                type: 'internal',
                location: '_self'
            }
        }
    }
}

export const LinkFields = [
    {
        label: 'Link Label',
        name: 'text',
        description: 'The text this link will be displayed as.',
        placeholder: 'Click me',
        type: 'string',
        ui: {
            component: 'text'
        },
        required: true
    },
    {
        label: 'Link URL',
        name: 'url',
        description: 'The page this link will direct to. For internal links, exclude your domain name. For external links, paste in full. Can be blank if dropdown.',
        placeholder: '/your-page OR https://link.co.uk',
        type: 'string',
        ui: {
            component: 'text'
        }
    },
    {
        label: 'Link Tab',
        name: 'location',
        description: 'Should this link open in the current tab or a new tab?',
        type: 'string',
        ui: {
            component: 'radio-group',
            direction: 'vertical',
        },
        options: [
            {
                label: 'Current tab',
                value: '_self'
            },
            {
                label: 'New tab',
                value: '_blank'
            }
        ],
    },
]

const GlobalsConfig = {
    label: 'Global',
    name: 'global',
    path: 'content/global',
    ui: {
        global: true,
        allowedActions: {
            create: false,
            delete: false,
            createNestedFolder: false
        }
    },
    format: 'json',
    fields: [
        {
            label: 'Header',
            name: 'header',
            type: 'object',
            fields: [
                {
                    label: 'Navigation',
                    name: 'header_navigation',
                    ...LinkConfig,
                    fields: [
                        ...LinkFields,
                        {
                            label: 'Dropdown Links',
                            name: 'children',
                            description: 'Adding additional links to this entry will make it a dropdown.',
                            ...LinkConfig,
                            fields: [
                                ...LinkFields
                            ]
                        }
                    ]
                }
            ]
        },
        {
            label: 'Footer',
            name: 'footer',
            type: 'object',
            fields: [
                {
                    label: 'Footer Links',
                    name: 'footer_navigation',
                    ...LinkConfig,
                    fields: [
                        ...LinkFields
                    ]
                }
            ]
        }
    ]
}

export { GlobalsConfig }