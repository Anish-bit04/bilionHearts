const Main = () => {
    const patners = ['']
  return (
    <div className="">
      <div className="text-3xl text-gray-500 font-extrabold flex flex-col justify-center items-center tracking-wider">
        <h1 >Building Digital Product</h1>
        <h1 >For Global Users</h1>
        </div>
        <div className="wrapper flex flex-col justify-center items-center">
        <div className="m-6 text-sm text-gray-500">Subscribe for our beta launch</div>
        <div className="form flex flex-col justify-center items-center gap-6 w-40">
            <input type="text" placeholder="with your e-mail" className="border p-4 rounded-2xl border-slate-700 shadow-2xl text-center placeholder:text-center" />
            <input type="text" placeholder="and your name" className="border p-4 rounded-2xl border-slate-700 shadow-2xl text-center placeholder:text-center"/>
            <button className="bg-yellow-500 text-sm p-4 border rounded-2xl border-slate-700 text-center">Grant  Access</button>
            <div>You'll be invited soon:)</div>
            <img src="" alt="Leaves" />
        </div>

        <div className="patners">
            {patners.map((value,key)=>(
                 <img src="" alt="logo" />
            ))}
        </div>
        </div>
    </div>
  )
}

export default Main