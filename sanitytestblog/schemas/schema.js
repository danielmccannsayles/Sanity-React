// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import blockContent from './blockContent'
import category from './category'
import post from './post'
import author from './author'
import testSchema from './testSchema'
import linksNav from './JamesBinnallSchemas/HomePage/linksNav'
import subTitle from './JamesBinnallSchemas/HomePage/subTitle'
import mainImage from './JamesBinnallSchemas/HomePage/mainImage'
import summary from './JamesBinnallSchemas/SecondarySplashPage/summary'
import pageOne from './JamesBinnallSchemas/PageOne/pageOne'
import youtubeLink from './JamesBinnallSchemas/PageTwo/youtubeLink'
import projectOne from './JamesBinnallSchemas/ProjectOne/projectOne'
import projectTwo from './JamesBinnallSchemas/ProjectTwo/projectTwo'
import siteMap from './JamesBinnallSchemas/SiteMap/siteMap'
import contact from './JamesBinnallSchemas/Contact/contact'
import research from './JamesBinnallSchemas/PageThree/research'
import article from './JamesBinnallSchemas/PageFour/article'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    post,
    author,
    category,
    testSchema,
    linksNav,
    subTitle,
    mainImage,
    summary,
    pageOne,
    youtubeLink,
    projectOne,
    projectTwo,
    siteMap,
    contact,
    research,
    article,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
  ]),
})
