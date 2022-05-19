import React, { useState } from 'react'
import { Modal, Button } from 'antd'
import { EditOutlined } from '@ant-design/icons'

import { db } from '@/lib/firebase'
import Form from '@/components/molecules/Form'
import { Todo as TodoItem } from '@/types/todo'
import { doc , updateDoc} from 'firebase/firestore'

type Props = {
  todoItem: TodoItem
}

const Edit: React.FC<Props> = ({ todoItem }) => {
  const [isOpen, setIsOpen] = useState(false)

  const updateTodo = async (todo: string) => {
    const todoRef=  doc(db, 'todos', todoItem.id)
    await updateDoc(todoRef, {
      todo:todo,
      isComplete: todoItem.isComplete,
      date: todoItem.date,
    })
    setIsOpen(false)
  }
  return (
    <>
      <Button 
        shape="circle"
        icon={<EditOutlined />}
        onClick={() => setIsOpen(true)}
      />
      <Modal
        title="Edit"
        visible={isOpen}
        onCancel={() => setIsOpen(false)}
        footer={null}
      >
        {isOpen && <Form onSubmit={updateTodo} todo={todoItem.todo} />}
      </Modal>
    </>
  ) 
}

export default Edit
