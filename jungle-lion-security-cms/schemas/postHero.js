export default {
    name: 'postHero',
    title: 'Post Hero Content',
    type: 'document',
    fields: [
        {
            name: 'sliceTitle',
            title: 'Slice Title',
            type: 'string',
            description: 'This is the title of this slice. Important to have when there are alot of CMS features.',
        },
        {
            name: 'text',
            title: 'Post Hero Text',
            type: 'string',
            description: 'Add, remove, and update the text that appears in the post hero section.'
        },
        {
            name: 'clients',
            title: 'Clients',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'clientTitle',
                            title: 'Client Title',
                            type: 'string',
                            description: 'Enter the name of the client here.'
                        },
                        {
                            name: 'clientLogo',
                            title: 'Client Logo',
                            type: 'image',
                            description: 'Upload the client logo here.'
                        }
                    ]
                }
            ]
        }
    ]
}