import Image from 'next/image'
import Latihan from './component/latihan'
import Button from './component/button'
import { idText } from 'typescript'

function Home() {


  return (
    <main>

      <div className='flex justify-center text-center m-[10%] '>
        <Latihan asal='Depok' nama='Jwaataqy' kelas='XI RPL' isStudent umur={16} />
      </div>
      <button id='button_1'></button>
      <div className='flex gap-5 justify-center m-5'>
        <Button title='Simpan' isDisabled={true} />
        <Button title='Cancel' isDisabled={false} />
      </div>
    </main>

  )
};

export default Home



