import logo from './assets/logo.jpeg'

function App() {
  return (
    <div className='grid place-items-center h-screen w-full'>
      <div className='p-12 px-20 bg-white border-slate-300 border-[1px] rounded-md'>
        <div className='flex flex-col justify-center items-center gap-8'>
          <img src={logo} alt='logo' className='h-8' />
          <h1 className='text-center font-bold text-6xl text-slate-600'>Plat</h1>
        </div>
        <p className='text-slate-400 text-center mt-8 max-w-[60%] mx-auto'>
          Quack on to your next pitch.
        </p>
        <input placeholder='Email' className='w-full outline-none border-[1px] border-slate-300 p-2 rounded-md mt-8'></input>
        <button className='w-full outline-none border-[1px] p-2 rounded-md border-slate-300 bg-slate-200 mt-2 hover:opacity-80'>Join the waiting list</button>
      </div>
    </div>
  )
}

export default App
