import AccueilSite from './components/Accueil'
import Page1Site from './components/Page1'
import Page2Site from './components/Page2'
import Page3Site from './components/Page3'
import PosteSite from './components/Post'

export default [
    {path: '/', component: AccueilSite},
    {path: '/page1', component: Page1Site},
    {path: '/page2', component: Page2Site},
    {path: '/page3', component: Page3Site},
    {path: '/blogpost/:id', component: PosteSite},
]