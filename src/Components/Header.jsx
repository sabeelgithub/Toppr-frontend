import {  useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Dialog, Popover,  } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import icon from "../Assets/ICON.jpg"

import { useDispatch, useSelector } from 'react-redux'
import { ClientLogout } from '../Redux/ClientSlice'
import { ExpertLogout } from '../Redux/ExpertSlice'

const products = [
  { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
  { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
  { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
  { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const token_client = useSelector((state)=>state.ClientReducer.accessToken)
  const expert_token = useSelector((state)=>state.ExpertReducer.accessToken)
  const client = useSelector((state)=>state.ClientReducer.client)
  const expert = useSelector((state)=>state.ExpertReducer.expert)
  
 

  return (
    <>
    <header className="bg-black">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 " aria-label="Global">
        <div className="flex lg:flex-1">
          <a  className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img onClick={()=>{
              navigate('/')
            }} className="h-12 w-auto" src={icon} alt="" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
         
        <Link to="/" onClick={()=>{
          localStorage.setItem('rating',0)
        }} className="text-sm font-semibold leading-6 text-white">Home</Link>
        <Link to="/domains" onClick={()=>{
          localStorage.setItem('rating',0)
        }} className="text-sm font-semibold leading-6 text-white ">Domains</Link>
        <Link to="/experts" onClick={()=>{
          localStorage.setItem('rating',0)
        }} className="text-sm font-semibold leading-6 text-white ">Experts</Link>
       
        
      
        
        </Popover.Group>
        
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
       
         {(client || expert) && (
          <Link to="/profile" onClick={()=>{
            localStorage.setItem('rating',0)
          }} className='text-white mx-32 mt-2 uppercase'>
            {client?.username || expert?.username}
          </Link>
        )}
       
        


       

        {
          (token_client || expert_token) ? (
            <button onClick={() => {
              if (token_client) {
                dispatch(ClientLogout());
                localStorage.setItem('Component','dashboard')
                localStorage.setItem('rating',0)
              } else if (expert_token) {
                dispatch(ExpertLogout());
                localStorage.setItem('Component','dashboard')
              }
              navigate('/');
            }} className="text-sm font-semibold leading-6 text-white py-2 px-3 rounded-md bg-yellow-400 hover:bg-yellow-500">
              Log out
            </button>
          ) : (
            <Link to="/login" className="text-sm font-semibold leading-6 text-white py-2 px-3 rounded-md bg-yellow-400 hover:bg-yellow-500">
              Log In
            </Link>
          )
        }
          
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10 text-white bg-white" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src={icon}
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
               
                <Link to="/" onClick={()=>{
                  localStorage.setItem('rating',0)
                }} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Home</Link>
                <Link to="/domains" onClick={()=>{
                  localStorage.setItem('rating',0)
                }} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Domains</Link>
                <Link to="/experts" onClick={()=>{
                  localStorage.setItem('rating',0)
                }} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Experts</Link>
                {(client || expert) && (
                  <Link to="/profile" onClick={()=>{
                    localStorage.setItem('rating',0)
                  }} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 uppercase">
                    {client?.username || expert?.username}
                  </Link>
                )}
               
                
               
              
              </div>
              <div className="py-6">
                <Link
                  to="/login"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
    </>
  )
}