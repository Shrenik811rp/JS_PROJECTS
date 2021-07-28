

import React, { useState } from 'react';
import { friend_list } from './data';
import List from './List';




function App() {

  const [friends, setFriends] = useState(friend_list)

  const remove_friend = (id) => {
    let others = friends.filter((friend) => friend.id !== id)

    setFriends(others)
  }
  return (
    <React.Fragment>

      <main>
        <section className="container">
          <h3>There are {friends.length} birthday's</h3>

          <List friends={friends}>
          </List>

          {friends.map((friend) => {
            console.log(friend)
            const { id, name } = friend

            {/*Must always contain "key" with unique value else React throws error */ }
            return (
              <div key={id} className='item'>
                <button onClick={() => {
                  remove_friend(id)
                }}>
                  Remove {name}</button>
              </div>
            )
          })}
          <button onClick={() => {
            setFriends([])
            console.log('button clicked')
          }}>Remove Birthday's</button>



        </section>
      </main>
    </React.Fragment>
  )

}

export default App;
