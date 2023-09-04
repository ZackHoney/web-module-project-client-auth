import React from "react"

const AddFriend = () => {
    return (
    <div>
    <h1>Add Friend</h1>
    <form>
      <div>
        <label htmlFor="friendname">Friend Name:</label>
        <input id="friendname" />
      </div>
      <div>
        <label htmlFor="friendage">Friend Age:</label>
        <input id="friendage" />
      </div>
      <div>
        <label htmlFor="friendemail">Friend Email:</label>
        <input id="friendemail" />
      </div>
      <button>Submit</button>
    </form>
    </div>
    )
  }

  export default AddFriend;