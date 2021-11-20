import React from 'react'
import './Main.css'
import logo from '../media/logoglass.png'


function Main() {
    return (
        <>
            <div className="logoimg">
                <img src={logo} />
            </div>
            <form>
                <input type="text" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <div class="enter">
                    <input id="enter" type="submit" name="enter" value="Connect" />
                </div>
                <input type="button" value="Register" />

                {/* New Challenge is : React Route To make a Redirect to Register Page */}
            </form>
        </>
    );
}

export default Main;