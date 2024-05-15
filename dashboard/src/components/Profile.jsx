import React from 'react'
import ProfileHeader from './ProfileHeader'
import '../styles/profile.css'
import userImg from '../assets/image.jpg'
import { BiBook } from 'react-icons/bi'


const courses = [
    {
        title:'Legal',
        duration:'2 hours',
        icon: <BiBook/>
    },
    {
        title:'Legal',
        duration:'2 hours',
        icon: <BiBook/>
    },
    {
        title:'Legal',
        duration:'2 hours',
        icon: <BiBook/>
    }
]

const Profile = () => {
  return (
    <div className='profile'>
        <ProfileHeader/>

        <div className="user--profile">
            <div className="user--detail">
                <img src={userImg} alt="" />
                <h3 className='username'>Linda kellia</h3>
                <span className='profession'>Lawyer</span>
            </div>
            <div className="user-courses">
                {courses.map((courses)=>(
                    <div className='course'>
                        <div className='course-detail'>
                            <div className='course-cover'>{courses.icon}</div>
                            <div className="course-name">
                                <h5 className='title'>{courses.title}</h5>
                                <span className='duration'>{courses.duration}</span>
                            </div>
                        </div>
                        <div className='action'>:</div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Profile