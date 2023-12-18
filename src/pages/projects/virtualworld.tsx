import style from '@/styles/projects.module.css'
import UML from 'images/virtualworld/UML.png'

export default function Home() {
    return (
      <section className={style.mainContainer}>
            
        <h3>Virtual World</h3>
        <div id='sectionLine'></div>

        <section className={style.tableOfContents}>
          <ul>
            <li><a href='#one'>Overview </a></li>
            <li>•</li>
            <li><a href='#two'>Demo </a></li>
            <li>•</li>
            <li><a href='#three'>Refactoring</a></li>
            <li>•</li>
            <li><a href='#four'>Pathfinding</a></li>
          </ul>
        </section>

        <section className={style.subSection}>
          <h2 id='one'>Overview</h2>
          <p>This virutal world was a quater long project in CSC203. Throughout the quater we applied concepts that we learned to a project that had a large exsisting code base.</p>
        </section>

        <section className={style.subSection}>
          <h2 id='two'>Demo</h2>
          <p>The project in action.</p>
        </section>

        <section className={style.subSection}>
          <h2 id='three'>Refactoring</h2>
          <p>The given code base had many problems that we were tasked to fix. We first had to refactor without changing the function of any entities or their interactoin. Firstly, the classes had high coupling and low cohesion. They also relied on an enum rather the using instances of objects. There were many correct ways to approach the refactor, but the following UML represents my design.</p>
          <div className={style.imageContainer}>
            <img src={UML.src} alt='uml diagram'></img>
          </div>
          <p>In order to achieve high cohesion, moving around instance variables was essential, along with creating other classes to create a entity heiarchy. Having parent abstract that acted as super classes to similar behaving entities reduced repition in the code base and allowed for a concise design. Interfaces also were helpful to refactor, as they allowed me to pull a common method from classes and only have a certain class implement the trasnfrom interface if they can do this in the game.</p>
        </section>

        <section className={style.subSection}>
          <h2 id=''>Pathingfinding</h2>
          <p>With the given code base, the entities had a problematic movement, they only moved in a single step fashion where they check the neighboring points without consiering the full path. This resulted them in getting stuck from moving quite often. To combat this, I implemented the a-star pathing algorythm</p>
          <br></br>
          <p>It combines Dijkstra's algorithm's thoroughness with a heuristic-based approach for efficiency. By calculating the total cost of a path as the sum of the actual start-to-node cost (g(n)) and the estimated node-to-goal cost (h(n)), A* intelligently prioritizes nodes that seem closer to the goal. The algorithm iteratively explores adjacent nodes, expanding its search based on the lowest combined cost (f(n) = g(n) + h(n)). Its effectiveness hinges on the heuristic's accuracy: a well-chosen heuristic can significantly reduce the search area, making A* faster. Provided the heuristic is admissible, meaning it never overestimates the actual cost to the goal, A* ensures the discovery of the shortest path, balancing exploration and targeted searching.</p>
          <br></br>
          <p>This is the how the entitys move with the a-star pathfinding implemented. They are able to ajust their path as needed</p>
        </section>

      </section>
    );
  }
