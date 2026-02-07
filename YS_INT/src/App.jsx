import UserForm from "./forms/user/UserForm";

const sampleUserData = {
  user_id: 1001,
  user_name: "john_doe",
  password_hash: "********",
  user_type: "Admin",
  branch: "Main Office",
  first_name: "John",
  last_name: "Doe",
  gender: "Male",
  birth_date: "1990-05-15",
  address: "123 Main Street, City",
  pin_code: "123456",
  contact_no: "9876543210",
  email_id: "john.doe@email.com",
  is_active: true,
  created_date: "2024-01-15 10:30:00",
  updated_date: "2024-06-20 14:45:00",
};

function App() {
  return (
    <div className="App">
      <UserForm userData={sampleUserData} />
    </div>
  );
}

export default App;
