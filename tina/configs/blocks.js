import { ColorOptions, LinkFields } from "./globals";

export const HeroBlockSchema = {
    name: "hero",
    label: "Hero",
    fields: [
        {
            type: "string",
            label: "Headline",
            name: "headline",
        },
        {
            type: "rich-text",
            label: "Introductory Text",
            name: "text",
        },
        {
            type: "object",
            label: "Background Image",
            name: "image",
            fields: [
                {
                    name: "src",
                    label: "Image Source",
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
            type: "string",
            label: "Colour",
            name: "color",
            options: [
                ...ColorOptions
            ],
        },
    ],
};

export const ContentBlockSchema = {
    name: "content",
    label: "Content",
    ui: {
        defaultItem: {
            body: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
        },
    },
    fields: [
        {
            type: "string",
            label: "Colour",
            name: "color",
            options: [
                ...ColorOptions
            ],
        },
        {
            type: "object",
            label: "Background Image",
            name: "image",
            fields: [
                {
                    name: "src",
                    label: "Image Source",
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
            type: "rich-text",
            label: "Body",
            name: "body",
        },
    ],
};

export const CTABlockSchema = {
    name: "cta",
    label: "Call To Action",
    fields: [
        {
            type: "string",
            label: "Headline",
            name: "headline",
        },
        {
            type: "rich-text",
            label: "Explanatory Text",
            name: "text",
        },
        {
            label: "Actions",
            name: "actions",
            type: "object",
            list: true,
            ui: {
                itemProps: (item) => ({ label: item.label }),
            },
            fields: [
                {
                    label: "Label",
                    name: "label",
                    type: "string",
                },
                {
                    label: "Text",
                    name: "text",
                    type: "string",
                },
                {
                    label: "Type",
                    name: "type",
                    type: "string",
                    options: [
                        { label: "Button", value: "button" },
                        { label: "Link", value: "link" },
                    ],
                },
                {
                    label: "Link",
                    name: "link",
                    type: "object",
                    fields: [
                        ...LinkFields
                    ]
                },
            ],
        },
        {
            type: "object",
            label: "Background Image",
            name: "image",
            fields: [
                {
                    name: "src",
                    label: "Image Source",
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
            type: "string",
            label: "Colour",
            name: "color",
            options: [
                ...ColorOptions
            ],
        },
    ],
};

export const CreationBlockSchema = {
    name: "creation",
    label: "Creation",
    ui: {
        itemProps: (item) => {

            if (!item || !item?.creation) return

            let name = item?.creation.split("/");
            let str = name[2].replaceAll('-', ' ');

            var splitStr = str.toLowerCase().split(' ');
            for (var i = 0; i < splitStr.length; i++) {
                splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
            }
            // Directly return the joined string
            const title = splitStr.join(' ').replace('.md', '');
            return { label: title };
          },
    },
    fields: [
        {
            name: "headline",
            label: "Headline",
            description: "Optional headline text for this creation",
            type: "string"
        },
        {
            name: "creation",
            label: "Creation",
            type: "reference",
            collections: ['creations']
        },
        {
            type: "string",
            label: "Colour",
            name: "color",
            options: [
                ...ColorOptions
            ],
        },
    ]
}

