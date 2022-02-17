import { TiArrowShuffle, TiArrowLoop } from "react-icons/ti";
import { IoPlayCircleOutline, IoPauseCircleOutline } from "react-icons/io5";
import { AiFillStepBackward, AiFillStepForward } from "react-icons/ai";
import { MdOutlineRepeat } from 'react-icons/md';
import { ImVolumeMute, ImVolumeLow, ImVolumeMedium, ImVolumeHigh  } from 'react-icons/im'
import { CgArrowsExpandRight } from 'react-icons/cg';


import { currentTrackIdState, isPlayingState } from '../atoms/songAtom';
import { useSession } from 'next-auth/react';
import { useCallback, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { debounce } from 'lodash';
import useSpotify from "../hooks/useSpotify";
import useSongInfo from '../hooks/useSongInfo';


function Player() {
  const spotifyApi = useSpotify();
  const { data: session, status } = useSession();

  const [currentTrackId, setCurrentTrackId] = useRecoilState(currentTrackIdState);
  const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);
  const [volume, setVolume] = useState(50);
  const [isShuffled, setShuffled] = useState(false);
  const [isLooped, setLooped] = useState(false);

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

  const debouncedAdjustVolume = useCallback(
    debounce((volume) => {
      spotifyApi.setVolume(volume).catch((error) => {})
    }, 500),
    []
  );

  useEffect(() => {
    if (spotifyApi.getAccessToken() & !currentTrackId) {
      fetchCurrentSong();
    }
  }, [currentTrackIdState, spotifyApi, session]);

  useEffect(() => {
    if (volume > 0 && volume < 100) {
      debouncedAdjustVolume(volume);
    }
  }, [volume]);

  const handlePlayPause = () => {
    spotifyApi.getMyCurrentPlaybackState().then((data) => {
      if (data.body.is_playing) {
        spotifyApi.pause();
        setIsPlaying(false);
      } else {
        spotifyApi.play();
        setIsPlaying(true);
      }
    });
  };

  const shuffle = () => {
    setShuffled(!isShuffled);
  };

  const loop = () => {
    setLooped(!isLooped);
  };

  return (
    <div className='text-white h-20 bg-gradient-to-b from-black to-gray-900 grid grid-cols-3 text-xs md:text-base px-2 md:px-8'>
      {/* left */}
      <div className='flex items-center space-x-4'>
        <img className='hidden md:inline h-12 w-12' src={songInfo?.album.images?.[0]?.url} alt='' />
        <div className=''>
          <h3 className='text-md'>{songInfo?.name}</h3>
          <p className='text-gray-500 text-xs'>{songInfo?.artists?.[0]?.name}</p>
        </div>
      </div>
      
      {/* center */}
      <div>
        {/* center top */}
        <div className='mt-4 flex items-center space-x-7 justify-center'>
          <div onClick={shuffle}>
            {isShuffled ? (
              <TiArrowShuffle className='button fill-green-400'/> ) : ( <TiArrowShuffle className='button'/>
            )}
          </div>

          <AiFillStepBackward className='button'/>

          <div onClick={handlePlayPause}>
            {isPlaying ? (
              <IoPauseCircleOutline className='button w-9 h-9'/> ) : ( <IoPlayCircleOutline className='button w-9 h-9'/>
              )}
          </div>

          <AiFillStepForward className='button'/>

          <div onClick={loop}>
            {isLooped ? (
              <MdOutlineRepeat className='button fill-green-400'/> ) : ( <MdOutlineRepeat className='button'/>
            )}
          </div>
        </div>

        {/* center bottom */}
        <div className='flex self-end justify-center'>
          
        </div>

      </div>

      {/* right */}
      <div className='flex items-center space-x-3 md:space-x-4 justify-end pr-5'>
        <div className='button' onClick={() =>  volume > 0 && setVolume(volume - 10)}>
          { volume >=66 ? (
              <ImVolumeHigh /> ) : ( (volume >= 33) ? <ImVolumeMedium /> : (volume >= 0) ? <ImVolumeLow /> : <ImVolumeMute />
          )}
        </div>
        <input 
          className='w-14 md:28'
          type='range'
          value={volume}
          onChange={(e) => setVolume(Number(e.target.value))}
          min={0}
          max={100}
        />
        <CgArrowsExpandRight className='button'/>
      </div>

    </div>
  )
}

export default Player;