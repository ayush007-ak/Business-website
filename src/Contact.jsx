import React, { useState } from 'react';

const Contact = () => {
    const [data, SetData] = useState(
        {
            name:"",
            email:"",
            mobile:"",
            msg:"",
       
     });

     const InputEvent = (event) => {
         const {name, value} = event.target;

         SetData((preVal) => {
             return{
                 ...preVal,
                 [name]: value,
             }
         })
     };

    const formSubmit = () => {}
    return(<>
      <div className="my-5">
          <h1 className="text-center">Contact Us</h1>
      </div>
      
      <div className="container contact_div">
          <div className="row">
              <div className="col-md-6 col-10 mx-auto">
              <form onSubmit={formSubmit}>
  <div class="form-group">
    <label for="exampleFormControlInput1">Name</label>
    <input type="text" class="form-control" id="exampleFormControlInput1" 
   name="name"
   value={data.name}
   onChange={InputEvent}
   placeholder=""/>
  </div>

  <div class="form-group">
    <label for="exampleFormControlInput1">Email address</label>
    <input type="text" class="form-control" id="exampleFormControlInput1"
    name="email"
    value={data.email}
    onChange={InputEvent}
     placeholder=""/>
  </div>

  
  <div class="form-group">
    <label for="exampleFormControlInput1">Mobile Number</label>
    <input type="text" class="form-control" id="exampleFormControlInput1"
    name="mobile"
    value={data.mobile}
    onChange={InputEvent}
     placeholder=""/>
  </div>

  
  
  <div class="form-group">
    <label for="exampleFormControlSelect1">Rate service</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
 
  <div class="mb-3">
    <label for="exampleFormControlTextarea1">Message</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"  name="msg"
    value={data.msg}
    onChange={InputEvent}></textarea>
  </div>
</form>



<form>
  
  <button type="submit" class="btn btn-outline-primary ">Submit</button>
</form>
              </div>
          </div>
      </div>
        </>
    )
};

export default Contact;