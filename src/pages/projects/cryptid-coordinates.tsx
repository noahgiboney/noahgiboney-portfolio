import style from '@/styles/projects.module.css'
import CodeSnippet from '@/components/CodeSnippet';
import VideoPlayer from '@/components/VideoPlayer';

export default function Home() {
    return (
      <section className={style.mainContainer}>
        <h3>Cryptid Coordinates</h3>
        <div id='sectionLine'></div>

        <section className={style.tableOfContents}>
          <ul>
            <li><a href='#one'>Overview</a></li>
            <li>•</li>
            <li><a href='#two'>MapKit</a></li>
            <li>•</li>
            <li><a href='#three'>Cluster Manager</a></li>
          </ul>
        </section>

        <section className={style.subSection}>
          <h2 id='one'>Overview</h2>
          <p>Cryptid Coordinates iOS mobile application that I build using Swift and SwiftUI, along with several other frameworks to be discussed. It reveals haunted locations and ancient secrets hidden in plain sight. It is avaliable on the app store for download below.</p>
          <br></br>
          <a className="button" href="https://github.com/noahgiboney/cryptid-coordinates" target="_blank" rel="noopener noreferrer">Repository</a>
          <a className="button" href="https://apps.apple.com/us/app/cryptid-coordinates/id6478195420" target="_blank" rel="noopener noreferrer">App Store</a>
        </section>

        <section className={style.subSection}>
          <h2 id='two'>MapKit</h2>
          <p>Using SwiftData for this app was a no brainer. It allows for persisting data and storing using habits in the app memory.</p>
          <br></br>
          <p>This is how I defined my models for this app.</p>
          <CodeSnippet code={models} language="swift"/>
          <br></br>
          <p>To use these models I setup the habit model on the container and was able to query an array of user habits, as well as add to this array through the environment context. Now with this array I can just pass around a single habit to each view that needs it under the hood swift gives me persisting data between views.</p>
          <CodeSnippet code={querying} language="swift"/>
        </section>
      </section>
    );
  }

const models = 
`@Model
class Habit {
    
    var name: String
    var type: String
    var dateAdded = Date()
    var log = [Entry]()
    
    init(name: String, type: String, dateAdded: Date = Date(), log: [Entry] = [Entry]()) {
        self.name = name
        self.type = type
        self.dateAdded = dateAdded
        self.log = log
    }
}

struct Entry : Codable, Hashable{
  var note: String
  var date: Date
}`;

const querying = 
`@Environment(\.modelContext) var context
    
@Query var habits: [Habit]`;

const dateFunctions = 
`func getWeekActivity() {
        
  weekActivity.removeAll()
  
  for day in lastSeven {
      
      var found = false
      let startOfDay = calendar.startOfDay(for: day)
      
      for entry in habit.log {
          
          let entryStartOfDay = calendar.startOfDay(for: entry.date)
          
          if startOfDay == entryStartOfDay {
              weekActivity.append(true)
              found = true
              break
          }
      }
      if !found {
          weekActivity.append(false)
      }
  }
}

func getWeekModel() {
  
  weekModel.removeAll()
  
  for day in lastSeven {
      let weekdayComponent = calendar.component(.weekday, from: day)
      weekModel.append(weekdayComponent)
  }
}

static func calcLastSeven() -> [Date] {
  let calendar = Calendar.current
  var week = [Date]()
  let now = calendar.startOfDay(for: Date())

  for index in (0...6) {
      if let previous = calendar.date(byAdding: .day, value: -index, to: now) {
          week.append(previous)
      }
  }
  return week
}}`;

const dateView = 
`var body: some View {
  VStack(alignment: .center){
      HStack(spacing: 20){
          
          ForEach(weekModel, id:\.self) { index in
              let current = calendar.component(.weekday, from: .now)
              Text(layout[index] ?? "?")
                  .foregroundStyle(current == index ? Color.purple : Color.black)
          }
      }
      
      HStack(spacing: 30){
  
          ForEach(Array(weekActivity.enumerated()), id: \.offset) { index, value in
              Rectangle()
                  .stroke(Color.black)
                  .fill(value ? Color.green : Color.red.opacity(0))
                  .frame(width: 17, height: 17)
          }
      }
      .padding(.leading, 20)
  }.onAppear(perform: {
      getWeekModel()
      getWeekActivity()
  })
}`;