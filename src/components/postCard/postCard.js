import React from 'react';

import './postCard.css'
import pp from '../../assets/pp-main.png'
import { AiFillLike } from 'react-icons/ai'
import { AiFillHeart } from 'react-icons/ai'
import { AiOutlineLike } from 'react-icons/ai'
import { FaRegCommentAlt } from 'react-icons/fa'

const PostCard = (props) => {
    return (
        <div className='post-card'>
            <div className='user'>
                <div className='user-pic'>
                    <img src={pp} alt='profile picture' />
                </div>
                <div className='user-info'>
                    <h3>{props.name}</h3>
                    <p>November 16, 2021</p>
                </div>
            </div>
            <div className='post-body'>
            <p>{props.body}</p>
            </div>
            <div className="likes-comments">
                <div className="likes">
                    <div className="like"> <AiFillLike className="icon-post"/> </div>
                    <div className="love"> <AiFillHeart className="icon-post"/> </div>
                </div>
                <div className="comments">
                </div>
            </div>
            <div className="post-btns">
                <button className='like-btn'><AiOutlineLike/>&nbsp;Like</button>
                <button className='comment-btn'><FaRegCommentAlt/>&nbsp;Comment</button>
            </div>
            <div className='write-comment'>
                <img src={pp} alt='profile picture' />
                <input type='text' placeholder='Write a cooment...' />
            </div>
        </div>
    );
};

export default PostCard;