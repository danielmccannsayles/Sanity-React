export default{
    name: 'testSchema',
    title: 'Test Schema',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
          },
          {
              name: 'body',
              title: 'Body',
              type: 'blockContent'
          }
    ]
}