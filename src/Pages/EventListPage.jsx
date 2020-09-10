import React, {useContext} from 'react'
import { UserContext } from '../context/UserContext'


export default function EventListPage() {
    const {token} = useContext(UserContext)
    return (
        <div>
            <h1>Evnt List Page</h1>
            <p>{ token }</p>
        </div>
    )
}
