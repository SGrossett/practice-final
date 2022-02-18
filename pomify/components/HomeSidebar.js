import { IoHomeOutline, IoSettingsOutline, IoGameControllerOutline } from 'react-icons/io5';
import { FaRegChartBar } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import { GoSearch } from "react-icons/go";
import { LogoutIcon } from "@heroicons/react/outline";

import { signOut, useSession } from 'next-auth/react';
import { useState, useEffect } from 'react';
import { playlistIdState } from '../atoms/playlistAtom';
import { useRecoilState } from 'recoil';
import useSpotify from '../hooks/useSpotify';

function HomeSidebar() {
  const { data: session, status } = useSession();
  const [playlists, setPlaylists] = useState([]);
  const [playlistId, setPlaylistId] = useRecoilState(playlistIdState);
  const spotifyApi = useSpotify();

  useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      spotifyApi.getUserPlaylists().then((data) => {
        setPlaylists(data.body.items);
      });
    }
  }, [session, spotifyApi]);

  console.log("Playlist: ", playlists);

  return (
    <div className='text-gray-500 p-5 h-screen border-gray-900 text-xs lg:text-sm border-r overflow-y-scroll scrollbar-hide sm:max-w-[12rem] lg:max-w-[15rem] hidden md:inline-flex pb-40'>
      <div className='space-y-8'>
        <div className='space-y-4'>
          <button className='flex items-center space-x-2 hover:text-white'>
            <IoHomeOutline size='1.5em'/>
            <p>Home</p>
          </button>
          <button className='flex items-center space-x-2 hover:text-white'>
            <GoSearch size='1.5em'/>
            <p>Search</p>
          </button>
        </div>

        <div className='space-y-4'>
          <button className='flex items-center space-x-2 hover:text-white'>
            <FaRegChartBar size='1.5em'/>
            <p>Progress</p>
          </button>
          <button className='flex items-center space-x-2 hover:text-white'>
            <IoGameControllerOutline size='1.5em'/>
            <p>Break</p>
          </button>
          <button className='flex items-center space-x-2 hover:text-white' onClick={() => signOut()}>
            <LogoutIcon className="h-6 w-6"/>
            <p>Logout</p>
          </button>
          
          <hr className='border-t-[0.1px] border-gray-900' />

          {playlists.map((playlist) => (
            <p key={playlist.id} onClick={() => setPlaylistId(playlist.id)} className='cursor-pointer hover:text-white'>{playlist.name}</p>
          ))}
          
        </div>
      </div>
    </div>
  )
}

export default HomeSidebar