import React, { useState } from "react";


const PartyForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [lastname, setLastname] = useState("");
    const [isBringingGuest, setIsBringingGuest] = useState(false);
    const [category, setCategory] = useState("");
    const [come, setCome] = useState("");
    const [formInfo, setFormInfo] = useState(
        {
            name: "",
            email: "",
            lastname: ""
        }
    )

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleLastnameChange = (e) => {
        setLastname(e.target.value);
    };
    const handleCategoryChange = (e) => {
        //multiple select ke liye
        // const selectedOptions = Array.from(e.target.selectedOptions, option => option.value);
        // console.log(selectedOptions);
        // setCategory(selectedOptions);

        //single select ke liye
        setCategory(e.target.value);
    };

    const handleCheckboxChange = (e) => {
        setIsBringingGuest(e.target.checked);
    };
    const handleCheck = (e) => {
        setCome(e.target.value);
    };
    return (
        <div className="party-form">
            <h1 >Party Invitation</h1>
            <h3>Join our party by completing the form below</h3>

            <h2>Date: August 15, 2026</h2>
            <h2> Time: 7:00 PM</h2>
            <h2> Location: F Block, Satellite Town</h2>

            <form>
                <h2>Name</h2>

                <div>
                    <input value={name} onChange={handleNameChange} type="text" />
                    <small>First Name</small>
                </div>

                <div>
                    <input value={lastname} onChange={handleLastnameChange} type="text" />
                    <small>Last Name</small>
                </div>

                <h2>Email</h2>
                <div>
                    <input value={email} onChange={handleEmailChange} type="email" />
                    <small>email@gmail.com</small>
                </div>

                <h2>Will you come?</h2>
                <div>
                    <label>
                        <input type="radio" name="attendance" value="yes" checked={come === "yes"} onChange={handleCheck} />
                        Yes
                    </label>
                    <label>
                        <input type="radio" name="attendance" value="no" checked={come === "no"} onChange={handleCheck} />
                        No
                    </label>
                    <label>
                        <input type="radio" name="attendance" value="maybe" checked={come === "maybe"} onChange={handleCheck} />
                        Maybe
                    </label>
                </div>
                <h2>Food Preference</h2>
                <div>
                    <select value={category} onChange={handleCategoryChange}>
                        <option value="" disabled>Select a category</option>
                        <option value="veg">Vegetarian</option>
                        <option value="nonveg">Non-Vegetarian</option>
                        <option value="drinks">Drinks Only</option>
                        <option value="dessert">Desserts</option>
                    </select>
                </div>

                <h2>Additional Option</h2>
                <div>
                    <label>
                        <input
                            type="checkbox"
                            checked={isBringingGuest}
                            onChange={handleCheckboxChange}
                        />
                        Bringing a guest?
                    </label>
                </div>

                <div style={{ display: "flex", gap: "10px" }}>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default PartyForm;