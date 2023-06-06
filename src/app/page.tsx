'use client'

import ExButton, { ButtonType } from '@/components/basic-ui/button';
import ExDialog from '@/components/basic-ui/dialog'
import Card from '@/components/card/card';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [showDialog, setShowDialog] = useState(false);
  return (
    <div className='h-screen flex flex-col justify-center items-center'>
      <div className='w-2/3 flex flex-col font-extrabold'>
        <h1 className='text-9xl break-all'>Computer 4</h1>
        <div className='mt-5'>
          <h2 className='text-4xl'>Lessons</h2>
          <div id="cards" className='pt-4 grid grid-cols-3 gap-4'>
            {
              [
                { title: "Lesson 1: Hardware", link: "https://www.canva.com/design/DAFBMgp_Y2I/saIAuTz6FuMn_EoWvye2xg/view", children: <>Parts of the computer that can be used by users: hardware.</> },
                { title: "Lesson 2: Software", link: "https://www.canva.com/design/DAFCt9KGmyU/2h8W1HDEvTxwHXUaFO3eQg/view", children: <>Applications and programs that is run by the computer: software.</> },
              ].map((val, key) => {
                return (
                  <Card title={val.title} key={key}>
                    {val.children}
                  </Card>
                )
              })
            }
          </div>
          {/* <h3 className='text-3xl'>Today's lesson:</h3>
          <Link href="https://bit.ly/elixrdev" className='w-fit'>
            <ExButton buttontype={ButtonType.OK} extraclassname='text-xl h-fit'>
              Click Here
            </ExButton>
          </Link> */}
        </div>
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
