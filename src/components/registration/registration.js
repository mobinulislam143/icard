import React, { useState,useEffect } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

const Registration = () => {
  
  const [formData, setFormData] = useState({
    name: '',
    fatherName: '',
    department: '',
    shift: '',
    roll: '',
    bloodGroup: '',
    mobile: '',
    email: '',
    registrationNumber: '',
    image: null,
    mode: 'Sign up'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({ ...prevData, image: file }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

      try {
        // Convert the image file to base64 data
        const imageBase64 = await convertImageToBase64(formData.image);
  
        // Create the registration data object
        const registrationData = {
          name: formData.name,
          fatherName: formData.fatherName,
          department: formData.department,
          shift: formData.shift,
          roll: formData.roll,
          bloodGroup: formData.bloodGroup,
          mobile: formData.mobile,
          registrationNumber: formData.registrationNumber,
          image: imageBase64,
          email: formData.email
        };
       localStorage.setItem("student", JSON.stringify(registrationData));
  
        // // Save the form data to Firebase using axios.post
        // await axios.post('https://student-id-cart.vercel.app/api/v1/register', registrationData)
        // .then((result) => {
        //   console.log(result)
        // }).catch((err) => {
        //   alert("Something went wrong  !!!")
        // });
        // console.log(registrationData)
        

        
        window.location.href = "/dashboard";
  
      
  
        // Reset the form
        setFormData({
          name: '',
          fatherName: '',
          department: '',
          shift: '',
          roll: '',
          bloodGroup: '',
          mobile: '',
          registrationNumber: '',
          image: null,
          email: '',
        });
      } catch (error) {
        alert("Sorry you are not connecte Internet please first connect internet connection in your device...!!!!")
      }
  };
  const convertImageToBase64 = (imageFile) => {
    return new Promise((resolve, reject) => {
      if (!imageFile) {
        resolve(null);
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        resolve(reader.result);
      };
      reader.onerror = (error) => {
        reject(error);
      };
      reader.readAsDataURL(imageFile);
    });
  };



  return (
   <div className='container'>
     <Form onSubmit={handleSubmit}>
        <FormGroup>
        <Label htmlFor="name">Name</Label>
        <Input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        </FormGroup>

        <FormGroup>
        <Label htmlFor="fatherName">Father's Name</Label>
        <Input
          type="text"
          id="fatherName"
          name="fatherName"
          value={formData.fatherName}
          onChange={handleChange}
          required
        />
        </FormGroup>

        <FormGroup>
        <Label htmlFor="department">Department</Label>
        <Input
          type="text"
          id="department"
          name="department"
          value={formData.department}
          onChange={handleChange}
          required
        />
        </FormGroup>

        <FormGroup>
        <Label htmlFor="shift">Shift</Label>
        <Input
          type="text"
          id="shift"
          name="shift"
          value={formData.shift}
          onChange={handleChange}
          required
        />
        </FormGroup>

        <FormGroup>
        <Label htmlFor="roll">Roll</Label>
        <Input
          type="text"
          id="roll"
          name="roll"
          value={formData.roll}
          onChange={handleChange}
          required
        />
        </FormGroup>
        <FormGroup>
        <Label htmlFor="email">E mail</Label>
        <Input
          type="text"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        </FormGroup>

        <FormGroup>
        <Label htmlFor="bloodGroup">Blood Group</Label>
        <Input
          type="text"
          id="bloodGroup"
          name="bloodGroup"
          value={formData.bloodGroup}
          onChange={handleChange}
          required
        />
        </FormGroup>

        <FormGroup>
        <Label htmlFor="mobile">Mobile</Label>
        <Input
          type="text"
          id="mobile"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          required
        />
        </FormGroup>

        <FormGroup>
        <Label htmlFor="registrationNumber">Registration Number</Label>
        <Input
          type="text"
          id="registrationNumber"
          name="registrationNumber"
          value={formData.registrationNumber}
          onChange={handleChange}
          required
        />
        </FormGroup>
        <FormGroup>
        <select className="form-control" >
          <option value='Session'>Session</option>
          <option value='22-23'>22-23</option>
          <option value='21-22'>21-22</option>
          <option value='20-21'>20-21</option>
          <option value='19-20'>19-20</option>
          <option value='18-19'>18-19</option>
          <option value='17-18'>17-18</option>
          <option value='16-17'>16-17</option>
          <option value='15-16'>15-16</option>
        </select>

        </FormGroup>

        <FormGroup>
        <Label htmlFor="image">Image</Label>
        <Input
          type="file"
          id="image"
          name="image"
          onChange={handleImageChange}
          required
        />
        </FormGroup>


      <Button className='mt-2'>Submit</Button>
      
    </Form>
   </div>
  );
};

export default Registration;
