import React from 'react'
import AddPerson from '../containers/AddPerson'
import PersonListContainer from '../containers/PersonListContainer'
import ActiveListContainer from '../containers/ActiveListContainer'

const App = () => (
  <div>
  	<ActiveListContainer />
    <PersonListContainer />
  </div>
)

export default App