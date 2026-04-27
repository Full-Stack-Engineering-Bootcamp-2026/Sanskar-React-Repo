import StarOnGithub from '@/components/ui/StarOnGithub';
import React from 'react'
import TableComponent from './TableComponent';

const Tables = () => {
  return (
    <div className="p-4 flex flex-col gap-6">
      <h1 className="font-inter text-[24px] font-bold ">Tables with avatars</h1>
      <StarOnGithub/>
      <TableComponent/>
    </div>
  );
}

export default Tables


  
