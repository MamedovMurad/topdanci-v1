
import React, { useState } from 'react'

type Props = {
    images: {src:string,alt:string}[];
    current: number;
}

export default function ShowImage({ images, current }: Props) {
    const [image, setimage] = useState(current)

    function handleChange(isNext: boolean) {
        if (isNext) {
            if (images.length - 1 > current) {
                setimage(current++)
            } else {
                setimage(0)
            }
        }
        else {
            if (current > 0) {
                setimage(current--)
            } else {
                setimage(images.length - 1)
            }
        }
    }
    return (
        <div >
            <img src={images[current].src} alt="" />
        </div>
    )
}