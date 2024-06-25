import { useState } from 'react';
import axios from 'axios';

const GetStudent = () => {
  const [hallNo, setHallNo] = useState('');
  const [student, setStudent] = useState(null);
  const [error, setError] = useState('');

  const getStudent = async () => {
    try {
      const response = await axios.post('http://localhost:4000/api/v1/rollno', { Hall_NO: hallNo });
      console.log(response.data)
      setStudent(response.data);
      setError('');
    } catch (error) {
      setError(error.response.data);
      setStudent(null);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-4 text-center text-blue-600">Get Student Profile</h2>
        <div className="flex flex-col items-center space-y-4">
          <input
            type="text"
            placeholder="Enter Hall No"
            value={hallNo}
            onChange={(e) => setHallNo(e.target.value)}
            className="input-field"
          />
          <button onClick={getStudent} className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Get Student
          </button>
          {error && <p className="text-red-500">{error}</p>}
          {student && (
            <div className="text-center">
              <h2 className="text-xl font-bold mb-2">Student Profile</h2>
              <p><strong>Name:</strong> {student.Student_name}</p>
              <p><strong>Father Name:</strong> {student.Father_name}</p>
              <p><strong>Mother Name:</strong> {student.Mother_name}</p>
              <p><strong>Gender:</strong> {student.Gender}</p>
              <p><strong>Hall No:</strong> {student.Hall_NO}</p>
              <p><strong>Department:</strong> {student.Department}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default GetStudent;
