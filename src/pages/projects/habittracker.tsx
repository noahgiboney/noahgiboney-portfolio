import style from '@/styles/projects.module.css'

export default function Home() {
    return (
      <section className={style.mainContainer}>
        <h3>Habit Tracker</h3>
        <div id='sectionLine'></div>

        <section className={style.tableOfContents}>
          <ul>
            <li><a href='#one'>Overview</a></li>
            <li>•</li>
            <li><a href='#two'>Demo</a></li>
            <li>•</li>
            <li><a href='#three'>SwiftData</a></li>
            <li>•</li>
            <li><a href='#four'>Dates</a></li>
          </ul>
        </section>

        <section className={style.subSection}>
          <h2 id='one'>Overview</h2>
          <p>This was my first iOS app built I built by myself using Swift and SwiftUI, that allows users to track their habits. I also was able to leverage the SwiftData framework to store and manage my data. Users can add personal habits and track progression by logging.</p>
          <br></br>
          <br></br>
          <a className="button" href="https://github.com/noahgiboney/habit-tracker" target="_blank" rel="noopener noreferrer">Repository</a>
        </section>

        <section className={style.subSection}>
          <h2 id='two'>Demo</h2>
        </section>

      </section>
    );
  }
