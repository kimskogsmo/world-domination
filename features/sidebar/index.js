import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import styles from './../../styles/Home.module.css';

const Sidebar = (user) => {
    return (
        <div className={styles.sidebar}>
            <div className={styles.items}>
                <h4>Items</h4>
                <div>
                    <img src="items/clone.svg" />
                    <img src="items/disintegrate.svg" />
                    <img src="items/key.svg" />                
                    <img src="items/rolling-dices.svg" />
                </div>
            </div>

            <div className={styles.upgrades}>
                <h4>Upgrades</h4>
                <div>
                    <img src="items/revolver.svg" />
                    <img src="items/snake-spiral.svg" />
                </div>
            </div>

            <div className={styles.achievements}>
                <h4>Achievements</h4>
                <div>
                    <img src="items/rocket.svg" />
                </div>
            </div>
            
            {/* <Card style={{minWidth: '100%', minHeight: '100%'}}>
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

            <Card>
                <Card.Body>
                    <Card.Title>Stats</Card.Title>
                    <hr/>
                    <Card.Text><strong>Lifetime earnings: </strong>€348,587,581,187.589</Card.Text>
                    <Card.Text><strong>Max companies: </strong>48</Card.Text>
                    <Button onClick={() => logout()} style={{ width: '100%' }}>See more stats</Button>
                </Card.Body>
            </Card>

            <Card>
                <Card.Body>
                    <Card.Title>Activity</Card.Title>
                    <hr/>
                    <Card.Text><strong>Message received: </strong>Authorization required</Card.Text>
                    <Card.Text><strong>Offer received: </strong>Bid on NRXF</Card.Text>
                    <Button onClick={() => logout()} style={{ width: '100%' }}>View all</Button>
                </Card.Body>
            </Card> */}
        </div>
    )
}

export default Sidebar