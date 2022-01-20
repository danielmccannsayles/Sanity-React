import React, { useEffect, useState } from "react";
import sanityClient from "../client";
import BlockContent from "@sanity/block-content-to-react";

export default function PageOne() {
  const [pageData, setPageData] = useState(null);

  useEffect(() => {
    //ran once when page is loaded, sets constant values
    sanityClient
      .fetch(
        `*[_type == "pageOne" ]{
          title,
          content
        }`
      )
      .then((data) => {
        setPageData(data);
        console.log(data);
      });
  }, []);

  return (
    <>
      {" "}
      {pageData && (
        <>
          <div>{pageData[0].title}</div>
          <BlockContent
            blocks={pageData[0].content}
            projectId={sanityClient.projectId}
            dataset={sanityClient.dataset}
          />
        </>
      )}
    </>
  );
}
