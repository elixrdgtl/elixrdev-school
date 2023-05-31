'use client'

import ExButton, { ButtonType } from '@/components/basic-ui/button';
import ExDialog from '@/components/basic-ui/dialog'
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [showDialog, setShowDialog] = useState(false);
  return (
    <div className='h-screen -mt-24 flex flex-col justify-center items-center'>
      <div className='w-2/3 flex flex-col'>
        <h1 className='text-9xl font-extrabold'>Welcome to Computer 4!</h1>
        <Link href="https://bit.ly/elixrdev">
          <ExButton buttontype={ButtonType.OK} extraclassname='font-extrabold text-4xl h-fit'>
            Click Here
          </ExButton>
        </Link>
      </div>

      {/* <ExButton buttonType={ButtonType.OK} onClick={() => { setShowDialog((val)=>!val)}}>test</ExButton>
      <ExButton buttonType={ButtonType.DEFAULT} onClick={() => { setShowDialog((val)=>!val)}}>test</ExButton>
      <ExButton buttonType={ButtonType.WARNING} onClick={() => { setShowDialog((val)=>!val)}}>test</ExButton>
      
      <ExDialog title="Dialog" open={showDialog} set={setShowDialog}>
        <div>
          sdhgfikjsdhfkjsdhfkjsdhfkjsdhfjksdhfkjsdhfksjhyfiweusjfhnkxzdjfhsdjkfndksjfhksjdhfjksd
        </div>
      </ExDialog> */}
    </div>
  )
}
