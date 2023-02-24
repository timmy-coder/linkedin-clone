import { FiberManualRecord, InfoOutlined } from '@material-ui/icons'
import React from 'react'
import './Widgets.css'

function Widget() {
    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecord/>
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )
  return (
    <div className='widgets'>
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoOutlined/>
      </div>
      {newsArticle("The greatest election ever in Nigeria", "Top news - 9000 readers")}
      {newsArticle("The greatest election ever in Nigeria", "Top news - 9000 readers")}
      {newsArticle("The greatest election ever in Nigeria", "Top news - 9000 readers")}
      {newsArticle("The greatest election ever in Nigeria", "Top news - 9000 readers")}
      {newsArticle("The greatest election ever in Nigeria", "Top news - 9000 readers")}
      {newsArticle("The greatest election ever in Nigeria", "Top news - 9000 readers")}
      {newsArticle("The greatest election ever in Nigeria", "Top news - 9000 readers")}

    </div>
  )
}

export default Widget
