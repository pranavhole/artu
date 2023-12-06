import React , {useState} from 'react'

function Signup() {
    const [email, setEmail] = useState('');
const [isHovered, setIsHovered] = useState(false);

const handleInputChange = (e) => {
  setEmail(e.target.value);
};

const handleMouseEnter = () => {
  setIsHovered(true);
};

const handleMouseLeave = () => {
  setIsHovered(false);
};

const handleSubmit = () => {
  if (isValidEmail(email)) {
    // Redirect to the specified URL
    window.location.href = 'https://app.loch.one/welcome';
  } else {
    alert('Please enter a valid email.');
  }
};

const isValidEmail = (input) => {
  // Simple email validation using indexOf
  return input.indexOf('@') !== -1 && input.indexOf('.') !== -1;
};

  return (
    <div className='w-[640px] bg-white h-screen z-10 relative'>
      <div>Sign up for exclusive access.</div>
      <div>
      <input
        type="text"
        id="emailInput"
        value={email}
        onChange={handleInputChange}
        placeholder="Your Email Address"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ border: isHovered ? '2px solid #3498db' : '1px solid #ccc' }}
      />
      <button onClick={handleSubmit}>Submit</button>
      </div>
      <div></div>
    </div>
  )
}

export default Signup
