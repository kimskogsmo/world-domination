const UserCompanies = (companies) => {
    // const { stats } = user.stats;
    
    console.log(companies)
    
    return (
        <div style={{border: '1px solid #eee', padding: '1rem', width: '100%'}}>
            <h5>Your companies</h5>
            <p>Companies here!</p>

            {companies.companies.map(company => {
                <div>Hello</div>
            })}
        </div>
    )
}

export default UserCompanies