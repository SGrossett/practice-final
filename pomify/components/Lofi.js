
import useSpotify from '../hooks/useSpotify';

function Lofi({ lofi, setLofi }) {



  return (
    <div>
        <div className='song-container'>
            <button onClick={() => setLofi(!lofi)}>
            <img className='rotateSong'  
            src="https://previews.dropbox.com/p/thumb/ABckTuwcDvS8UiZgwZSgB2BRTVjE9LwZrgjMpaLvXuzLc6l33_K5FjKA4-5sW_XcjN3icaPXJpfXhQUI6Sbiddn4p6gR73TLdkepQmZlrSY8VLadGcZIpGgEi2Uo1zF0cIxBz37K53Q9B3ERi_dNl7b0EKaOcmDC_F7mXsbVzRUlRmDXR-hjb02ZGOnZUEqp1wuG6rRT8k-c5EkWzz-vT8Xz31r4Gf2hDJihOqORLB_jTr1XAR7J4fALzdyXKPM0jiEj1d9iOWySABfi4XZQT74AO9FX1LQUzER2lKdi_b6EsWP9_33zzox1HYkwvRZ48vgU-RaDIMZGx8r3CnEoio1KnW7WpBmBETQQqAJ9ZLYwww/p.jpeg" alt="" />
            </button>
        </div>
    </div>
  )
}

export default Lofi;