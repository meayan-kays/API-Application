import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa'

const UserList = () => {
    const [listOfUsers, setListOfUsers] = useState([])
    const [error, setError] = useState(null)
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => setListOfUsers(res.data))
            .catch(err => setError(err))
            
    }, [])
    return (
        <div className="list_profils">
            {
                listOfUsers.map(el =>
                    <div className="profile">
                        <div className="profile_header">
                            <h2>{el.name}</h2>
                            <p>@{el.username}</p>
                        </div>
                        <div className="profile_content">
                            <h4><FaMapMarkerAlt className="icon"/>  {el.address.city} - {el.address.street} - {el.address.suite}</h4>
                            <div className="details">
                                <h4><FaEnvelope className="icon"/>  {el.email}</h4>
                                <h4><FaPhoneAlt className="icon"/>  {el.phone} </h4>
                            </div>
                         </div>  
                        <div className="profile_footer">
                            <button className="profile_about">More Informations</button>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default UserList
