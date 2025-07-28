import { useState } from 'react'
import Router from './router'
import { PostProvider } from './contexts/post'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <PostProvider>
      <Router />
    </PostProvider>
  )
}

export default App
