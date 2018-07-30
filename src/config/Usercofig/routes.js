import Loadable from 'react-loadable'
import DelayLoading from '@/components/DelayLoading'

const User         = Loadable({loader: () => import('./../../pages/User/User/User'), loading : DelayLoading,delay:3000})
const OrderList     = Loadable({loader: () => import('./../../pages/User/OrdersList/Orderlist'), loading : DelayLoading,delay:3000})

export default
[{
    'path': '/User',
    'component': User
}, {
    'path': '/User/OrderList',
    'component': OrderList
}]