import {useState,useEffect} from 'react'
import { MdDelete } from "react-icons/md";
import SERVER_PATH from '../lib/server';

const Console = () => {

    const [title,setTitle] = useState('')
    const [info,setInfo] = useState('')
    const [date,setDate] = useState('')
    const [location,setLocation] = useState('')
    const [password,setPassword] = useState('')
    const [meetings,setMeetings] = useState([])

    const submit = () => {
        fetch(SERVER_PATH+'/api/meeting/add',{
            headers:{
                'Content-Type':'application/json'
            },
            method:'POST',
            body:JSON.stringify({
                title:title,
                info:info,
                date:date,
                location:location,
                password:password
            })
        })
    }

    const fetchMeetings = async () => {
        const response = await fetch(SERVER_PATH+"/api/meeting/list")
        const data = await response.json()
        setMeetings(data)
    }

    const deleteMeeting = async (e) => {

        const data = meetings[e.currentTarget.id]


        const response = await fetch(SERVER_PATH+"/api/meeting/delete", {
            headers:{
                'Content-Type':'application/json'
            },
            method:"POST",
            body: JSON.stringify({
                title:data.title,
                info:data.info,
                date:data.date,
                location:data.location,
                password:password
            })
        })
    }

    useEffect(() => {
        fetchMeetings()
    },[])

    return (
        <div className="Console">
            Title: <input type="text" onChange={(e)=> {setTitle(e.target.value)}}/>
            <br />
            Date: <input type="text" onChange={(e)=> {setDate(e.target.value)}}/>
            <br/>
            Location: <input type="text" onChange={(e)=> {setLocation(e.target.value)}}/>
            <br/>
            Info: <textarea onChange={(e)=> {setInfo(e.target.value)}}/>
            <br/>
            Password: <input type="text" onChange={(e)=> {setPassword(e.target.value)}}/>
            <br/>
            <button onClick={submit}>post</button>
            <br />
            <br />
            <hr />
            {
                meetings.map((meeting,i) => (
                    <>
                        <br />
                        <span>{meeting.title}</span> <button id={i} onClick={(e) => deleteMeeting(e)}>< MdDelete size={28}/></button>
                        
                    </>
                ))
            }
        </div>
    )
}

export default Console
