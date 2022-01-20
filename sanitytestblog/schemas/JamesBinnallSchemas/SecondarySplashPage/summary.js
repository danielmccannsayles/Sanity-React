export default{
    name: 'summary',
    title: 'Summary',
    type: 'document', 
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
          },
          {
              name: 'content',
              title: 'Content',
              type: 'blockContent'
          }
    ],

}