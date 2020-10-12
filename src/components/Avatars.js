import React from 'react';
import Avatar from './Avatar';


const family = [
    {
        image : "https://static.wikia.nocookie.net/simpsons/images/3/33/Homer.png/revision/latest/top-crop/width/360/height/450?cb=20110703093455&path-prefix=fr",
        firstName : "Homer",
        lastName : "Simpson"
    },

    {
        image : "https://www.stickees.com/files/cartoon/the-simpsons/2239-bart-simpson-.png",
        firstName : "Bart",
        lastName : "Simpson"
    },
    {
        image : "https://www.stickees.com/files/cartoon/the-simpsons/2251-maggie-simpson-sticker.png",
        firstName : "Maggie",
        lastName : "Simpson"
    }
]

const Avatars = () => {
    return family.map((member, index) =>
    <Avatar key={index} {...member}/>
    )}


export default Avatars;