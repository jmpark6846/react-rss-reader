import React from 'react'
import './App.css'

let contents=[]
fetch('http://tech.kakao.com/rss/').then(res=>{
  res.text().then((htmlTxt)=>{
    let domParser = new DOMParser()
    let doc = domParser.parseFromString(htmlTxt, 'text/html')
    let arr = []
    doc.querySelectorAll('item').forEach(item=>{
      const post = getPostObjectFromRSSItemTag(item)
      contents = contents.concat(post)
    })
    console.log(contents)
  })
})
.catch(() => console.error('Error in fetching the website'))

const getPostObjectFromRSSItemTag = (item) => {
  return {
    title: item.querySelector('title').textContent,
    description: item.querySelector('description').textContent,
    pubDate: item.querySelector('pubDate').textContent,
    link: item.querySelector('guid').textContent
  }
}
const App = () => {
  return (
    <div>
      <h1>Hallo!</h1>
    </div>
  )
}

export default App
