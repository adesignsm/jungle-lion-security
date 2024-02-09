export default {
    name: 'contact',
    title: 'Contact Content',
    type: 'document',
    fields: [
        {
            name: 'sliceTitle',
            title: 'Slice Title',
            type: 'string',
            description: 'This is the title of this slice. Important to have when there are alot of CMS features.',
        },
        {
            name: 'contact',
            title: 'Contact Content',
            type: 'object',
            fields: [
                {
                    name: 'title',
                    title: 'Title Text',
                    type: 'string',
                    description: 'The title text that will appear in the Contact section, above the contact button.'
                },
                {
                    name: 'button',
                    title: 'Button',
                    type: 'object',
                    desription: 'Content for the contact button.',
                    fields: [
                        {
                            name: 'text',
                            title: 'Button Text',
                            type: 'string',
                            description: 'Text for the contact button'
                        },
                        {
                            name: 'email',
                            title: 'Button Email',
                            type: 'string',
                            description: 'Please enter the email you would like to be contacted at.',
                            validation: Rule => Rule.regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).error('Please enter a valid email address'),
                        }
                    ]
                }
            ]
        }
    ]
}