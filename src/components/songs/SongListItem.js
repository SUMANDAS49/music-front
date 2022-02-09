import React, { useEffect, useState } from 'react';
import "./songStyle.css"
import FavoriteIcon from '@mui/icons-material/Favorite';
const SongListItem = ({ data, setClicked, setClickedDetails }) => {
    const [title, setTitle] = useState("")
    const [loading, setLoanding] = useState(true)
    useEffect(() => {
        let dta = ""
        dta = data.title;
        if (dta.length < 26) {
            setTitle(data.title)
            setLoanding(false)
        }
        else {
            setTitle(dta.substring(0, 14) + "...")
            // console.log(dta.substring(0, 14) + "...")
            setLoanding(false)
        }
    }, [])
    return <div className='song-list-item-container'
        onClick={() => {
            setClickedDetails(data)
            setClicked(true)
        }}
    >
        {
            !loading &&
            <div style={{ display: "flex" }}>
                <img className='pic' src={data.pictureLink} alt='profile' />
                <div className='song-details-container' >
                    <div className='song-name'>{title}</div>
                    <div className='singer-name'>{data.singer}</div>
                </div>

            </div>

        }
        {
            // !loading && <div className='fev-icon'><FavoriteIcon /></div>
        }

        {
            loading && <h3>Loading...</h3>
        }

    </div >;
};

export default SongListItem;
