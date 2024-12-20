'use client'
import React, { useState } from 'react'
import { FaRegHandRock } from "react-icons/fa";
import { FaRegHandPaper } from "react-icons/fa";
import { FaRegHandScissors } from "react-icons/fa";

import Confetti from 'react-confetti'

const RockPaper = () => {
  const [userChoice, setUserChoice] = useState(null)
  const [computerChoice, setComputerChoice] = useState(null)

  const handleChange = (choice) => {
    setUserChoice(choice)
    const randomNum = Math.floor(Math.random() * choices.length)
    setComputerChoice(choices[randomNum].name)
  }

  const choices = [
    { name: 'rock', icon: <FaRegHandRock size={100} onClick={() => handleChange('rock')} /> },
    { name: 'paper', icon: <FaRegHandPaper size={100} onClick={() => handleChange('paper')} /> },
    { name: 'scissor', icon: <FaRegHandScissors size={100} onClick={() => handleChange('scissor')} /> },
  ]

  const confetti = <Confetti
    width={1300}
    height={300}
  />

  const getBackgroundColor = (choice) => {
    if (choice === userChoice || choice === computerChoice) {
      return 'bg-yellow-700'; // Dark gold
    }
    return 'bg-white';
  }

  return (
    <div>
      <div className='flex gap-6  m-4 p-4 items-center'>
        <div className='bg-pink-100 shadow-lg w-[50%] h-72 flex flex-col items-center justify-center'>
          <p>Computer</p>
          {computerChoice && (
            <div
              className={`rounded-full p-6 ${getBackgroundColor(computerChoice)}`}
            >
              {choices.find((choice) => choice.name === computerChoice).icon}
            </div>
          )}
          <p>{computerChoice}</p>
        </div>
        <div className='flex gap-4 justify-center items-center bg-green-100 shadow-lg 
             rounded-xl w-[50%] h-72'>
          {choices.map((item) => {
            return (
              <div
                key={item.name}
                className={`border-black border-8 rounded-3xl p-3 ${getBackgroundColor(item.name)}`}
              >
                {item.icon}
              </div>
            )
          })}
        </div>
      </div>
      <div className='text-center text-xl font-bold'>
        {computerChoice === userChoice && "DRAW"}
        {computerChoice === 'paper' && userChoice === 'rock' && "You lost"}
        {computerChoice === 'scissor' && userChoice === 'paper' && "You lost"}
        {computerChoice === 'rock' && userChoice === 'scissor' && "You lost"}
        {computerChoice === 'rock' && userChoice === 'paper' && confetti}
        {computerChoice === 'paper' && userChoice === 'scissor' && confetti}
        {computerChoice === 'scissor' && userChoice === 'rock' && confetti}
      </div>
    </div>
  )
}

export default RockPaper
