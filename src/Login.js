import React from 'react'
import { Modal } from 'react-bootstrap'


export default function Login() {
    return (
        <>
        
            <Modal.Dialog>
                <Modal.Body>
                    <Modal.Title>Login</Modal.Title>
                   <form>
                       <input type = "text" id="city" placeholder="Username"></input>
                       <input type = "password" id="city" placeholder="Password"></input>
                       <input type = "submit" id = "search" value = "Login"></input>                    
                    </form> 
                </Modal.Body>
            </Modal.Dialog>    

        </>
    )
}
