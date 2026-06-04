React Router
 one of the most important libraries in react
 without this every page switch requires a full page reload 
 With react router React can switch pages instantly without refreshing the browser


 React router connects url with components
 like for specific url show specific component

 {
    path: '/desried_url',
    element: <Component />
 }

 For navigation herw we dont use <a><a/> (anchor tags) because these refreshes the page
 insead we import {Link} from react-router-dom and use that <Link> tag in this , we have to="/url" instead of href="/url"