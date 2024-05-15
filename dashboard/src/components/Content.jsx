import React from 'react'
import ContentHeader from './ContentHeader'
import "../styles/content.css"
import Card from './Card'
import Teacherlist from './Teacherlist'


const Content = () => {
  return (
    <div className='content'>
        <ContentHeader/>
        <Card/>
        <Teacherlist/>
    </div>
  )
}

export default Content