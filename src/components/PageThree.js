import React, { useEffect, useState } from "react";
import sanityClient from "../client";
import BlockContent from "@sanity/block-content-to-react";

export default function PageThree() {
  const [pageData, setPageData] = useState(null);

  useEffect(() => {
    //ran once when page is loaded, sets constant values
    sanityClient
      .fetch(
        `*[_type == "research" ]{
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
          <div>{pageData[1].title}</div> {/*Currently set to [1] cause I accidentally made two of these pages - delete thes in the future*/}
          <BlockContent
            blocks={pageData[1].content}
            projectId={sanityClient.projectId}
            dataset={sanityClient.dataset}
          />
        </>
      )}
    </>
  );
}
