import { MdOutlineExpandMore, MdOutlineExpandLess } from "react-icons/md";
import { useState } from 'react'

const Meeting = ({title,date,location,info}) => {

    const [open, setOpen] = useState(false)

    const expand = (e) => {
        setOpen(!open)
    }

    return (
        <div className="Meeting" onClick={expand}>
            <div className="meetingflex">
                <div>
                    <h2>{title}</h2>
                    <h3>{date} @ {location}</h3>
                </div>
                <div className="expandicon">
                    {
                        open ? <MdOutlineExpandLess size={42}/> : <MdOutlineExpandMore size={42}/>
                    }
                </div>
            </div>

            {
                open ? (<h3 className="meetingcontent">
                {info}
            </h3>) : ''
            }
        </div>
    )
}

export default Meeting