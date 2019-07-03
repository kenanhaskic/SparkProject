import Home from '../components/Home.vue'
import Details from '../components/Details.vue'

export default[
    {path:'/'  , name:'home', component:Home},
    {path:'/details' ,name:'details', component:Details, props:true}
    
]