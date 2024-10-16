import { LinkFields } from "./globals"

const CreationsConfig = {
    label: 'Creations',
    name: 'creations',
    path: 'content/creations',
    ui: {
        allowedActions: {
            create: true,
            delete: true,
            createNestedFolder: false
        },
        filename: {
            slugify: (values) => {
                return `${values?.title?.toLowerCase().replace(/ /g, '-') || ''}`
            },
        },
    },
    format: 'md',
    fields: [
        {
            type: "string",
            label: "Title",
            name: "title",
            description: "The title of the creation.",
            isTitle: true,
            required: true,
        },
        {
            type: "string",
            label: "Slug",
            name: "slug",
            description: "Slug to be used for details page URL."
        },
        {
            type: "string",
            label: "Version",
            name: "version",
            description: "The current version of the published creation (if applicable)."
        },
        {
            type: "string",
            label: "Game",
            name: "game",
            description: "The game this creation is for.",
            options: [
                {
                    label: "Starfield",
                    value: "Starfield",
                },
                {
                    label: "Fallout 4",
                    value: "Fallout 4"
                }
            ],
            ui: {
                component: 'radio-group',
                direction: 'vertical',
            },
        },
        {
            type: "string",
            label: "Type",
            name: "type",
            description: "The type of this creation.",
            options: [
                {
                    label: "Free Creation",
                    value: "Free Creation",
                },
                {
                    label: "Verified Creation",
                    value: "Verified Creation"
                }
            ],
            ui: {
                component: 'radio-group',
                direction: 'vertical',
            },
        },
        {
            type: "string",
            label: "Status",
            name: "status",
            description: "The status of this creation.",
            options: [
                {
                    label: "In Development",
                    value: "wip",
                },
                {
                    label: "Published",
                    value: "published"
                }
            ],
            ui: {
                component: 'radio-group',
                direction: 'vertical',
            },
        },
        {
            type: "string",
            label: "Tagline",
            name: "tagline",
            description: "The tagline of this creation.",
            required: true,
        },
        {
            type: "rich-text",
            label: "Description",
            name: "description",
            description: "The description of this creation.",
            required: true,
        },
        {
            type: "object",
            label: "Box Art Image",
            name: "box",
            fields: [
                {
                    name: "src",
                    label: "Image",
                    type: "image",
                },
                {
                    name: "alt",
                    label: "Alt Text",
                    type: "string",
                },
            ],
        },
        {
            type: "object",
            label: "Cover Art",
            name: "cover",
            fields: [
                {
                    name: "src",
                    label: "Image",
                    type: "image",
                },
                {
                    name: "alt",
                    label: "Alt Text",
                    type: "string",
                },
            ],
        },
        {
            type: "object",
            label: "Links",
            name: "links",
            fields: [
                {
                    type: "object",
                    name: "nexus",
                    label: "Nexus Link",
                    fields: [
                        ...LinkFields
                    ]
                },
                {
                    type: "object",
                    name: "bethesdapc",
                    label: "Bethesda.net PC Link",
                    fields: [
                        ...LinkFields
                    ]
                },
                {
                    type: "object",
                    name: "bethesdaxb",
                    label: "Bethesda.net Xbox Link",
                    fields: [
                        ...LinkFields
                    ]
                }
            ]
        }
    ]
}

export { CreationsConfig }