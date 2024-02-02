export default {
    name: 'fixedCtas',
    title: "Fixed Cta's Content",
    type: 'document',
    fields: [
        {
            name: 'sliceTitle',
            title: 'Slice Title',
            type: 'string',
            description: 'This is the title of this slice. Important to have when there are alot of CMS features.',
        },
        {
            name: "quoteBlock",
            title: "'Get A Quote Block' Content",
            description: "Manage the content in the 'Get a quote block' which is located in the bottom left corner. * This element will be fixed across the webiste.",
            type: "object",
            fields: [
                {
                    name: "description",
                    title: "Description",
                    type: "array",
                    description: "Add a description.",
                    of: [{type: 'block'}]
                },
                {
                    name: "applyCta",
                    title: "'Want to work with us?' content",
                    type: "object",
                    description: "Update the cta button text and the url.",
                    fields: [
                        {
                            name: 'text',
                            title: 'Button Text',
                            type: 'string',
                            description: 'Edit the cta button text.'
                        },
                        {
                            name: 'url',
                            title: 'Button Url',
                            type: 'url',
                            description: 'Edit the cta button url.'
                        }
                    ]
                },
                {
                    name: "quoteCta",
                    title: "'Get a quote' content",
                    type: "object",
                    description: "Update the cta button text and the url.",
                    fields: [
                        {
                            name: 'text',
                            title: 'Button Text',
                            type: 'string',
                            description: 'Edit the cta button text.'
                        },
                        {
                            name: 'url',
                            title: 'Button Url',
                            type: 'url',
                            description: 'Edit the cta button url.'
                        }
                    ]
                }
            ]
        },
        {
            name: "applyButton",
            title: "'Apply' Button Content",
            description: "Manage the content in the 'Apply' Button which is located in the top right corner. * This element will be fixed across the webiste.",
            type: "object",
            fields: [
                {
                    name: "text",
                    title: "Button Text",
                    type: "string",
                    description: "Update the Apply Button text.",
                },
                {
                    name: 'url',
                    title: 'Button Url',
                    type: 'url',
                    description: 'Update the url for the Apply Button',
                }
            ]
        }     
    ]
}