export default {
    name: 'services',
    title: 'Services Content',
    type: 'document',
    fields: [
        {
            name: 'sliceTitle',
            title: 'Slice Title',
            type: 'string',
            description: 'This is the title of this slice. Important to have when there are alot of CMS features.',
        },
        {
            name: 'serviceSection',
            title: 'Service Section Content',
            type: 'object',
            fields: [
                {
                    name: 'sectionTitle',
                    title: 'Section Title',
                    type: 'string',
                    description: 'The title that will appear on the left side of the service section within the home page.'
                },
                {
                    name: 'sectionText',
                    title: 'Section Text',
                    type: 'string',
                    description: 'The text that appears in the service section within the home page.'
                },
                {
                    name: 'sectionButton',
                    title: 'Section Button',
                    type: 'object',
                    description: 'The text & url that will appear in the service section within the home page.',
                    fields: [
                        {
                            name: 'text',
                            title: 'Button Text',
                            type: 'string'
                        },
                        {
                            name: 'url',
                            title: 'Button Url',
                            type: 'url',
                        },
                    ]
                }
            ]
        }
    ]
}