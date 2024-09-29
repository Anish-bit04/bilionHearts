const Footer = () => {
    const publication = ['','']
  return (
    <div>
        <div>
            {publication.map((value,index)=>(
            <img src="" alt="" />))}
        </div>
        <div className="flex flex-col justify-center items-center text-gray-600">
        <div>@2024 Billion Hearts Software Technologies</div>
        <div>Bangalore,India</div>
        </div>
    </div>
  )
}

export default Footer