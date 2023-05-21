'use client'

import ExButton, { ButtonType } from '@/components/basic-ui/button';
import ExDialog from '@/components/basic-ui/dialog'
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [showDialog, setShowDialog] = useState(false);
  return (
    <div className='h-screen -mt-24 flex flex-col justify-center items-center'>
      <div className='w-2/3 flex flex-col justify-center items-center'>
        <h1 className='text-8xl font-extrabold'>Welcome to Computer 4!</h1>
        <h4 className='text-xl font-bold mt-12'>The site is still under construction, we will be right back!</h4>
        <h4 className='text-xl font-bold'>In the meantime, click here for our lesson:</h4>
        <Link href="https://bit.ly/atriscom4">
          <ExButton buttonType={ButtonType.DEFAULT} extraClassName='animate-bg-color text-white font-extrabold'>
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
