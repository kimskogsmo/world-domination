import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import styles from '../styles/Home.module.css'

import { useUser } from './../firebase/useUser'

const Profile = ({ }) => {
    const { user, logout } = useUser()

    if (user) {
        return (
            <div className={styles.container}>
                <Card>
                    <Card.Body>
                        <Card.Title>Your profile</Card.Title>
                        <hr />
                        <Card.Text>{user.name}</Card.Text>
                        <hr />
                        <Card.Text>{user.email}</Card.Text>
                        <hr />
                        {user.profilePic ? <image src={user.profilePic} height={100} width={100}></image> : <p>No profile pic</p>}
                        <hr />
                        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                        <Button onClick={() => logout()} style={{ width: '100%' }}>Log Out</Button>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        )
    }
    else return (
        <div>Log in first</div>
    )
}

export default Profile