import defaultResolve from 'part:@sanity/base/document-actions'
import {PublishAction} from 'part:@sanity/base/document-actions'

//An array of all the dynamic (non-singleton) types of schemas - used to turn off delete on singletons.
const dynamicArray = [
  "youtubeLink",
  "subTitle",
  "article",
]


export default function resolveDocumentActions(props) {
    return customDocumentAction(props);
  }


function customDocumentAction(props){
  let dynamic = dynamicArray.find((e)=>e==props.type) !=undefined; //if it's dynamic
  if (dynamic){ 
    console.log('dynamic ' + props);
    return defaultResolve(props);
  }
  return [PublishAction]; //else assign singleton behavior
}