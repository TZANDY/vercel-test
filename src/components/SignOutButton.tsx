'use client'

import { useClerk } from '@clerk/nextjs'
import { Button } from './ui/button'
import { LogOut } from 'lucide-react'

export const SignOutButton = () => {
  const { signOut } = useClerk()

  return (
    // Clicking this button signs out a user
    // and redirects them to the home page "/".
    <Button onClick={() => signOut({ redirectUrl: '/' })}><LogOut /><span className='text-sm'>Log out</span></Button>
  )
}