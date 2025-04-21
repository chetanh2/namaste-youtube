import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice'
import { useParams, useSearchParams } from 'react-router-dom'

const WatchPage = () => {
    const [searchParams] = useSearchParams();
    console.log(searchParams.get("v"));
    const key = searchParams.get("v");
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(closeMenu());
    },[])
  return (
    <div className="max-w-[1600px] mx-auto mt-6">

        <div className='flex gap-6 justify-between'>
        <iframe
            className="w-[80vw] h-[80vh] rounded-xl"
            src={
            "https://www.youtube.com/embed/" +
            key +
            "?autoplay=1&mute=1"
            }
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
        <div className="w-[35%] bg-slate-300 p-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam fuga maxime laudantium illum fugit beatae et, eos repudiandae ut sapiente! Deleniti recusandae id unde nobis quam, ut quod reiciendis hic cum facere dolorem eius ipsa, culpa omnis expedita rem earum.
        </div>
        </div>
    </div>
  );


}

export default WatchPage