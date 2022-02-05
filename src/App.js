
import React, { useEffect, useState } from "react";
import sanityClient from "./client.js";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

import PageOne from "./components/PageOne.js";
import PageTwo from "./components/PageTwo.js";
import PageThree from "./components/PageThree.js";
import PageFour from "./components/PageFour.js";
import Project from "./components/Project.js";


const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

const pages = {
  pageOne: PageOne,
  pageTwo: PageTwo,
  pageThree: PageThree,
  pageFour: PageFour,
  projectOne: Project,
  projectTwo: Project,
}

var PageComponent;


function App() {

  const [contact, setContact] = useState(null);
  const [linksNav, setLinksNav] = useState(null);
  const [summary, setSummary] = useState(null);
  const [siteMap, setSiteMap] = useState(null);
  const [currentPage, setCurrentPage] = useState('pageOne'); //value from 1 to 5 indicating pages 1-4 & project
  const [project, setProject] = useState('projectTwo'); //used for project - two values

  PageComponent = pages[currentPage];

  const siteMapComponents=[];

  useEffect(() => { //ran once when page is loaded, sets constant values
    sanityClient
      .fetch(
        `*[_type == "linksNav" ]{
          "ImageUrl": mainImg.asset->url,
          Link1,
          Link2,
          url1,
          url2
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
        phoneNumber,
        emailAddress,
        address,
        "logoImage": logoImage.asset->url,

      }`)
      .then((data) => {
        setContact(data);
        console.log(data);
      });

      sanityClient
      .fetch( 
        `*[_type == "summary" ]{
        title,
        content
      }`)
      .then((data) => {
        setSummary(data);
        console.log(data);
      });

      sanityClient
      .fetch( 
        `*[_type == "siteMap" ]{
        page1,
        redirect1,
        page2,
        redirect2,
        page3,
        redirect3,
        page4,
        redirect4,
        page5,
        redirect5,
        page6,
        redirect6,
        
      }`)
      .then((data) => {
        setSiteMap(data);
        console.log('siteMap\n' + JSON.stringify(data));
      });

      
      
  }, []);

  function changePage(page){
    //set currentPage & project here
    setCurrentPage(page);
    setProject(page);
  }



  return (
    //homepage
    <>
    {linksNav && <div>Top Left Links: <a href={linksNav[0].url1} > {linksNav[0].Link1} </a> , <a href={linksNav[0].url2} > {linksNav[0].Link2} </a></div>}
    
    Main Image: {linksNav && <img style={{marginTop:"10px"}} src={urlFor(linksNav[0].ImageUrl).width(200).url()} />} 

    {summary && currentPage == 'pageOne' && <>
    <div> Summary: {summary[0].title } </div>
   Paragraph: <BlockContent
            blocks={summary[0].content}
            projectId={sanityClient.projectId}
            dataset={sanityClient.dataset}
          />
    </>} 

    <div style={{marginBottom:"20px"}}>Current Page: {currentPage}</div>

    <PageComponent project={project}></PageComponent>

    <div style={{marginTop:"20px"}}>Site Map:</div>
    {siteMap && <div> {/*this code looks gross - could be redone but prob is simpler this way*/}
      <button onClick={() => changePage(siteMap[0].redirect1)}> {siteMap[0].page1}</button>
      <button onClick={() => changePage(siteMap[0].redirect2)}> {siteMap[0].page2}</button>
      <button onClick={() => changePage(siteMap[0].redirect3)}> {siteMap[0].page3}</button>
      <button onClick={() => changePage(siteMap[0].redirect4)}> {siteMap[0].page4}</button>
      <button onClick={() => changePage(siteMap[0].redirect5)}> {siteMap[0].page5}</button>
      <button onClick={() => changePage(siteMap[0].redirect6)}> {siteMap[0].page6}</button> 
    </div>}


    {contact && <div style={{marginTop:"20px"}}> Phone Number: {contact[0].phoneNumber } </div>}
    {contact && <div style={{marginTop:"20px"}}> Email Address: {contact[0].emailAddress } </div>}
    {contact && <div style={{marginTop:"20px"}}> Address: {contact[0].address } </div>}

    Page Logo: {contact && contact[0].logoImage && <img style={{marginTop:"10px"}} src={urlFor(contact[0].logoImage).width(200).url()} />}

    </>
  );
}
export default App;