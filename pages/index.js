import React, { useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [excuse, setExcuse] = useState(null)
  const generate = () => {
    let myDog = ['dog', 'cat', 'sense of ennui', 'hamster', 'chinchilla', 'iguana', 'turtle', 'best friend', 'bro', 'boo', 'crush', 'sister', 'brother', 'nemesis', 'doppelganger', 'gerbil', 'bunny', 'fish', 'crew'];
    let ate = ['ate', 'peer-reviewed', 'destroyed', 'deleted', 'erased', 'remixed', 'twitched', 'recycled', 'livetweeted', 'undermined', 'underbid', 'upcycled', 'gave away', 'plagiarised', 'confiscated', 'barfed on', 'stole', 'ransomed', 'spilled water on', 'lost', 'misplaced', 'buried', 'shredded', 'hid', 'liberated', 'left with', 'ebayed', 'craigslisted', 'etsyed', 'tweeted', 'instagrammed', 'snapchatted', 'youtubed', 'dunked on', 'subteweeted', 'favorited', 'upvoted', 'downvoted', 'live cast', 'pinned', 'vlogged', 'blogged about'];
    let myHomework = ['homework', 'project', 'essay', 'film project', 'visualization', 'infographic', 'pre-writing', 'term paper', 'lab report', 'reading log', 'summary', 'article', 'flash cards', 'study guide', 'textbook', 'workbook', 'reading book', 'diorama', 'poster', 'dreams', 'laptop', 'computer', 'tablet', 'momentum', 'report', 'slideshow', 'slide deck', 'presentation', 'worksheet', 'handout', 'notes', 'portfolio', 'blog post', 'comment'];
    
    let who = myDog[Math.round(Math.random()*(myDog.length-1))];
    let did = ate[Math.round(Math.random()*(ate.length-1))];
    let what = myHomework[Math.round(Math.random()*(myHomework.length-1))];
     setExcuse(`My ${who} ${did} my ${what}.`);
  }
  return (
    <div className={styles.container}>
      <h1> Excuse Generator </h1>
      <button className="click" onClick={generate}> Click Here </button>
      {
        excuse?
        <div id="excuses">
          {excuse}
        </div>
        : null
      }
    </div>
  )
}
