import React, { useState } from 'react'

function App() {
  // 定義一組狀態
  // 解構賦值(ES6)
  // useState(0) 呼叫完會得到以下
  // [獲得狀態(變數), 設定狀態(函式)]
  const [total, setTotal] = useState(0)
  return (
    <>
      <h1
        onClick={() => {
          // 只能用 setTotal 來改變 total 的值
          setTotal(total + 1)
        }}
      >
        {total}
      </h1>
    </>
  )
}

export default App
