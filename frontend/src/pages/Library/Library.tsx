const Library = () => {

  const placeholderData = [
    {
      title: 'You just lost to Plat',
      description: 'What\'s up guys welcome back to',
    }, {
      title: 'obsidian traps are the best trap in minecraft...',
      description: 'Obsidian Trapping Is Overpowered (Hypixel UHC)'
    }, {
      title: 'I Beat A TOXIC Hacker In Minecraft UHC',
      description: 'I killed/beat the most toxic hacker.. (minecraft hypixel uhc)'
    }, {
      title: 'This Is The Best Horse In Minecraft?! (Hypixel UHC)',
      description: 'The Best Horse In Minecraft (Hypixel UHC)'
    }
  ] as Array<{ title: string, description: string }>

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 w-4/5">
      {
        placeholderData.map(
          (video, index) => {
            return (
              <div className='w-full border-[1px] rounded-md max-h-min' key={`video-${index}`}>
                <div className='bg-neutral-200 w-full aspect-video'>
                </div>
                <div className='p-4'>
                  <h3 className='text-lg'>{video.title}</h3>
                  <p className='text-neutral-500'>{video.description}</p>
                </div>
              </div>
            )
          }
        )
      }

    </div>
  )
}

export default Library