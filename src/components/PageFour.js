import React, { useEffect, useState } from "react";
import sanityClient from "../client";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function PageFour() {
  const [pageData, setPageData] = useState(null);

  useEffect(() => {
    //ran once when page is loaded, sets constant values
    sanityClient
      .fetch(
        `*[_type == "article" ]{
          title,
         url,
         "ImageUrl": headerImage.asset->url,
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
      <div>News</div>
      <div>
        {pageData &&
          pageData.map(
            (
              el,
              index
            ) => (
              <div>
                <a href={el.url} key={index}> {/*Change key to something more unique - index is last resort*/}
                  {" "}
                  {el.title}
                </a>
                <BlockContent
                  blocks={el.content}
                  projectId={sanityClient.projectId}
                  dataset={sanityClient.dataset}
                ></BlockContent>

                {el.ImageUrl && <img src={urlFor(el.ImageUrl).width(200).url()} /> }
              </div> 
            )
          )}
      </div>
    </>
  );
}
