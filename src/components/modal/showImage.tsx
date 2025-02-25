
import React, { useState } from 'react'
import DetailBigImage from '../ui/detailImageBig';

type Props = {
    images: {src:string,alt:string}[];
    current: number;
}

export default function ShowImage({ images, current }: Props) {
    console.log(images);
    
    // const [image, setimage] = useState(current)

    // function handleChange(isNext: boolean) {
    //     if (isNext) {
    //         if (images.length - 1 > current) {
    //             setimage(current++)
    //         } else {
    //             setimage(0)
    //         }
    //     }
    //     else {
    //         if (current > 0) {
    //             setimage(current--)
    //         } else {
    //             setimage(images.length - 1)
    //         }
    //     }
    // }
    return (
        <div className=' w-full  relative bg-[#222] pb-5'>
            <DetailBigImage images={images} current={current}/>
        </div>
    )
}