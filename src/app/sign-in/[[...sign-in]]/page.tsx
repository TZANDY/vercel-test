import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return <div className='flex justify-center align-middle items-center h-screen'>
    <SignIn />
  </div>
}