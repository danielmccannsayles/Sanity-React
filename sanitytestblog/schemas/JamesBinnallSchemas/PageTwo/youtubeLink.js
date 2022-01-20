export default{
    name: 'youtubeLink',
    title: 'YouTube Link',
    type: 'document',
    singleton: 'true',
    fields: [
        {
            name: 'title',
            title: 'Descriptive Title',
            type: 'string',
          },
          {
              name: 'url',
              title: 'URL',
              type: 'url'
          },
          {
            name: "order",
            title: "Order",
            type: "number",
            hidden: true,
          },
          
        ],

}