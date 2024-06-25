import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const StudentProfile = () => {
    const [formData, setFormData] = useState({
        Student_name: '',
        Father_name: '',
        Mother_name: '',
        Gender: '',
        Date_of_birth: '', 
        Email: '',
        year: '',
        Department: '',
        Hall_NO: '',
        phone: ''
    });
    const[adress,setaddress]=useState({
        State:"",
        City:"",
        Zipcode:""
    })
    const [error, setError] = useState(null);


    const handleAdress= (e) =>{
        setaddress({...adress,[e.target.name]:e.target.value})
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
             await axios.post('http://localhost:4000/api/v1/student', {
                ...formData,...adress
            });
            toast.success("Sucesfuuly Student Registered")
           setFormData({
                Student_name: '',
                Father_name: '',
                Mother_name: '',
                Gender: '',
                Date_of_birth: '',
                Email: '',
                year: '',
                Department: '',
                Hall_NO: '',
                phone: '',
               
            });
            setaddress({
                State: "",
                City: "",
                Zipcode: ""
            });
        } catch (error) {
        const Error=error.response.data.message;
        toast.error(Error)
            
        }
    };

    return (
        <div className="flex justify-center items-center h-full bg-gray-100 overflow-hidden ">
            <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md overflow-y-auto">
                <h2 className="text-3xl font-bold mb-4 text-center text-blue-600">Student Profile</h2>
                {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Student Name:</label>
                        <input type="text" name="Student_name" value={formData.Student_name} onChange={handleChange} placeholder="Enter Student Name" required className="input-field" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Father's Name:</label>
                        <input type="text" name="Father_name" value={formData.Father_name} onChange={handleChange} placeholder="Enter Father's Name" required className="input-field" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Mother's Name:</label>
                        <input type="text" name="Mother_name" value={formData.Mother_name} onChange={handleChange} placeholder="Enter Mother's Name" required className="input-field" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Gender:</label>
                        <select name="Gender" value={formData.Gender} onChange={handleChange} required className="input-field">
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
                        <input type="email" name="Email" value={formData.Email} onChange={handleChange} placeholder="Enter Email" required className="input-field" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Year:</label>
                        <input type="text" name="year" value={formData.year} onChange={handleChange} placeholder="Enter Year" required className="input-field" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Department:</label>
                        <input type="text" name="Department" value={formData.Department} onChange={handleChange} placeholder="Enter Department" required className="input-field" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Hall Number:</label>
                        <input type="text" name="Hall_NO" value={formData.Hall_NO} onChange={handleChange} placeholder="Enter Hall Number" required className="input-field" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Phone:</label>
                        <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter Phone" required className="input-field" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">State:</label>
                        <input type="text" name="State" value={adress.State} onChange={handleAdress} placeholder="Enter State" required className="input-field" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">City:</label>
                        <input type="text" name="City" value={adress.City} onChange={handleAdress} placeholder="Enter City" required className="input-field" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">ZipCode:</label>
                        <input type="text" name="Zipcode" value={adress.Zipcode} onChange={handleAdress} placeholder="Enter ZipCode" required className="input-field" />
                    </div>
                    <button type="submit" className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default StudentProfile;
