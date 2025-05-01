import React from 'react'

const Footer1 = () => {
  return (
    <>


    <footer className="bg-gray-900 text-gray-400 text-center py-6">
      <div className="container mx-auto flex flex-col items-center space-y-2">
        <h2 className="text-lg font-semibold text-white">
          <span className="text-blue-400">prime</span> video
        </h2>
        <div className="flex space-x-4 text-sm">
          <a href="#" className="hover:underline">Terms and Privacy Notice</a>
          <a href="#" className="hover:underline">Send us feedback</a>
          <a href="#" className="hover:underline">Help</a>
        </div>
        <p className="text-xs">© 1996-2025, Amazon.com, Inc. or its affiliates</p>
      </div>
    </footer>
    </>
  )
}

export default Footer1
