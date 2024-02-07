export default {
    name: 'faq',
    title: 'FAQ Content',
    type: 'document',
    fields: [
        {
            name: 'sliceTitle',
            title: 'Slice Title',
            type: 'string'
        },
        {
            name: 'questionAnswer',
            title: 'Question & Answer',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'question',
                            title: 'Question',
                            type: 'string',
                            description: 'Enter the question.'
                        },
                        {
                            name: 'answer',
                            title: 'Answer',
                            type: 'string',
                            description: 'Enter the corresponding answer.'
                        }
                    ]
                }
            ]
        }
    ]
}