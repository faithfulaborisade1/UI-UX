
import { useEffect, useRef, useState } from 'react'
import { hightlightsSlides } from '../constants'
import gsap from 'gsap'

const VideoCarousel = () => {
    const vidoeRef = useRef([])
    const vidoeSpanRef = useRef([])
    const vidoeDivRef = useRef([])

    const[video,setVideo]= useState({
        isEnd: false,
        startPlay: false,
        videoId: 0,
        isLastVideo: false,
        isPlaying: false,
    })

    const [loadedData, setLoadedData] = useState([]);

    const {isEnd,isPlaying,isLastVideo,videoId,startPlay} = video;

    useEffect(()=>{
        if(loadedData.length > 3) {
            if(!isPlaying){
                vidoeRef.current[videoId].pause();
            }else{
                startPlay && vidoeRef.current[videoId].play();
            }
        }

    },[startPlay,isPlaying,videoId,loadedData])

    useEffect(() =>{
        const currentProgress = 0;
        let span = vidoeSpanRef.current;

        if(span[videoId]) {
            //progress
            let anim = gsap.to(span[videoId],{onUpdate: () => {

            },
            
            onComplete: () => {

            }

            })
        }
    },[videoId,startPlay])
  return (
    <>
        <div className='flex items-center'>
            {hightlightsSlides.map((list,i) => (
                <div key={list.id} id='slider' className='sm:pr-20 pr-10'>
                    <div className='video-carousel_container'>
                        <div className='w-full h-full flex-center rounded-3xl overflow-hidden bg-black'>
                            <video id='video' playsInline={true} preload='auto' muted ref={(el) => (vidoeRef.current[i] = el)} onPlay={() => {setVideo((prevVideo) =>({
                                ...prevVideo, isPlaying:true
                            }))}}>
                                <source src={list.video} type='video/mp4'/>
                            </video>
                        </div>
                        <div className='absolute top-12 left -[5%] z-10'>
                            {list.textLists.map((text) =>(
                                <p key={text} className='md:text-2xl text-xl font-medium'> {text}</p>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
        <div className='relative flex-center mt-10'>
            <div className='flex-center py-5 px-7 bg-gray-300 backdrop:blur rounded-full'>
                {videoRef.current.map((_, i) => (
                    <span key={i} ref={(el) => (vidoeDivRef.current[i] = el)} className='mx-2 w-3 h-3 bg-gray-200 rounded-full relative cursor-pointer' ></span>
                ))}
            </div>

        </div>
    </>
  )
}

export default VideoCarousel