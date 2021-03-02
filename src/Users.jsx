import React from 'react'

const Users = ({user}) => {
    return (
        <div>
            
    {
      user.map(
        (currElem)=>{
            return(
              <div key={currElem.id}>

              <h1>
                {currElem.title}
              </h1>

              <img src={currElem.ThumbnailUrl} alt="user-profile"/>
              </div>
              
            )
        }
      )
    }
        </div>
    )
}

export default Users
