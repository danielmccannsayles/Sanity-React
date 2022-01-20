export default {
    name: "research",
    title: "Research",
    type: "document",
    fields: [
      {
        name: "title",
        title: "Title",
        type: "string",
      },
      {
        name: "content",
        title: "Content - will retain formats & links",
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
  