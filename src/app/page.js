import Blog from '@/app/Components/Blog'
import Bannersection from '@/app/Components/Home/Bannersection'
import DiscountSection from '@/app/Components/Home/DiscountSection'
import Image from 'next/image'



export default function Home() {
  return (
    <div>
      <Bannersection />
      <h1 className='text-4xl text-center mb-5'>Blog</h1>
      <Blog />
      <DiscountSection />
    </div>
  )
}
