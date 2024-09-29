
import billionHeartLogo from '../assets/billionHearts.svg'
const Header = () => {
    return (
      <div className=' h-[207px] '>
          <img src={billionHeartLogo} alt="Billion Hearts" className=' h-[174px] w-[256px]' />
          <div className='w-full border border-yellow-200 '></div>
      </div>
    )
  }
  
  export default Header