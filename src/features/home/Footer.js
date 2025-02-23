const Footer = () =>{
    return(
        <div className='footer'>
            SITE MAP
            <form action="/">
                <h1>Login</h1>
                <label htmlFor="email"></label>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    title="Enter a valid email"
                />


                <label htmlFor="password"></label>
                <input
                    type="password"
                    name="password"
                    placeholder="password"
                    required
                    pattern="(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}"
                    title="Password must be 8-20 characters long, include at least one letter and one number"
                />

                <br/>
                <button>Enter</button>
            </form>
        </div>
    )
}
export default Footer