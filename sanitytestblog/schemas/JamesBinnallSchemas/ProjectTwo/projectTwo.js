export default {
    name: "projectTwo",
    title: "Project Two",
    type: "document",
    fields: [
      {
        name: "title",
        title: "Title",
        type: "string",
      },
      {
          name: 'url',
          title: 'Link to project',
          type: 'url'
      },
      {
        name: "mainImage",
        title: "Main image",
        type: "image",
        options: {
          hotspot: true,
        },
      },
      {
        name: "content",
        title: "Content",
        type: "blockContent",
      },
    ],

  };
  