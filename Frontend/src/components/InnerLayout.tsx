import { Outlet } from 'react-router-dom'
import { Drawer } from './Drawer'

export const InnerLayout = () => {
  return (
    <>
    <div className='pt-12'>
    <Drawer/>
    <Outlet/>
    </div>
    </>
    
  )
}
