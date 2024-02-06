export default {
    name: 'fixedBgImages',
    title: 'Fixed Background Images',
    type: 'document',
    description: 'Add background images that the website will rotate through based on scroll.',
    fields: [
        {
            name: 'sliceTitle',
            title: 'Slice Title',
            type: 'string',
            description: 'This is the title of this slice. Important to have when there are alot of CMS features.'
        },
        {
            name: 'images',
            title: 'Background Images',
            description: 'Upload background images here.',
            type: 'array',
            of: [{type: 'image'}]
        }
    ]
}