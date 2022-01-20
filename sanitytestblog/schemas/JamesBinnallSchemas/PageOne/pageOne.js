export default{
    name: 'pageOne',
    title: 'Page One',
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