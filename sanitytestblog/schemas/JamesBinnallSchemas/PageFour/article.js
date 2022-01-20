export default {
    name: "article",
    title: "News Article",
    type: "document",
    fields: [
      {
        name: "title",
        title: "Title",
        type: "string",
      },
      {
          name: 'url',
          title: 'Link to article',
          type: 'url'
      },
      {
        name: "headerImage",
        title: "Header Image",
        type: "image",
        options: {
          hotspot: true,
        },
      },
      {
        name: "content",
        title: "Blurb",
        type: "blockContent",
      },
      {
        name: "order",
        title: "Order",
        type: "number",
        hidden: true,
      },
    ],
  };
  