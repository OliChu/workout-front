import React from 'react'
import { WORKOUTS } from '../routes'

const HomePage = () => {
  return (
    <>
      <h1>Home Page</h1>
      <ul>
        <li>
          <a href={WORKOUTS}>Workout</a>
        </li>
      </ul>
    </>
  )
}

export default HomePage
