import style from '@/styles/projects.module.css'
import solder from 'images/icetube/soldering.png'
import PCB from 'images/icetube/PCB.png'
import clock1 from 'images/icetube/clock1.png'
import clock2 from 'images/icetube/clock2.png'


export default function Home() {
    return (
      <section className={style.mainContainer}>
            
        <h3>Ice Tube Alarm Clock</h3>
        <div id='sectionLine'></div>

        <section className={style.tableOfContents}>
          <ul>
            <li><a href='#one'>Overview </a></li>
            <li>•</li>
            <li><a href='#two'>Result</a></li>
            <li>•</li>
            <li><a href='#three'>Building It</a></li>
          </ul>
        </section>

        <section className={style.subSection}>
          <h2 id='one'>Project Overview</h2>
          <p>Completed this Alarm clock assembly kit by Adafruit. This project required Eletrical assembly, soldering components to a PCB board, and testing DC voltage with a multimeter. Overall, this was my first electrical project, I learned a lot and had fun.</p>
          <br></br>
          <p>Information on this kit can be found <a href='https://learn.adafruit.com/ice-tube-clock-kit/' target='_blank'>here</a>.</p>  
        </section>
        
        <section className={style.subSection}>
          <h2 id='two'>Result</h2>
          <p>This is the resulting alarm clock that I will be using daily to wake up.</p>
          <div className={style.imageContainer}>
            <img src={clock1.src}></img>
          </div>
        </section>

        <section className={style.subSection}>
          <h2 id='three'>Building It</h2>
          <p>To instatiate an electrical connection to the various components I soldered resistors, diodes, inductors, capacitors, and a microcontroller onto a PCB. This way my first time soldering, and by the end of this project I am fully confident in soldering any joint.</p>
          <br></br>
          <p>The connections to various components on the back of this PCB were very close and called for carful soldering to not bridge connections. This was the end result with everything soldered.</p>  
          <div className={style.imageContainer}>
            <img src={solder.src}></img>
          </div>
          <br></br>
          <p>Throught the process, it was imporant to perform various voltage readings using a multimeter to check if =m the electrical components are functional. Doing this required care as it could be easy to cause a short</p>         
          <div className={style.imageContainer}>
            <img src={PCB.src}></img>
            <img src={clock2.src}></img>
          </div>
        </section>

      </section>
    );
  }
