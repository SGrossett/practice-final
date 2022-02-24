import { shuffle } from 'lodash';
import { useEffect, useState } from 'react';
import { playlistIdState, playlistState } from '../atoms/playlistAtom';
import { useRecoilState, useRecoilValue } from 'recoil';
import useSpotify from '../hooks/useSpotify';
import Songs from '../components/Songs';
import Lofi from "./Lofi"
import CenterHeaderInfo from "./CenterHeaderInfo"
import Game from '../components/Game/Game'
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

function Center({lofi, setLofi, ticTac}) {
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

  //console.log(playlist);

  return (
    <div className='flex-grow h-screen overflow-y-scroll scrollbar-hide'>
      

      <div>
      {lofi? null : <CenterHeaderInfo />}
      {lofi? <Lofi lofi={lofi} setLofi={setLofi}/> : <Songs/>}
      </div>
    </div>
  )
}

export default Center;