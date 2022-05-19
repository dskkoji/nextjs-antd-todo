import React from 'react'

import { Space } from 'antd'

import { db } from '@/lib/firebase'
import { collection, getDocs, addDoc } from 'firebase/firestore'

import Form from '@/components/molecules/Form'
import Table from './Table'

const Main: React.FC = () => {
  const addTodo = async (todo: string) => {
     const docRef = await addDoc(collection(db, 'todos'), {
      todo: todo,
      isComplete: false,
      date: new Date()
    })
    return docRef
  }

  return (
    <>
      <Space direction="vertical" size="large" style={{ width: "100%" }}>
        <div className="form-wrap">
          <Form onSubmit={addTodo} />
        </div>
        <Table />
      </Space>
      <style jsx>{`
        form-wrap {
          display: flex;
          flex-direction: column;
          margin-bottom: 5%;
          padding: 3rem;
          background-color: white;
        }
        .btn-wrap {
          margin-top: 1rem;
          display: flex;
          justify-content: flex-end;
        }
      `}</style>
    </>
  )
}

export default Main