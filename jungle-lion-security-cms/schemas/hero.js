export default {
    name: 'hero',
    title: 'Hero Content',
    type: 'document',
    fields: [
        {
            name: 'sliceTitle',
            title: 'Slice Title',
            type: 'string',
            description: 'This is the title of this slice. Important to have when there are alot of CMS features.'
        },
        {
            name: 'text',
            title: 'Hero Text',
            type: 'string',
            description: 'Add, remove, and update the text that appears in the hero section.'
        },
        {
            name: 'logo',
            title: 'Hero Section Logo',
            type: 'image',
            description: '*Note. In order to have your logo render instead of the Hero text, please leave Hero Text empty.'
        }
    ]
}