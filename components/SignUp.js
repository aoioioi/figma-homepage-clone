function SignUp() {
  return (
    <div className="max-w-[20rem] mx-auto py-28">
      <h2 className="text-3xl text-center mb-8 font-polite">Try Figma for free.</h2>
      <button className="max-w-[20rem] w-full border-2 border-gray-900 rounded-lg px-12 py-3 my-6 font-polite hover:-translate-y-0.5 transition duration-150">
        <i className="bi bi-google mr-2"></i>
        Continue with Google</button>
      <p className="text-center text-gray-500">or</p>
      <div className="flex grow justify-center my-2">
        <form action="" className="max-w-[20rem]">
          <input type="text" placeholder="Email" className="w-full border-2 border-gray-900 px-4 py-3 block my-4 rounded-md focus:outline-hidden focus:border-blue-600" />
          <input type="text" placeholder="Password" className="w-full border-2 border-gray-900 px-4 py-3 rounded-md focus:outline-hidden focus:border-blue-600" />
          <button className="w-full bg-black text-white border-2 border-gray-900 rounded-lg px-12 py-3 my-6 font-polite hover:-translate-y-0.5 transition duration-150">Create account</button>
        </form>
      </div>
      <div className="flex flex-col items-center space-y-5">
        <a href="/" className="text-blue-600 hover:underline block">Sign up with SAML SSO</a>
        <div className="text-gray-500">
          Already have an account? {' '}
          <a href="/" className="text-blue-600 hover:underline">Log in</a>
        </div>
        <p className="text-[11px] text-gray-500 text-center mx-4">
          This site is protected by reCAPTCHA and the Google <a href="/" className="text-blue-600 hover:underline">Privacy Policy</a> and <a href="/" className="text-blue-600 hover:underline">Terms of Service</a> apply.
          By clicking "Create account", I agree to Figma's <a href="/" className="text-blue-600 hover:underline"> TOS</a> and <a href="/" className="text-blue-600 hover:underline">Privacy Policy</a>.
        </p>
      </div>
    </div>
  )
}

export default SignUp
