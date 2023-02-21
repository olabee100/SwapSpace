import Chart from "./PieChart";
const Dashboard2 = () => {
  const data = [
    { name: "Group A", value: 42 },
    { name: "Group B", value: 30 },
    { name: "GroupC", value: 28 },
  ];
  const data2 = [
    { name: "Group A", value: 47 },
    { name: "Group B", value: 53 },
  ];
  const data3 = [
    { name: "Group A", value: 47 },
    { name: "Group B", value: 53 },
  ];
  return (
    <div className="ml-[14rem] mt-[5rem] mr-[1rem]">
      <div className="px-[2rem] py-[0.5rem] justify-between bg-blue-200 rounded-[20px] text-white flex items-center">
        <div>
          <h2 className="text-[48px] font-[400] font-poppins">
            University Of Toronto
          </h2>
          <p className="font-roboto text-[20px] font-400">
            Public university in Toronto, Canada
          </p>
          <div className="bg-white inline-block text-black px-[1rem] py-[0.5rem] rounded-[10px]">
            Exclusive
          </div>
        </div>
        <div>
          <span className="h-[120px] w-[3px] block bg-white"></span>
        </div>
        <div className="flex flex-col items-start justify-center">
          <div className="flex justify-between">
            <div className="p-[0.5rem]">
              <div className="font-poppins pr-[0.5rem] font-600 text-[24px]">
                Contract Person
              </div>
              <p className="font-poppins font-400 text-[18px]">
                Pro. John Thar
              </p>
            </div>
            <div className="p-[0.5rem]">
              <div className="font-poppins font-600 text-[24px]">
                Contract Date
              </div>
              <p className="font-poppins font-400 text-[18px]">12/02/2022</p>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="p-[0.5rem]">
              <div className="font-poppins pr-[0.5rem] font-600 text-[24px]">
                Contract Renewal
              </div>
              <p className="font-poppins font-400 text-[18px]">12/02/2023</p>
            </div>
            <div className="p-[0.5rem]">
              <div className="font-poppins font-600 text-[24px]">Manager</div>
              <p className="font-poppins font-400 text-[18px]">
                DR. Lawan Johnson
              </p>
            </div>
          </div>
        </div>
      </div>
      <button className="p-[10px] block mx-auto my-[0.5rem] text-white bg-[#0D2C58] rounded-[10px]">
        Create new application
      </button>
      <div className="flex justify-between">
        <div className="p-[1rem] w-[200px] h-[110px] bg-[#D9D9D9]">
          <h3 className="m-auto">Applications</h3>
          <Chart data={data} />
        </div>
        <div className="p-[1rem] w-[200px] h-[110px] bg-[#D9D9D9]">
          <h3 className="m-auto">Comissions</h3>
          <Chart data={data2} />
        </div>
        <div className="p-[1rem] w-[200px] h-[110px] bg-[#D9D9D9]">
          <h3 className="m-auto">Revenue</h3>
          <Chart data={data3} />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Dashboard2;
