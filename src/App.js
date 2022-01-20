
import React, { useEffect, useState } from "react";
import sanityClient from "./client.js";
import imageUrlBuilder from "@sanity/image-url";

import PageOne from "./components/PageOne.js";
import PageTwo from "./components/PageTwo.js";
import PageThree from "./components/PageThree.js";
import PageFour from "./components/PageFour.js";
import Project from "./components/Project.js";


const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

function App() {

  const [contact, setContact] = useState(null);
  const [linksNav, setLinksNav] = useState(null);
  const [summary, setSummary] = useState(null);
  const [siteMap, setSiteMap] = useState(null);
  const [currentPage, setCurentPage] = useState(1); //number from 1 to 6 indicating pages 1-4 & projects 1 & 2 (5 & 6 respectively)

  useEffect(() => { //ran once when page is loaded, sets constant values
    sanityClient
      .fetch(
        `*[_type == "linksNav" ]{
          "ImageUrl": mainImg.asset->url,
          Link1,
        }`
      )
      .then((data) => {
        setLinksNav(data);
        console.log(data);
        });

      sanityClient
      .fetch( 
        `*[_type == "contact" ]{
        title,
        phoneNumber
      }`)
      .then((data) => {
        setContact(data);
        console.log(data);
      });

      sanityClient
      .fetch( 
        `*[_type == "summary" ]{
        title,
      }`)
      .then((data) => {
        setSummary(data);
        console.log(data);
      });

      sanityClient
      .fetch( 
        `*[_type == "siteMap" ]{
        page1,
        redirect1
      }`)
      .then((data) => {
        setSiteMap(data);
        console.log(data);
      });


  }, []);

  return (
    //homepage
    <>
    {linksNav && <div> {linksNav[0].Link1 } </div>}
    
    {linksNav && <img src={urlFor(linksNav[0].ImageUrl).width(200).url()} />}  

    {contact && <div> Contact: {contact[0].phoneNumber } </div>}

    {siteMap && <div> Site Map: {siteMap[0].page1} </div>}

    {summary && <div> Summary: {summary[0].title } </div>}
    Page 1
    <PageOne></PageOne>
    Page 2
    <PageTwo></PageTwo>
    Page 3
    <PageThree></PageThree>
    Page 4
    <PageFour></PageFour>
    Page 5
    <Project project="projectOne"></Project>
    Page 6
    <Project project="projectTwo"></Project>



    </>
  );
}
export default App;