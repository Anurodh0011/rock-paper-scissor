'use client'
import React, { useState } from 'react'
import { FaRegHandRock } from "react-icons/fa";
import { FaRegHandPaper } from "react-icons/fa";
import { FaRegHandScissors } from "react-icons/fa";

import Confetti from 'react-confetti'

const RockPaper = () => {
  const [userChoice, setUserChoice] = useState(null)
  const handleChange = (choice) => {
    setUserChoice(choice)
  }
  const choices = [
    { name: 'rock', icon: <FaRegHandRock size={100} onClick={() => handleChange('rock')} /> },
    { name: 'paper', icon: <FaRegHandPaper size={100} onClick={() => handleChange('paper')} /> },
    { name: 'scissor', icon: <FaRegHandScissors size={100} onClick={() => handleChange('scissor')} /> },
  ]
  const randomNum = Math.floor(Math.random() * choices.length)
  const confetti = <Confetti
    width={1300}
    height={300}
  />
  return (
    <div>
      <div className='flex gap-6  m-4 p-4 items-center'>
        <div className='bg-pink-100 shadow-lg  w-[50%] h-72'>Computer
          {userChoice && choices[randomNum].icon}
          {userChoice && choices[randomNum].name}

        </div>
        <div className='flex gap-4 justify-center items-center bg-green-100 shadow-lg 
             rounded-xl w-[50%] h-72'>
          {userChoice}
          {choices.map((item) => {
            return <div className='bg-white  border-black border-8 rounded-3xl p-3'>
              {item.icon}</div>
          })}
        </div>
      </div>
      {choices[randomNum].name === userChoice && "DRAW"}
      {choices[randomNum].name === 'paper' && userChoice === 'rock' && "You lost"}
      {choices[randomNum].name === 'scissor' && userChoice === 'paper' && "You lost"}
      {choices[randomNum].name === 'rock' && userChoice === 'scissor' && "You lost"}
      {choices[randomNum].name === 'rock' && userChoice === 'paper' && confetti}
      {choices[randomNum].name === 'paper' && userChoice === 'scissor' && confetti}
      {choices[randomNum].name === 'scissor' && userChoice === 'rock' && confetti}
    </div>
  )
}

export default RockPaper