import { TiArrowShuffle, TiArrowLoop } from "react-icons/ti";
import { IoPlayCircleOutline, IoRepeatSharp } from "react-icons/io5";
import { AiFillStepBackward, AiFillStepForward } from "react-icons/ai";
import { MdOutlineRepeat } from 'react-icons/md';
// import { GrExpand } from 'react-icons/gr';

import { currentTrackIdState, isPlayingState } from '../atoms/songAtom';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import useSpotify from "../hooks/useSpotify";
import useSongInfo from '../hooks/useSongInfo';


function Player() {
  const spotifyApi = useSpotify();
  const { data: session, status } = useSession();

  const [currentTrackId, setCurrentTrackId] = useRecoilState(currentTrackIdState);
  const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);
  // const [volume, setVolume] = useState(50);

  const songInfo = useSongInfo();

  const fetchCurrentSong = () => {
    if (!songInfo) {
      spotifyApi.getMyCurrentlyPlayingTrack().then((data) => {
        console.log('Now playing: ', data.body?.item);
        setCurrentTrackId(data.body?.item?.id);

        spotifyApi.getMyCurrentPlaybackState().then((data) => {
          setIsPlaying(data.body?.is_playing);
        });
      });
    }
  };

  useEffect(() => {
    if (spotifyApi.getAccessToken() & !currentTrackId) {
      fetchCurrentSong();
    }
  }, [currentTrackIdState, spotifyApi, session]);

  return (
    <div className='text-white h-20 bg-gradient-to-b from-black to-gray-900 grid grid-cols-3 text-xs md:text-base px-2 md:px-8'>
      <div className='flex items-center space-x-4'>
        <img className='hidden md:inline h-12 w-12' src={songInfo?.album.images?.[0]?.url} alt='' />
        <div className=''>
          <h3 className='text-md'>{songInfo?.name}</h3>
          <p className='text-gray-500 text-xs'>{songInfo?.artists?.[0]?.name}</p>
        </div>
      </div>

      <div className='flex items-center space-x-7 justify-center'>
        <TiArrowShuffle className='button'/>
        <AiFillStepBackward className='button'/>
        <IoPlayCircleOutline className='button w-9 h-9'/>
        <AiFillStepForward className='button'/>
        <MdOutlineRepeat className='button'/>
      </div>
    </div>
  )
}

export default Player;