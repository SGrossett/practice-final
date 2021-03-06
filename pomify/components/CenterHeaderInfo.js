import { shuffle } from 'lodash';
import { useEffect, useState } from 'react';
import { playlistIdState, playlistState } from '../atoms/playlistAtom';
import { useRecoilState, useRecoilValue } from 'recoil';
import useSpotify from '../hooks/useSpotify';
import Songs from '../components/Songs';
import Lofi from "./Lofi"
import Game from '../components/Game/Game'
import UserIcon from '../components/UserIcon';
import Search from '../components/Search';
import TrackSearchResults from '../components/TrackSearchResults';

const colours = [
  'from-indigo-500',
  'from-blue-500',
  'from-green-500',
  'from-red-500',
  'from-yellow-500',
  'from-pink-500',
  'from-purple-500'
];

function CenterHeaderInfo({lofi, setLofi, ticTac,}) {
  const spotifyApi = useSpotify();
  const playlistId = useRecoilValue(playlistIdState);

  const [ colour, setColour ]= useState(null);
  const [playlist, setPlaylist] = useRecoilState(playlistState);
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    setColour(shuffle(colours).pop());
  }, [playlistId]);

  useEffect(() => {
    spotifyApi.getPlaylist(playlistId).then((data) => {
      setPlaylist(data.body)
    }).catch(error => console.log('Something went wrong', error))
  }, [spotifyApi, playlistId]);

  //console.log(playlist);
  let cancel = false;
  useEffect(() => {
    spotifyApi.searchTracks(search).then((data) => {
      if (cancel) return;
      setSearchResults(
        data.body.tracks.items.map((track) => {
          return {
            id: track.id,
            artist: track.artists[0].name,
            title: track.name,
            uri: track.uri,
            albumUrl: track.album.images[0].url
          };
        })
      )
      return () => (cancel = true);
    }).catch(error => console.log('Something went wrong', error))
  }, [spotifyApi, search]);

  return (
    <div className='flex-grow overflow-y-scroll scrollbar-hide'>
         <div >
        <div>
          <Search search={search}  setSearch={setSearch}/>
        </div>
        
        {search.length > 0 ? (
          <div className='absolute ml-8 '>
            <div className='bg-gradient-to-b from-black to-gray-900 border border-gray-500 p-6 grid grid-col-2 mt-24 lg:grid-cols-3 xl:grid-cols-4 gap-x-10 '>
              {searchResults.slice(0, 4).map((track) => (
                <TrackSearchResults track={track} key={track.uri} />
              ))}
            </div>
          </div> ) : ( <div></div> )
        }
      </div>
      <div className='flex justify-end'>
        <UserIcon />
      </div>
     
      <section className={`flex items-end space-x-7 bg-gradient-to-b to-black ${colour} h-80 text-white p-8`}>
        <img 
          className='w-44 h-44 shadow-2xl'
          src={playlist?.images?.[0]?.url}
          alt='' 
        />
        <div>
          <p>PLAYLIST</p>
          <h1 className='text-2xl md:text-3xl xl:text-5xl'>{playlist?.name}</h1>
          <p className='mt-3'>{playlist?.description}</p>
        </div>
      </section>
    </div>
  )
}

export default CenterHeaderInfo;