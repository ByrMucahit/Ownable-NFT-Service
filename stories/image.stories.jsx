import React from "react";
import Image from 'next/image'
import GooglePlayStore from '../Photos/google-play-store.png'

export default {
    title:'image'
};


export const ExhibitionSide = () => (<img
                                       src={GooglePlayStore}
                                       alt='google-play-store'
                                       />)