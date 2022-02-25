import { IoHomeOutline} from 'react-icons/io5';
import Link from 'next/link';

function StatsSidebar() {



  return (
    <div className=''>
      <div className=''>
        <div className='flex flex-col items-center justify-center p-5 text-gray-500'>
            <Link href="/">
                <button className='flex items-center space-x-2 hover:text-white'>
                    <IoHomeOutline size='1.5em'/>
                    <p> Main Menu</p>
                </button>
            </Link>   
            <hr className='border-t-[0.1px] border-gray-900' />
        </div>
      </div>
    </div>
  )
}

export default StatsSidebar