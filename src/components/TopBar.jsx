
import logo from '../assets/logo.svg'
const TopBar = () => {
  return (
    <div className='bg-white flex justify-between items-center  border border-black-200 rounded-[20px] px-8  h-24.75'>
        <img className='logo w-18.5 h-[64.38px]' src={logo }alt="" />

        <ul className="links text-black-600 space-x-9 text-base/normal flex ">
            <li><a className='hover:text-primary-500 transition-all ' href="#">Home</a></li>
            <li><a className='hover:text-primary-500 transition-all ' href="#">Analysis</a></li>
            <li><a className='hover:text-primary-500 transition-all ' href="#">Announcements</a></li>
            <li><a className='hover:text-primary-500 transition-all ' href="#">Resources</a></li>
        </ul>

        <div className="action flex gap-8">
        <div className="w-12 h-12 rounded-[10px] border border-black-200 flex items-center justify-center ">not</div>
        <div className="w-12 h-12 rounded-[10px] border border-black-200 flex items-center justify-center ">set</div>
        {/* <div className="profile-image w-12 h-12 rounded-full  " style={{backgroundImage:`url(${})`}}></div> */}
        </div>
    </div>
  )
}

export default TopBar