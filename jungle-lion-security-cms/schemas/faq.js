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
            name: 'faqSection',
            title: 'FAQ Section Content',
            type: 'object',
            fields: [
                {
                    name: 'sectionTitle',
                    title: 'Section Title',
                    type: 'string',
                    description: 'The title that will appear on the left side of the FAQ section within the home page.'
                },
                {
                    name: 'sectionText',
                    title: 'Section Text',
                    type: 'string',
                    description: 'The title text that appears in the FAQ section within the home page.'
                },
            ]
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