import React, { ReactNode } from 'react'

import { Layout as AntdLayout } from 'antd'

type Props = {
  children: ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <AntdLayout style={{ minHeight: '100vh' }}>
        <div style={{  padding: '2.5rem'}}>
          <div className="container">{children}</div>
        </div>
      </AntdLayout>
      <style jsx>{`
        .container {
          margin: 2.5rem 10rem;
        }  
      `}</style>
    </>
  )
}

export default Layout