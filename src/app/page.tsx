'use client'

import Dialog from '@/components/basic-ui/dialog'
import Header from '@/components/header/header-ui'
import Image from 'next/image'
import { useState } from 'react';

export default function Home() {
  const [showDialog, setShowDialog] = useState(false);
  return (
    <div>
      <button onClick={() => { setShowDialog((val)=>!val)}}>test</button>
      <Dialog title="Dialog" open={showDialog} set={setShowDialog}>
        <div>
          sdhgfikjsdhfkjsdhfkjsdhfkjsdhfjksdhfkjsdhfksjhyfiweusjfhnkxzdjfhsdjkfndksjfhksjdhfjksd
        </div>
      </Dialog>
    </div>
  )
}
