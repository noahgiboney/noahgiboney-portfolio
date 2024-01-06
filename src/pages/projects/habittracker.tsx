import style from '@/styles/projects.module.css'
import CodeSnippet from '@/components/CodeSnippet';
import VideoPlayer from '@/components/VideoPlayer';

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
          <p>This was my first iOS app built I built by myself using Swift and SwiftUI, that allows users to track their habits. I also was able to leverage the SwiftData framework to store and manage my data.</p>
          <br></br>
          <br></br>
          <a className="button" href="https://github.com/noahgiboney/habit-tracker" target="_blank" rel="noopener noreferrer">Repository</a>
        </section>

        <section className={style.subSection}>
          <h2 id='two'>Demo</h2>
          <p>Users can add personal habits, productive and destructive, and track progression by logging entrys. They are also to see their previous 7 day acticity.</p>
          <div className={style.imageContainer}>
            <VideoPlayer src="/videos/HabitTrackerDemo.mp4"/>
          </div>
        </section>

        <section className={style.subSection}>
          <h2 id='two'>SwiftData</h2>
          <p>Using SwiftData for this app was a no brainer as it allowed for persisting data and storing using habits in the app memory.</p>
          <br></br>
          <p>This is how I defined my models for this app.</p>
          <CodeSnippet code={models} language="swift"/>
          <br></br>
          <p>To use these models I setup the habit model on the container and was able to query an array of user habits, as well as add to this array through the environment context. Now with this array I can just pass around a single habit to each view that needs it under the hood swift gives me persisting data between views.</p>
          <CodeSnippet code={querying} language="swift"/>
        </section>

        <section className={style.subSection}>
          <h2 id='two'>Dates</h2>
          <p>One of the most challening parts of building this app was working with dates and building the view for showing last 7 day activity. The reason for this is due to the fact in swift we have to use the calendar object and break the date into components.</p>
          <br></br>
          <p>I did this through three functions. One to get the last seven days from the current day, one to build the model of week days text views to render, and one to build a bool array of if the user logged an entry during this day</p>
          <CodeSnippet code={dateFunctions} language="swift"/>
          <br></br>
          <p>One I had these functions I was able to loop through the two arrays I built which are tiggered with an onappear modifier and render the correct data.</p>
          <CodeSnippet code={dateView} language="swift"/>
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