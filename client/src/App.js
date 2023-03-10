import React, { useEffect, useState } from 'react'
const App = () => {
  const [data, setData] = useState("Data will show here ...")
  const getData = async () => {
    try {
      const res = await fetch("https://server-client-vercel-deploy.vercel.app/api/test/")
      const data = await res.json()
      setData(data.message)

    } catch (error) {
      console.log(error)
    }

  }
  useEffect(() => {
    setTimeout(() => {
      setData("Data will show here ...")
    }, 5000)
  }, [data])

  return (
    <>
      <div>
        <button onClick={() => getData()} style={{ cursor: "pointer" }}>Get data from server</button>
      </div>
      <div>
        {data}
      </div>
    </>
  )
}

export default App