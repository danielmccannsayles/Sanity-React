import React, { useEffect, useState } from "react";
import sanityClient from "../client";

export default function PageTwo() {
  const [pageData, setPageData] = useState(null);

  useEffect(() => {
    //ran once when page is loaded, sets constant values
    sanityClient
      .fetch(
        `*[_type == "youtubeLink" ]{
          title,
         url,
         order
        }`
      )
      .then((data) => {
        setPageData(data);
        console.log(data);
      });
  }, []);

  return (
    <>
    <div>James Binnall Speaking</div>
    <div>{pageData && (
        pageData.map((el, index)=>( //( instead of { means only 1 line of code so return is implicit
         <div> <a href={el.url} key={index}> {el.title}</a> </div> //Change key to something more unique - index is last resort
        ))
      )}
        </div>
      
    </>
  );
}
