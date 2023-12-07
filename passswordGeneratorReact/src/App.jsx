import { useCallback, useEffect, useRef, useState } from "react"


function App() {
  
const [length, setLength] = useState(8)
const [numAllowed, setNumAllowed] = useState(false)
const [charAllowed, setCharAllowed] = useState(false)
const [password, setPassword] = useState("")

// useRef hook
const passwordRef = useRef(null)

const passwordGenerator = useCallback(() =>{
  let pass = ""
  let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if(numAllowed)
    str+="1234567890"
  if(charAllowed)
    str+="!@#$%^&*(){}[]<>?"

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random()*str.length+1)
      pass +=str.charAt(char)
    }
    setPassword(pass)

},[length,numAllowed,charAllowed,setPassword])

const copyToClipBoard = useCallback( () => {
  passwordRef.current?.select()
  //set range selection
 // passwordRef.current?.setSelectionRange(0,3)
  window.navigator.clipboard.writeText(password)
}, [password])

useEffect(() =>{
  passwordGenerator()
},[length,numAllowed,charAllowed,passwordGenerator])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 ">
        <h1 className="text-center text-white my-3">Password Generator</h1>
          <div className="flex shadow rounded-lg overflow-hidden mb-4">
            <input 
              type="text"  
              value={password} 
              className="outline-none w-full py-1 px-3"
              placeholder="Password"
              readOnly
              ref={passwordRef}
            />
            <button 
              className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
              onClick={copyToClipBoard}
              >Copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input 
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer" 
              onChange={(e) => {setLength(e.target.value)}}
            />
            <label className="text-orange-700">Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input 
            type="checkbox" 
            id="numberInput" 
            defaultChecked={numAllowed}
            onChange={() => {setNumAllowed((prev => !prev))}}
            />
            <label className="text-orange-700">number</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input 
            type="checkbox" 
            id="charInput" 
            defaultChecked={charAllowed}
            onChange={() => {setCharAllowed((prev => !prev))}}
            />
            <label className="text-orange-700">Special Char</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
