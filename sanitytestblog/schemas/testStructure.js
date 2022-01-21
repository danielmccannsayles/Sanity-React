import S from "@sanity/desk-tool/structure-builder";

export default () => {
  return S.list()
    .title("Home")
    .items([
      //HOMEPAGE
      S.listItem()
        .title("Homepage")
        .id("Homepage")
        .child(
          S.list()
            .title("Homepage")
            .items([
              S.listItem()
                .title("Subtitles")
                .child(
                  S.documentList()
                    .title("Subtitles")
                    .filter('_type == "subTitle"')
                ),
              singleton("Nav Links/Main Image", "linksNav"),
            ])
        ),

      //SplashPage
      S.listItem()
        .title("Secondary Splash Page")
        .id("SecondarySplashPage")
        .child(
          S.list()
            .title("Secondary Splash Page")
            .items([
                
              singleton("Summary", "summary"),
            ])
        ),

        //PAGE 1 - ABOUT
        singleton("Page One", "pageOne"),

        //PAGE 2 - SPEAKING
        S.listItem()
        .title("Page Two")
        .id("PageTwo")
        .child(
            S.documentList()
            .title("YouTube Links")
            .filter('_type == "youtubeLink"')
        ),

        //PAGE 3 - RESEARCH
        singleton("Page Three", "research"),

        //PAGE 4 - NEWS
        S.listItem()
        .title("Page Four")
        .id("PageFour")
        .child(
            S.documentList()
            .title("News")
            .filter('_type == "article"')
        ),



        //Skip research and news for now

        //Project One
        singleton("Project One", "projectOne"),

        //Project Two
        singleton("Project Two", "projectTwo"),

        //Site Map
        singleton("Site Map", "siteMap"),

        //Contact
        singleton("Contact", "contact"),


    
    ]);
};



function singleton(title, schematype) {
  return S.listItem()
    .title(title)
    .child(S.editor().schemaType(schematype).documentId(schematype).title(title));
}
