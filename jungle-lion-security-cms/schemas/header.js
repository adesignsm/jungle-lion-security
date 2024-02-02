export default {
    name: 'header',
    title: 'Header Content',
    type: 'document',
    fields: [
        {
            name: 'sliceTitle',
            title: 'Slice Title',
            type: 'string',
            description: 'This is the title of this slice. Important to have when there are alot of CMS features.',
        },
        {
            name: 'logo',
            title: 'Header Logo',
            type: 'image',
            description: 'Upload a logo that will appear in the header',
        },
        {
            name: "menu",
            title: "Menu Content",
            description: "Manage your menu content here.",
            type: "object",
            fields: [
                {
                    name: "leftSideItems",
                    title: "Left Side Items",
                    type: "array",
                    description: "Add, remove, or update menu items that will appear on the left side of your logo.",
                    of: [
                        {
                            type: "object",
                            fields: [
                                {
                                    name: "menuItemString",
                                    title: "Menu Item String",
                                    type: "string",
                                    description: "The text for the menu item."
                                },
                                {
                                    name: "menuItemAnchor",
                                    title: "Menu Item Anchor",
                                    type: "slug",
                                    description: "This field is used to anchor to a section on the home page e.g 'services' will scroll down to the 'services' section.",
                                }
                            ]
                        }
                    ],
                    validation: Rule => Rule.max(3)
                }
            ]
        }        
    ]
}