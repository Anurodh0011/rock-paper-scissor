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
    { name: 'rock', icon: <FaRegHandRock size={100} /> },
    { name: 'paper', icon: <FaRegHandPaper size={100} /> },
    { name: 'scissor', icon: <FaRegHandScissors size={100} /> },
  ]

  const confetti = <Confetti width={1300} height={300} />

  const getUserChoiceClass = (choice) => {
    return choice === userChoice ? 'bg-yellow-700' : 'bg-white'
  }

  const getComputerChoiceClass = (choice) => {
    return choice === computerChoice ? 'bg-yellow-500' : 'bg-pink-100'
  }

  // Determine result message
  const getResultMessage = () => {
    if (!userChoice || !computerChoice) return ""
    if (computerChoice === userChoice) return { message: "🤝 It's a Draw!", color: "text-gray-600" }
    if (
      (computerChoice === 'paper' && userChoice === 'rock') ||
      (computerChoice === 'scissor' && userChoice === 'paper') ||
      (computerChoice === 'rock' && userChoice === 'scissor')
    ) {
      return { message: "😢 You Lost!", color: "text-red-600" }
    }
    return { message: "🏆 You Won!", color: "text-green-600" }
  }

  const result = getResultMessage()

  return (
    <div className="p-6">
      {/* Main Game Section */}
      <div className='flex gap-6 m-4 p-4 items-center'>
        {/* Computer Section */}
        <div className='shadow-lg w-[50%] h-72 flex flex-col items-center justify-center'>
          <p className="font-semibold text-lg">Computer</p>
          {computerChoice && (
            <div
              className={`rounded-full p-6 ${getComputerChoiceClass(computerChoice)}`}
            >
              {choices.find((choice) => choice.name === computerChoice).icon}
            </div>
          )}
          <p className="font-medium">{computerChoice}</p>
        </div>

        {/* User Choices Section */}
        <div className='flex gap-4 justify-center items-center bg-green-100 shadow-lg rounded-xl w-[50%] h-72'>
          {choices.map((item) => (
            <div
              key={item.name}
              className={`border-black border-8 rounded-3xl p-3 cursor-pointer ${getUserChoiceClass(item.name)}`}
              onClick={() => handleChange(item.name)}
            >
              {item.icon}
            </div>
          ))}
        </div>
      </div>

      {/* Result Section */}
      <div className="mt-6 flex justify-center">
        {result.message && (
          <div
            className={`p-6 shadow-xl rounded-lg bg-white text-center w-[80%] md:w-[60%] lg:w-[40%] transition-transform duration-300 ease-in-out ${result.color}`}
          >
            <p className="text-2xl font-bold">{result.message}</p>
            {result.message.includes("You Won!") && confetti}
          </div>
        )}
      </div>
    </div>
  )
}

export default RockPaper
