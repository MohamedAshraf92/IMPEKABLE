import React from 'react';

import './stories.css'
import story1 from '../../assets/story_add.png'
import story2 from '../../assets/story_2.png'
import story3 from '../../assets/story_3.png'
import story4 from '../../assets/story_4.png'
import story5 from '../../assets/story_5.png'
import story6 from '../../assets/story_6.png'
import story7 from '../../assets/story_7.png'
import story8 from '../../assets/story_8.png'
import storyAll from '../../assets/story_all.png'

const Stories = () => {
    return (
        <div className='stories'>
            <div className='add'>
                <img src={story1} alt='story'/>
            </div>
            <div className='story'>
                <img src={story2} alt='story'/>
            </div>
            <div className='story'>
                <img src={story3} alt='story'/>
            </div>
            <div className='story'>
                <img src={story4} alt='story'/>
            </div>
            <div className='story'>
                <img src={story5} alt='story'/>
            </div>
            <div className='story'>
                <img src={story6} alt='story'/>
            </div>
            <div className='story'>
                <img src={story7} alt='story'/>
            </div>
            <div className='story'>
                <img src={story8} alt='story'/>
            </div>
            <div className='story'>
                <img src={story3} alt='story'/>
            </div>
            <div className='story'>
                <img src={story4} alt='story'/>
            </div>
            <div className='story'>
                <img src={story5} alt='story'/>
            </div>
            <div className='story'>
                <img src={story8} alt='story'/>
            </div>
            <div className='story'>
                <img src={story2} alt='story'/>
            </div>
            <div className='story'>
                <img src={story3} alt='story'/>
            </div>
            <div className='story'>
                <img src={storyAll} alt='story'/>
            </div>
        </div>
    );
};

export default Stories;