import React, { useEffect, useState } from "react";
import sanityClient from "../client";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function Project(props) {
  const [pageData, setPageData] = useState(null);

  useEffect(() => {
    //ran once when page is loaded, sets constant values
    sanityClient
      .fetch(
        `*[_type == "${props.project}" ]{
            title,
           url,
           "ImageUrl": mainImage.asset->url,
           content
          }`
      )
      .then((data) => {
        setPageData(data);
        console.log(data);
      });
  }, [props.project]);

  return (
    <>
      {" "}
      {pageData && (
        <>
          <div>{pageData[0].title}</div> {/*Currently set to [1] cause I accidentally made two of these pages - delete thes in the future*/}
          <a href={pageData[0].url}>Link to Project</a>

          {pageData[0].ImageUrl && <img src={urlFor(pageData[0].ImageUrl).width(200).url()} /> }


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
