export default {
    name: 'footer',
    title: 'Footer',
    type: 'document',
    fields: [
        {
            name: 'sliceTitle',
            title: 'Slice Title',
            type: 'string',
            description: 'This is the title of this slice. Important to have when there are alot of CMS features.',
        },
        {
            name: 'content',
            title: 'Footer Content',
            type: 'object',
            fields: [
                {
                    name: 'logo',
                    title: 'Logo',
                    type: 'image',
                    description: 'The Logo that will appeaer within the footer.'
                },
                {
                    name: 'copy',
                    title: 'Copy Content',
                    type: 'object',
                    description: 'The copy content that will appear within the footer.',
                    fields: [
                        {
                            name: 'title',
                            title: 'Title',
                            type: 'string',
                        },
                        {
                            name: 'address',
                            title: 'Address',
                            type: 'string',
                        },
                        {
                            name: 'email',
                            title: 'Email',
                            type: 'string',
                            validation: Rule => Rule.regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).error('Please enter a valid email address'),
                        },
                        {
                            name: 'phone',
                            title: 'Phone Number',
                            type: 'string',
                            validation: Rule => Rule.regex(/^[0-9]*$/).error('Please enter a valid phone number'),
                        }
                    ]
                }
            ]
        },
        {
            name: 'copyright',
            title: 'Copyright Content',
            type: 'object',
            description: 'The content for the copyright section below the footer content.',
            fields: [
                {
                    name: 'text',
                    title: 'Copyright Text',
                    type: 'string',
                    description: 'Official copyright text e.g. Jungle Lion Security 2023',
                },
                {
                    name: 'privacyPolicy',
                    title: 'Privacy Policy Content',
                    type: 'object',
                    fields: [
                        {
                            name: 'title',
                            title: 'Title',
                            type: 'string',
                            description: 'The title for the Privacy Policy link.'
                        },
                        {
                            name: "url",
                            title: "Privacy Policy Url",
                            type: "slug",
                            description: "This field is used to apply a link to the Privacy Policy Link",
                        }
                    ]
                }
            ]
        }
    ]
}