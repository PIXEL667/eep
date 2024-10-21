import React from 'react'
import { ThreeDCard } from '@/components/3D-Card'
const ProjectsGrid = () => {
  return (
    <>
      <div className='flex justify-around w-full overflow-x-auto space-x-4'>
        <ThreeDCard title="hello" desc="byee" img="/" Readlink="/" link="/" ></ThreeDCard>
        <ThreeDCard title="hello" desc="byee" img="/" Readlink="/" link="/" ></ThreeDCard>
      </div>
    </>
  )
}

export default ProjectsGrid