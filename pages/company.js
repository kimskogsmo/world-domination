import styles from '../styles/Home.module.css'

const Company = ({ children }) => {
    return (
        <section>
            <span>Company</span>
            {children}
        </section>
    )
}

export default Company