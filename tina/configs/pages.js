import { ContentBlockSchema, HeroBlockSchema, CreationBlockSchema, CTABlockSchema } from "./blocks";

const PagesConfig = {
    label: 'Pages',
    name: 'page',
    path: 'content/pages',
    ui: {
        allowedActions: {
            create: true,
            delete: true,
            createNestedFolder: true
        },
        filename: {
            slugify: (values) => {
                return `${values?.title?.toLowerCase().replace(/ /g, '-') || ''}`
            },
        },
        router: ({ collection, document }) => {
            let path = undefined;

            if (document._sys.breadcrumbs && document._sys.filename) {
                path = `/${document._sys.breadcrumbs.join('/')}`;
            } else if (document._sys.filename) {
                path = `/${document._sys.filename}`;
            }

            // if (path) {
            //     if (path == '/home') {
            //         path = '/'
            //     }
            // }
            
            return path;
          },
    },
    format: 'md',
    fields: [
        {
            type: "string",
            label: "Title",
            name: "title",
            description: "The title of the page. This is used to display the title in the CMS",
            isTitle: true,
            required: true,
        },
        {
            type: "string",
            label: "Meta Title",
            name: "meta_title",
            description: "The meta title for the page. This is used for the page name displayed in your tab and for SEO purposes."
        },
        {
            type: "string",
            label: "Meta Description",
            name: "meta_desc",
            description: "The meta description for the page. This is used for SEO purposes."
        },
        {
            type: "object",
            list: true,
            name: "blocks",
            label: "Sections",
            ui: {
                visualSelector: false,
            },
            templates: [
                HeroBlockSchema,
                ContentBlockSchema,
                CTABlockSchema,
                CreationBlockSchema
                // Accordion (FAQs)
                // Testimonials
                // Content
                // Call to action
            ],
        },
    ],
}

export { PagesConfig }