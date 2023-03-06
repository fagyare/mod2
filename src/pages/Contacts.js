import { useState } from "react";

function Contacts() {

    let [form, setForm] = useState();
    const onSubmit = (e) => {
        e.preventDefault()
        setForm()
        const { name, email, message } = e.target.elements
        let formInfor = {
            name: name.value,
            email: email.value,
            message: message.value,
        }
        console.log(formInfor)
    }



    return (
        <>
        <div className="contacts">
            <h3 className="contact-form">Contact Us</h3>
            <form onSubmit={onSubmit}>
                <div className="form">
                    <input placeholder="Name" className="form-control" type="text" id="name" required />
                </div>
                <div className="form">
                    <input placeholder="Email" className="form-control" type="email" id="email" required />
                </div>
                <div className="form">
                    <textarea placeholder="Message" className="form-control" id="message" required />
                </div>
                <button className="form-btnr" type="submit">Submit
                    {form}
                </button>
            </form>
        </div>
        </>
    )
}

export default Contacts;
