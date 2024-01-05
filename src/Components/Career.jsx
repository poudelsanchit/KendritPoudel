
const Career = () => {
  const careerlist = [
    {
      time: "Now",
      position: "Jr Architect",
      company: "Mantra Architects",
    },
    {
      time: "2022",
      position: "Completed Bachelor",
      company: "Institute of Engineering, Pulchowk Campus",
    },
    {
      time: "2017",
      position: "Completed +2",
      company: "Sagarmatha Secondary School",
    },
  ];
    return (
      <>
        <div className="w-full flex justify-center text-txtprimary">
          <div className="flex  flex-col mb-96 gap-5 h-screen pt-20 w-full">
            <div className="tracking-[0.2em] font-semibold text-xl flex justify-center  ">
            <div className="w-8/12">My Journey</div>

            </div>
            <div className="flex  flex-col   text-4xl  font-[550] tracking-tight">
            {careerlist.map((data,index)=>{
              return (
                <div
                  className="h-40 border-y-[1px] border-[#272522] w-full flex justify-center"
                >
                  <div className="w-8/12 flex   gap-52 items-center">
                    <div>{data.time}</div>
                    <div className="flex flex-col gap-1">
                      <div>{data.position}</div>
                      <div className="text-base font-light tracking-wide">
                        {data.company}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            
            </div>
          </div>
        </div>
      </>
    );
  
     
  }
  
  export default Career