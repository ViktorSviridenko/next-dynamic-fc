import dynamic from 'next/dynamic'

import Outer from '@/components/Outer'
import Inner from '@/components/Inner'

const InnerDynamic = dynamic(() => import('@/components/Inner'))

export default function Home() {
  return (
    <>
      <Outer innerComponent={Inner} />
      <Outer innerComponent={InnerDynamic} />
    </>
  )
}
