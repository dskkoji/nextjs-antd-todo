import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const Title: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div className="ttl-wrap">
        <h1 className="bold">{children}</h1>
      </div>
      <style jsx>{`
        .ttl-wrap {
          margin-bottom: 5%;
        }  
        .bold {
          font-size: 2rem;
          font-weight: bold;
        }
      `}</style>
    </>
  )
}

export default Title