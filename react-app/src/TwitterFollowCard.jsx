import { useState } from "react"

export function TwitterFollowCard ({userHash, name, initialIsFollowing}) {
    let [isFollowing, setIsFollowing] = useState(initialIsFollowing)
    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    let text = isFollowing ? 'Siguiendo' : 'Seguir'
    let buttonClassName = isFollowing
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button'
    return(
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img 
                    className="tw-followCard-avatar" 
                    src={`https://unavatar.io/${userHash}`} 
                    alt="avatar de randomUser" />
                <div className='tw-followCard-user'>
                    <strong>{name}</strong>
                    <span className='tw-followCard-userHash'>@{userHash}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className="tw-followCard-text">{text}</span>
                    <span className="tw-followCard-stopFollow">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}

