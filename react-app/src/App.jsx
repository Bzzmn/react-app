import React from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
    { 
        name: 'Andres Aore',
        userHash: 'sindresorhus',
        followStatus: false,
    },  
    { 
        name: 'Elon Musk',
        userHash: 'elonmusk',
        followStatus: false,
    },  
    { 
        name: 'Vanderharth',
        userHash: 'vxnder',
        followStatus: false,
    },  
    { 
        name: 'Alvaro Acevedo',
        userHash: 'Bzmn__',
        followStatus: false,
    },  
]



export function App () {

    return(
        <section className='App'>
            {
                users.map(user => {
                    return (
                        <TwitterFollowCard 
                            key={user.userHash}
                            userHash={user.userHash}
                            name={user.name}
                            initialIsFollowing={user.followStatus}
                        />
                    )
                })
            }
        </section>    
    )
}