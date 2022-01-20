export default {
    name: "contact",
    title: "Contact",
    type: "document",
    fields: [
      {
        name: "title",
        title: "title",
        type: "string",
        hidden: true,
      },
      {
        name: "phoneNumber",
        title: "Phone Number",
        type: "string",
      },
      {
        name: "emailAddress",
        title: "Email Address",
        type: "string",
      },
      {
        name: "address",
        title: "Address",
        type: "string",
      },
      
      {
        name: "logoImage",
        title: "Logo Image",
        type: "image",
        options: {
          hotspot: true,
        },
      },
      
    ],
    initialValue: {
      title: 'Contact',
    }

  };
  