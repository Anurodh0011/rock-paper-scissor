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
        { name: 'rock', icon: <FaRegHandRock size={60} /> },
        { name: 'paper', icon: <FaRegHandPaper size={60} /> },
        { name: 'scissor', icon: <FaRegHandScissors size={60} /> },
    ]

    const confetti = <Confetti width={1300} height={300} />

    const getUserChoiceClass = (choice) => {
        return choice === userChoice ? 'bg-yellow-700 text-white' : 'bg-white text-black border-2 border-black'
    }

    const getComputerChoiceClass = (choice) => {
        return choice === computerChoice ? 'bg-yellow-500 text-white' : 'bg-white text-black border-2 border-black'
    }

    const getResultMessage = () => {
        if (!userChoice || !computerChoice) return ""
        if (computerChoice === userChoice) return { message: "🤝 It's a Draw!", color: "text-gray-300" }
        if (
            (computerChoice === 'paper' && userChoice === 'rock') ||
            (computerChoice === 'scissor' && userChoice === 'paper') ||
            (computerChoice === 'rock' && userChoice === 'scissor')
        ) {
            return { message: "😢 You Lost!", color: "text-red-400" }
        }
        return { message: "🏆 You Won!", color: "text-green-400" }
    }

    const result = getResultMessage()

    return (
        <div className="p-6 min-h-screen bg-gray-800 text-white flex flex-col items-center">
            <h1 className="text-4xl font-bold mb-6 text-gray-200">Rock Paper Scissors Game</h1>

            {/* Main Game Section */}
            <div className='flex gap-10 w-full max-w-5xl'>
                {/* Computer Section */}
                <div className='shadow-lg bg-gray-700 w-[50%] h-80 flex flex-col items-center justify-center rounded-lg p-6 border-2 border-gray-600'>
                    <p className="font-semibold text-lg mb-4 text-gray-300">Computer</p>
                    <div
                        className={`w-24 h-24 flex items-center justify-center rounded-full shadow-md ${getComputerChoiceClass(computerChoice)}`}
                    >
                        {computerChoice && choices.find((choice) => choice.name === computerChoice).icon}
                    </div>
                    <p className="font-medium text-gray-200 mt-4 text-lg">
                        {computerChoice || "Waiting..."}
                    </p>
                </div>

                {/* User Section */}
                <div className='bg-gray-600 shadow-lg rounded-lg w-[50%] h-80 flex flex-col items-center justify-center p-6 border-2 border-gray-500'>
                    <p className="font-semibold text-lg mb-4 text-gray-300">Your Choices</p>
                    <div className="flex gap-6">
                        {choices.map((item) => (
                            <div
                                key={item.name}
                                className={`w-24 h-24 flex items-center justify-center rounded-full shadow-md cursor-pointer hover:scale-105 transition-transform ${getUserChoiceClass(item.name)}`}
                                onClick={() => handleChange(item.name)}
                            >
                                {item.icon}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Result Section */}
            <div className="mt-8 flex justify-center w-1/2">
                {result.message && (
                    <div
                        className={`p-6 shadow-xl rounded-lg bg-gray-700 text-center w-[80%] md:w-[60%] lg:w-[40%] transition-transform duration-300 ease-in-out border-2 border-gray-600 ${result.color}`}
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
