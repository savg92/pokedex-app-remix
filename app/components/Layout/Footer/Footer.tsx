import React from 'react'

export const Footer = () => {
  return (
    <>
        <footer className='bg-gray-800 text-gray-200 p-4 text-center'>
            <p>
            &copy; {
                new Date().getFullYear()
            } Pokedex
            </p>
        </footer>
    </>
  )
}
