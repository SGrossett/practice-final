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

function Center({lofi, setLofi, ticTac}) {
  const spotifyApi = useSpotify();
  const playlistId = useRecoilValue(playlistIdState);

  const [colour, setColour]= useState(null);
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

  // useEffect(() => {
  //   spotifyApi.searchPlaylists(search).then((data) => {
  //     setSearchResults(
  //       data.body.playlists.items.map((playlist) => {
  //         return {
  //           id: playlist.id,
  //           title: playlist.name,
  //           uri: playlist.uri,
  //           albumUrl: track.album.images[0].url
  //         };
  //       })
  //     )
  //   }).catch(error => console.log('Something went wrong', error))
  // }, [spotifyApi, search]);


  console.log('searchResults:', searchResults);

  return (
    <div className=' flex-grow h-screen overflow-y-scroll scrollbar-hide'>
     

      <div>
      {lofi? null : <CenterHeaderInfo />}
      {lofi? <Lofi lofi={lofi} setLofi={setLofi}/> : <Songs/>}
      </div>
    </div>
  )
}

export default Center;