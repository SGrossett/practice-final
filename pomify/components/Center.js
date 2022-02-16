import { shuffle } from 'lodash';
import { useEffect, useState } from 'react';
import { playlistIdState, playlistState } from '../atoms/playlistAtom';
import { useRecoilState, useRecoilValue } from 'recoil';
import useSpotify from '../hooks/useSpotify';
import Songs from '../components/Songs';
import UserIcon from '../components/UserIcon';

const colours = [
  'from-indigo-500',
  'from-blue-500',
  'from-green-500',
  'from-red-500',
  'from-yellow-500',
  'from-pink-500',
  'from-purple-500'
];

function Center() {
  const spotifyApi = useSpotify();
  const playlistId = useRecoilValue(playlistIdState);

  const [ colour, setColour ]= useState(null);
  const [playlist, setPlaylist] = useRecoilState(playlistState);

  useEffect(() => {
    setColour(shuffle(colours).pop());
  }, [playlistId]);

  useEffect(() => {
    spotifyApi.getPlaylist(playlistId).then((data) => {
      setPlaylist(data.body)
    }).catch(error => console.log('Something went wrong', error))
  }, [spotifyApi, playlistId]);

  console.log(playlist);

  return (
    <div className='flex-grow h-screen overflow-y-scroll scrollbar-hide'>
      <UserIcon />
   
      <section className={`flex items-end space-x-7 bg-gradient-to-b to-black ${colour} h-80 text-white p-8`}>
        <img 
          className='w-44 h-44 shadow-2xl'
          src={playlist?.images?.[0]?.url}
          alt='' 
        />
        <div>
          <p>PLAYLIST</p>
          <h1 className='text-2xl md:text-3xl xl:text-5xl'>{playlist?.name}</h1>
        </div>
      </section>

      <div>
        <Songs />
      </div>
    </div>
  )
}

export default Center;