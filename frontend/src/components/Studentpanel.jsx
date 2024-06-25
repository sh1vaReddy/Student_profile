import { Link } from "react-router-dom";

const Studentpanel = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Welcome to Student Panel</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link to="/create" className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded shadow-lg transition duration-300 transform hover:scale-105">
          Create Student
        </Link>
        <Link to="/profile" className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded shadow-lg transition duration-300 transform hover:scale-105">
          Get Student Details
        </Link>
      </div>
    </div>
  );
};

export default Studentpanel
