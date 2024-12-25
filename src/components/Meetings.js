import Meeting from "./Meeting"
import { useState,useEffect } from "react"
import SERVER_PATH from "../lib/server"

const Meetings = () => {
    
    const [ meetings, setMeetings ] = useState([]) 

    const fetchMeetings = async () => {
        const response = await fetch(SERVER_PATH+'/api/meeting/list')
        const data = await response.json()
        setMeetings(data)
    }

    useEffect(() => {
        fetchMeetings()
    },[])

    return (
        <div className="Meetings">
            {meetings.map((meeting) => (
                <Meeting title={meeting.title} date={meeting.date} location={meeting.location} info={meeting.info}/>
            ))}
        </div>
    )
}

export default Meetings