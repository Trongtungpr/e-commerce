import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import useGetData from '../custom-hooks/useGetData'

import { deleteDoc, doc } from 'firebase/firestore'
import { db } from '../firebase.config'
import { toast } from 'react-toastify'

const Users = () => {
    const {data: usersData, loading} = useGetData('users')

    const deleteUser = async (id) => {
        await deleteDoc(doc(db, 'users', id))
        toast.success ('user deleted!')
    }
  return <section>
    <Container>
        <Row>
            <Col lg='12'><h4 className='fw-bold'>User</h4></Col>
            <Col lg='12' className='pt-5'>
                <table className='table'>
                    <thead>
                    <tr>
                        <th>Image</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            loading ? <h4 className='pt-5 fw-bold'>Loading......</h4> : usersData?.map(users => (
                                <tr key={users.uid}>
                                    <td><img src={users.photoURL} alt="" /></td>
                                    <td>{users.displayName}</td>
                                    <td>{users.email}</td>
                                    <td><button className='btn btn-danger' onClick={() => {deleteUser(users.uid)}} >Delete</button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </Col>
        </Row>
    </Container>
  </section>
}

export default Users