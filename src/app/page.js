import Blog from '@/Components/Blog'
import Bannersection from '@/Components/Home/Bannersection'
import DiscountSection from '@/Components/Home/DiscountSection'
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
