import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'


const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto max-w-xl px-4 h-14 flex items-center justify-between">
        <Link to="/" className="font-bold text-lg text-foreground">
          Taskflow
        </Link>

        {user ? (
          <Link to="/profile">
            <Button variant="ghost" size="sm" className="gap-2">
              <div className="h-7 w-7 rounded-full bg-primary/10 flex items-center justify-center">
                <User className="h-4 w-4 text-primary" />
              </div>
              <span className="hidden sm:inline text-foreground">{user.name}</span>
            </Button>
          </Link>
        ) : (
          <Link to="/login">
            <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-foreground">
              <LogIn className="h-4 w-4" />
              Sign in
            </Button>
          </Link>
        )}
      </div>
    </header>
  )
}

export default Header