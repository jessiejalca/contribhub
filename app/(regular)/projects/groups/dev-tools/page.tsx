import React from 'react'
import Projects from '@/components/Projects/Projects'

import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Dev Tools Open Source Projects to contribute to | Contribhub',
  description: 'Find the best dev tools open source to contribute to',
}

function DevToolsProjectsPage() {
  return (
    <div className='flex flex-col items-center w-full pb-20'>
      <div className='w-full max-w-7xl flex flex-col items-center px-4 mt-24'>
        <div className='flex flex-col items-center space-y-1 mb-10'>
          <h1 className='text-4xl font-bold'>Open Source Dev Tools Projects</h1>
          <h2 className='text-lg text-gray-600'>Find the best dev tools open source to contribute to</h2>
        </div>
      </div>
      <div className='w-full px-4'>
        <Projects initialGroups={['dev_tools']} showFindBar={true} />
      </div>
    </div>
  )
}

export default DevToolsProjectsPage