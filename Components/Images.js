import React from 'react'
import UnsplashImages from './UnsplashImages'
import InfiniteScroll from 'react-infinite-scroll-component'
import Heading from './Heading'
import Loader from './Loader'
import './images.css'

function Images() {
   const imagesLink = [
       {id:1,   url: 'https://source.unsplash.com/assets/photo-1428279148693-1cf2163ed67d-9869bbd99114f8d100a48d67d1b8ec56c4171e661131714f2b570e6dcc0b8bb3.jpg'},
       {id:2,   url: 'https://source.unsplash.com/assets/photo-1428279148693-1cf2163ed67d-9869bbd99114f8d100a48d67d1b8ec56c4171e661131714f2b570e6dcc0b8bb3.jpg'},
       {id:3,   url: 'https://source.unsplash.com/assets/photo-1428279148693-1cf2163ed67d-9869bbd99114f8d100a48d67d1b8ec56c4171e661131714f2b570e6dcc0b8bb3.jpg'},
       {id:4,   url: 'https://source.unsplash.com/assets/photo-1428279148693-1cf2163ed67d-9869bbd99114f8d100a48d67d1b8ec56c4171e661131714f2b570e6dcc0b8bb3.jpg'},
       {id:5,   url: 'https://source.unsplash.com/assets/photo-1428279148693-1cf2163ed67d-9869bbd99114f8d100a48d67d1b8ec56c4171e661131714f2b570e6dcc0b8bb3.jpg'},
       {id:6,   url: 'https://source.unsplash.com/assets/photo-1428279148693-1cf2163ed67d-9869bbd99114f8d100a48d67d1b8ec56c4171e661131714f2b570e6dcc0b8bb3.jpg'},
       {id:7,   url: 'https://source.unsplash.com/assets/photo-1428279148693-1cf2163ed67d-9869bbd99114f8d100a48d67d1b8ec56c4171e661131714f2b570e6dcc0b8bb3.jpg'},
       {id:8,   url: 'https://source.unsplash.com/assets/photo-1428279148693-1cf2163ed67d-9869bbd99114f8d100a48d67d1b8ec56c4171e661131714f2b570e6dcc0b8bb3.jpg'},
       {id:9,   url: 'https://source.unsplash.com/assets/photo-1428279148693-1cf2163ed67d-9869bbd99114f8d100a48d67d1b8ec56c4171e661131714f2b570e6dcc0b8bb3.jpg'},
       {id:10,   url: 'https://source.unsplash.com/assets/photo-1428279148693-1cf2163ed67d-9869bbd99114f8d100a48d67d1b8ec56c4171e661131714f2b570e6dcc0b8bb3.jpg'},
       {id:11,   url: 'https://source.unsplash.com/assets/photo-1428279148693-1cf2163ed67d-9869bbd99114f8d100a48d67d1b8ec56c4171e661131714f2b570e6dcc0b8bb3.jpg'},
       {id:12,   url: 'https://source.unsplash.com/assets/photo-1428279148693-1cf2163ed67d-9869bbd99114f8d100a48d67d1b8ec56c4171e661131714f2b570e6dcc0b8bb3.jpg'},
       {id:13,   url: 'https://source.unsplash.com/assets/photo-1428279148693-1cf2163ed67d-9869bbd99114f8d100a48d67d1b8ec56c4171e661131714f2b570e6dcc0b8bb3.jpg'},
       {id:14,   url: 'https://source.unsplash.com/assets/photo-1428279148693-1cf2163ed67d-9869bbd99114f8d100a48d67d1b8ec56c4171e661131714f2b570e6dcc0b8bb3.jpg'},
       {id:15,   url: 'https://source.unsplash.com/assets/photo-1428279148693-1cf2163ed67d-9869bbd99114f8d100a48d67d1b8ec56c4171e661131714f2b570e6dcc0b8bb3.jpg'},
       {id:16,   url: 'https://source.unsplash.com/assets/photo-1428279148693-1cf2163ed67d-9869bbd99114f8d100a48d67d1b8ec56c4171e661131714f2b570e6dcc0b8bb3.jpg'},
       {id:17,   url: 'https://source.unsplash.com/assets/photo-1428279148693-1cf2163ed67d-9869bbd99114f8d100a48d67d1b8ec56c4171e661131714f2b570e6dcc0b8bb3.jpg'},
       {id:18,   url: 'https://source.unsplash.com/assets/photo-1428279148693-1cf2163ed67d-9869bbd99114f8d100a48d67d1b8ec56c4171e661131714f2b570e6dcc0b8bb3.jpg'},
       {id:19,   url: 'https://source.unsplash.com/assets/photo-1428279148693-1cf2163ed67d-9869bbd99114f8d100a48d67d1b8ec56c4171e661131714f2b570e6dcc0b8bb3.jpg'},
       {id:20,   url: 'https://source.unsplash.com/assets/photo-1428279148693-1cf2163ed67d-9869bbd99114f8d100a48d67d1b8ec56c4171e661131714f2b570e6dcc0b8bb3.jpg'},
       {id:21,   url: 'https://source.unsplash.com/assets/photo-1428279148693-1cf2163ed67d-9869bbd99114f8d100a48d67d1b8ec56c4171e661131714f2b570e6dcc0b8bb3.jpg'},
       {id:22,   url: 'https://source.unsplash.com/assets/photo-1428279148693-1cf2163ed67d-9869bbd99114f8d100a48d67d1b8ec56c4171e661131714f2b570e6dcc0b8bb3.jpg'},
       {id:23,   url: 'https://source.unsplash.com/assets/photo-1428279148693-1cf2163ed67d-9869bbd99114f8d100a48d67d1b8ec56c4171e661131714f2b570e6dcc0b8bb3.jpg'},
       {id:24,   url: 'https://source.unsplash.com/assets/photo-1428279148693-1cf2163ed67d-9869bbd99114f8d100a48d67d1b8ec56c4171e661131714f2b570e6dcc0b8bb3.jpg'},
       {id:25,   url: 'https://source.unsplash.com/assets/photo-1428279148693-1cf2163ed67d-9869bbd99114f8d100a48d67d1b8ec56c4171e661131714f2b570e6dcc0b8bb3.jpg'},
       {id:26,   url: 'https://source.unsplash.com/assets/photo-1428279148693-1cf2163ed67d-9869bbd99114f8d100a48d67d1b8ec56c4171e661131714f2b570e6dcc0b8bb3.jpg'},
       {id:27,   url: 'https://source.unsplash.com/assets/photo-1428279148693-1cf2163ed67d-9869bbd99114f8d100a48d67d1b8ec56c4171e661131714f2b570e6dcc0b8bb3.jpg'},
       {id:29,   url: 'https://source.unsplash.com/assets/photo-1428279148693-1cf2163ed67d-9869bbd99114f8d100a48d67d1b8ec56c4171e661131714f2b570e6dcc0b8bb3.jpg'},
       {id:30,   url: 'https://source.unsplash.com/assets/photo-1428279148693-1cf2163ed67d-9869bbd99114f8d100a48d67d1b8ec56c4171e661131714f2b570e6dcc0b8bb3.jpg'},
       {id:31,   url: 'https://source.unsplash.com/assets/photo-1428279148693-1cf2163ed67d-9869bbd99114f8d100a48d67d1b8ec56c4171e661131714f2b570e6dcc0b8bb3.jpg'},
       {id:32,   url: 'https://source.unsplash.com/assets/photo-1428279148693-1cf2163ed67d-9869bbd99114f8d100a48d67d1b8ec56c4171e661131714f2b570e6dcc0b8bb3.jpg'},
       {id:33,   url: 'https://source.unsplash.com/assets/photo-1428279148693-1cf2163ed67d-9869bbd99114f8d100a48d67d1b8ec56c4171e661131714f2b570e6dcc0b8bb3.jpg'}
   ]
    return (
        <div className="image_div">
        <Heading/>
        <InfiniteScroll
                dataLength={imagesLink.length}
                next={imagesLink} //it works only api... call every time and get the loader below of images next={useEffect(()=>{images()})}
                hasMore={true}
                loader={<Loader/>}
        >
        <div className="displaylinksImages">
            {
                imagesLink.map(item =>{
                    return(
                    <UnsplashImages key={item.id} url={item.url}/>
                    )
                })
            }
            </div>

        </InfiniteScroll>
        </div>
    )
}

export default Images
