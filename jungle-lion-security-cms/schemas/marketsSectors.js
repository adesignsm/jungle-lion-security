export default {
    name: 'marketsSectors',
    title: 'Markets & Sectors Content',
    type: 'document',
    fields: [
        {
            name: 'sliceTitle',
            title: 'Slice Title',
            type: 'string',
            description: 'This is the title of this slice. Important to have when there are alot of CMS features.',
        },
        {
            name: 'title',
            type: 'string',
            title: 'Markets & Sectors Title',
            description: 'The title that will appear in the Markets & Sectors section, right above the table.'
        },
        {
            name: 'security',
            title: 'Security Content',
            type: 'object',
            fields: [
                {
                    name: 'tabTitle',
                    title: 'Tab Title',
                    type: 'string',
                    description: 'The title of the tab.'
                },
                {
                    name: 'items',
                    title: 'List Items',
                    type: 'array',
                    description: 'The list items that will appear in the security section.',
                    of: [{
                        type: 'string'
                    }]
                }
            ]
        },
        {
            name: 'misc',
            title: 'Misc Content',
            type: 'object',
            fields: [
                {
                    name: 'tabTitle',
                    title: 'Tab Title',
                    type: 'string',
                    description: 'The title of the tab.'
                },
                {
                    name: 'items',
                    title: 'List Items',
                    type: 'array',
                    description: 'The list items that will appear in the misc section.',
                    of: [{
                        type: 'string'
                    }]
                }
            ]
        }
    ]
}