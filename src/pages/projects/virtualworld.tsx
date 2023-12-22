import style from '@/styles/projects.module.css'
import VideoPlayer from '@/components/VideoPlayer';
import CodeSnippet from '@/components/CodeSnippet';

export default function Home() {

const aStarAlgo = 
`public List<Point> computePath(Point start, Point end,
                               Predicate<Point> canPassThrough,
                               BiPredicate<Point, Point> withinReach,
                               Function<Point, Stream<Point>> potentialNeighbors) {

    List<Point> path = new LinkedList<>(); //list to store path

    //holds open points, sort the queue by first the fCost, then gCost
    PriorityQueue<Point> open = new PriorityQueue<>((p1, p2) -> {
        int fCompare = Integer.compare(p1.getfCost(), p2.getfCost());

        //if fCosts are the same, sort by gCost
        if (fCompare == 0) {
            return Integer.compare(p1.getgCost(), p2.getgCost());
        }
        else{
            return fCompare;
        }
    });

    HashSet<Point> closed = new HashSet<>(); //nodes that have been visited with the shortest path

    start.setgCost(0); //begin with g cost at zero
    start.setfCost(start.calcF(end)); //initialize first fCost
    open.add(start);

    while(!(open.isEmpty())){
        Point current = open.poll();// pop point with the shortest path (lowest f value)

        //if we reached the end then backtrack through prior nodes to add the path
        Point temp = current;
        if(withinReach.test(temp, end)){
            while(temp != null && !(temp.equals(start))) {
                path.add(0, temp);
                temp = temp.getPrior();
            }
            return path;
        }

        potentialNeighbors.apply(current) //get the stream of potential neighbors of current point
                .filter(canPassThrough) //make sure they are able to move through (non obstacles)
                .filter(neighbor -> !(closed.contains(neighbor))) //make sure they are not in closed list
                .forEach(neighbor -> { //iterate through valid neighbors

                  int currentG = current.calcDistanceFromStart(start) + neighbor.calcToAdjacent(current); //hold current g value to compare

                  if(open.contains(neighbor)) {//if neighbor is already in the open list, is the G cost better?
                      if( currentG < neighbor.getgCost()){

                          //if so, remove from list and replace its values with the lowest cost
                          open.remove(neighbor);

                          neighbor.setgCost(currentG);
                          neighbor.setfCost(neighbor.calcF(end));
                          neighbor.setPrior(current);
                          open.add(neighbor);
                      }
                  }
                  else{
                    //if not, then continue on to set values
                    // System.out.println("Adding new neighbor to open list: " + neighbor);

                    neighbor.setgCost(current.calcDistanceFromStart(start) + neighbor.calcToAdjacent(current));
                    neighbor.setgCost(current.calcDistanceFromStart(start) + neighbor.calcToAdjacent(current));
                    neighbor.setfCost(neighbor.calcF(end));
                    neighbor.setPrior(current);
                    open.add(neighbor);
                  }
              });

          //after all neighbors visited, add the that point to the closed list, so it is not visited anymore
          closed.add(current);
        }
      return path; //empty path
    }`;

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
            <li><a href='#three'>Pathfinding</a></li>
            <li>•</li>
            <li><a href='#four'>Refactoring</a></li>
          </ul>
        </section>

        <section className={style.subSection}>
          <h2 id='one'>Overview</h2>
          <p>This virutal world was a quater long project in CSC203. Throughout the quater we applied concepts that we learned to a project that had a large exsisting code base.</p>
          <br></br>
          <br></br>
          <a className="button" href="https://github.com/noahgiboney/virtualworld" target="_blank" rel="noopener noreferrer">Repository</a>
        </section>

        <section className={style.subSection}>
          <h2 id='two'>Demo</h2>
          <p>The project in action. I added a world changing event that is triggered by the user pressing the volcano, which causes lava to flood the river
           and wakes up spiders from the various nests across the world. The spiders will path to the human and kill them. This will cause the fairy to 
           either choose to first kill the spiders or revive the, whichever is closest. This event can be triggered as many times as the user wants to keep
           flooding the river and spawning spiders.
          </p>
          <div className={style.imageContainer}>
            <VideoPlayer src="/videos/VirtualWorldDemo.mp4"/>
          </div>
        </section>

        <section className={style.subSection}>
          <h2 id='three'>Pathfinding</h2>
          <p>With the given code base, the entities had a problematic movement, they only moved in a single step fashion where they check the 
            neighboring points without consiering the full path. This resulted them in getting stuck from moving quite often. To combat this, 
            I implemented the a-star pathing algorithm</p>
          <br></br>
          <p>By calculating the total cost of a path as the sum of the actual start-to-node cost (g(n)) and the estimated node-to-goal cost (h(n)), 
            A* intelligently prioritizes nodes that seem closer to the goal. The algorithm iteratively explores adjacent nodes, expanding its search 
            based on the lowest combined cost (f(n) = g(n) + h(n)). Its effectiveness hinges on the heuristic's accuracy: a well-chosen heuristic can 
            significantly reduce the search area, making a-star the fastest. It never overestimates the actual cost to the goal, a-star ensures the 
            discovery of the shortest path.</p>
          <br></br>
          <p>This is my function 'computePath' that is the implementation of the a-star algorithm for this virtual world. It takes in a stream of 
            potential neighboring points, a predicate to determine if the point is valid to move to, and a biprediate if the point is within reach of
            the entity. I used a linkedlist to store the path and a priority queue hold open points, sorted by the fCost then the gCost. I also used a
            HashSet for the closed list for quick lookup times.
          </p>
           <CodeSnippet code={aStarAlgo} language="java"/>
        </section>

        <section className={style.subSection}>
          <h2 id='four'>Refactoring</h2>
          <p>The given code base had many problems that we were tasked to fix. We first had to refactor without changing the function of any entities or their interactoin. Firstly, the classes had high coupling and low cohesion. They also relied on an enum rather the using instances of objects. There were many correct ways to approach the refactor, but the following UML represents my design.</p>
          <div className={style.imageContainer}>
            <img src="/images/virtualworld/UML.png" alt='uml diagram'></img>
          </div>
          <p>In order to achieve high cohesion, moving around instance variables was essential, along with creating other classes to create a entity heiarchy. Having parent abstract that acted as super classes to similar behaving entities reduced repition in the code base and allowed for a concise design. Interfaces also were helpful to refactor, as they allowed me to pull a common method from classes and only have a certain class implement the trasnfrom interface if they can do this in the game.</p>
        </section>

      </section>
    );
  }
