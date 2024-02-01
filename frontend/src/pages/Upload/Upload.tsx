const Upload = () => {
  return (
    <div className='w-4/5 flex flex-col gap-8 items-center justify-center'>
      <h1 className='text-2xl'>Upload a new pitch</h1>
      <input type='file' />
      <button>Upload</button>
    </div>
  )
}

export default Upload