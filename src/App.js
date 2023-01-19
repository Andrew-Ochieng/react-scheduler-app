import {
  ScheduleComponent, Day, Week, WorkWeek, Agenda, Month, Inject, ViewsDirective, ViewDirective
} from '@syncfusion/ej2-react-schedule';
// import { useEffect, useState } from 'react';
import './App.css';
import {appointments} from "./data"


function App() {
  const data = appointments
  
  const licenseKey = "OTY2MTkxQDMyMzAyZTM0MmUzME51Yk9rTlA4bE5iMUdTN1g5aXRaWU9LRWRxTElsUmIvUVlWWlR4V0cvYUk9;Mgo+DSMBaFt/QHRqVVhjVFpGaV5FQmFJfFBmRGNTfFZ6d1RWESFaRnZdQV1iSHZRdEVkW39acnRU;Mgo+DSMBMAY9C3t2VVhkQlFadVdJX3xIeUx0RWFab19wflZOal9QVAciSV9jS31Td0RrW31ed3ZVQmNZUA==;Mgo+DSMBPh8sVXJ0S0J+XE9HflRAQmJOYVF2R2BJfl56d11MY11BNQtUQF1hSn5Sd01hW39ZcnRRQ2Fd;OTY2MTk1QDMyMzAyZTM0MmUzMEg2QTVvWHROSTRpOEtlUVBhWkNTSXZ6ZXZNWG1SSzNVODR6OUtPU0IwZGc9;NRAiBiAaIQQuGjN/V0Z+WE9EaFxKVmFWf1RpR2NbfE5xdF9FaFZSRWYuP1ZhSXxQdkRiUX1ccHNXRmRVUEU=;ORg4AjUWIQA/Gnt2VVhkQlFadVdJX3xIeUx0RWFab19wflZOal9QVAciSV9jS31Td0RrW31ed3ZVQ2BaUA==;OTY2MTk4QDMyMzAyZTM0MmUzMGdhaytOaS93ZXQrc3FyOE13a3RldjhmME1DY0VpQzRPNUZiSWlETGc4OEE9;OTY2MTk5QDMyMzAyZTM0MmUzMGR0YmlwdFRsbmR2cDZFV1Y4Qyt5OGowOGRIanZrZlVON1JJY0NheExhZ009;OTY2MjAwQDMyMzAyZTM0MmUzMGtyNzdmQ2Z2ZWt2Sm9CS3hoaTA1UWRIQWhtSEdUSHNNRDRNUkRZbXBkYUE9;OTY2MjAxQDMyMzAyZTM0MmUzMFEvSExGNGllcURSb2dBQk1EeG84RUIwUXJYWFl4NnBxamdMQ0hJdVArUlE9;OTY2MjAyQDMyMzAyZTM0MmUzME51Yk9rTlA4bE5iMUdTN1g5aXRaWU9LRWRxTElsUmIvUVlWWlR4V0cvYUk9"
    

  return (
    <div className="App">
      <ScheduleComponent 
          licenseKey={licenseKey}
          currentView='Month'
          selectedDate={new Date(2023, 0, 1)}
          height='550px' 
          eventSettings={{
              dataSource: data,
              fields: {
                  id: 'Id',
                  subject: { name: 'Subject' },
                  isAllDay: { name: 'IsAllDay' },
                  startTime: { name: 'StartTime' },
                  endTime: { name: 'EndTime' }
              }
          }}>
            <ViewsDirective>
            <ViewDirective option='Day' />
            <ViewDirective option='Week' />
            <ViewDirective option='WorkWeek' />
            <ViewDirective option='Month' />
            <ViewDirective option='Agenda' />
          </ViewsDirective>
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]}/>
      </ScheduleComponent>
    </div>
  );
}

export default App;
