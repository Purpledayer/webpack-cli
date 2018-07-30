import Loadable from 'react-loadable'
import DelayLoading from '../components/DelayLoading'

const Home         = Loadable({loader: () => import('./../pages/portal/Home'), loading : DelayLoading,delay:3000})
const Allfoods     = Loadable({loader: () => import('./../pages/portal/AllFoods'), loading : DelayLoading,delay:3000})

export default
[{
    'path': '/index',
    'component': Home
}, {
    'path': '/index/Allfoods',
    'component': Allfoods
}]