import moment from "moment"
export const RealHead=()=>{
  const now = moment().format('YYYY-MM-DD HH:mm');
    return(
        <header className="  text-white p-6">
        <div className=" text-xl font-bold text-gray-700 flex justify-between">
          <div>
          hello, 선구. <span className=" text-yellow-600 text-3xl">Good Afternoon !</span>
          </div>
       
        <span> Time:<span className="text-yellow-600">  {now}</span></span>
        </div>
      </header>
    )
}