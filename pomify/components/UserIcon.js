import { Menu, Transition } from '@headlessui/react'
import { IoChevronDownSharp } from 'react-icons/io5';
import { signOut, useSession } from 'next-auth/react';
import { Fragment } from 'react'


export default function Example() {
  const { data: session } = useSession();

  return (
    <div className='w-56 text-right absolute top-5 mr-4'>
      <Menu as='div' className='relative inline-block text-left'>
        <div>
          <Menu.Button className='flex items-center bg-black text-white space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full pr-1'>
            <div className='flex items-center bg-black text-white space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-1'>
              <img 
                className='rounded-full w-10 h-10'
                src={session?.user.image}
                alt='' 
              />
              <h2>{session?.user.name}</h2>
              <IoChevronDownSharp className='ml-2 -mr-1 text-white' />
            </div>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter='transition ease-out duration-100'
          enterFrom='transform opacity-0 scale-95'
          enterTo='transform opacity-100 scale-100'
          leave='transition ease-in duration-75'
          leaveFrom='transform opacity-100 scale-100'
          leaveTo='transform opacity-0 scale-95'
        >
          <Menu.Items className='absolute right-0 w-36 mt-2 origin-top-right opacity-90 hover:opacity-80 bg-black text-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
              
            <div className='px-1 py-1'>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href='/statistics'
                    className={`${
                      active ? 'bg-gray-900' : ''
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm text-white`}
                  >
                    Progress
                  </a>
                )}
              </Menu.Item>
            </div>
            <div className='px-1 py-1'>
              <Menu.Item>
              {({ active }) => (
                  <button
                    onClick={signOut}
                    className={`${
                        active ? 'bg-gray-900' : ''
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm text-white`}
                    >
                    Log out
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}
