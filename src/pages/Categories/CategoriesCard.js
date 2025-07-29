import React from 'react';

const BedroomCategory = () => {
  return (
    <div className="max-w-sm w-full mx-auto pb-[200px] p-4">
      {/* Header */}
      <div className="flex w-full items-center justify-between mb-4">
                    <button
            //   onClick={() => setShowSearch(false)}
            //   className="absolute left-0 top-1/2 -translate-y-1/2 p-1"
            >
              {/* Back Icon SVG */}
              <svg width="22" height="20" viewBox="0 0 22 20" fill="none">
                <path d="M11.909 1.44531L1 9.94197M1 9.94197L11.909 18.4453M1 9.94197H20.62" stroke="#4B4544" strokeWidth="1.29" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
        <h1 className="text-center text-lg font-semibold text-[#F4B5A4]">Categories</h1>
                <button
          className="w-8 h-8 rounded-full border cursor-pointer border-[#E6C2B5] bg-[#F4B5A4] flex items-center justify-center"
        //   onClick={() => setShowSearch(true)}
        >
          {/* Search Icon SVG */}
          <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
            <path
              d="M11.8958 11.8958L15.61 15.61M13.7679 7.38393C13.7679 10.9097 10.9097 13.7679 7.38393 13.7679C3.85818 13.7679 1 10.9097 1 7.38393C1 3.85818 3.85818 1 7.38393 1C10.9097 1 13.7679 3.85818 13.7679 7.38393Z"
              stroke="#4B4544"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

    {/* Grid */}
<div className="grid grid-cols-2 sm:grid-cols-2  gap-4 max-w-sm w-full mx-auto p-1 auto-rows-auto">
  {/* Row 1, Col 1 */}
  <div className=" rounded-lg text-white">
  <div className="flex flex-col w-full space-y-4 p-0">
    {/* Decorative Light */}
    <div className="flex h-[86px] justify-center items-center min-w-[110px] p-2 bg-[#F4B5A4] rounded-[15px] aspect-[2/1] text-sm text-center">
      Bedroom
    </div>

    {/* Beds */}
    <div className="flex justify-center h-[256px] min-w-[110px] items-center p-2 bg-[#F4B5A4] rounded-[15px] aspect-[2/3] text-sm text-center">
      Kitchen
    </div>
    <div className="flex flex-row justify-center h-[140px] min-w-[110px] items-center p-2 bg-[#F4B5A4] rounded-[15px] aspect-[2/3] text-sm text-center">
  Office
</div>

  </div>
</div>
<div className=" rounded-lg text-white">
    <div className="flex flex-col w-full space-y-4 p-0">
  {/* Row 1, Col 2 */}
  <div className="flex flex-row h-[145px] justify-center items-center p-2 gap-2 bg-[#F4B5A4] text-white rounded-[15px] aspect-[3/4] text-sm text-center">
    Living Room
    </div>
    {/* Row 2, Col 1 */}
    <div className="flex flex-row h-[137px] justify-center items-center p-2 gap-2 bg-[#F4B5A4] text-white rounded-[15px] aspect-[3/4] text-sm text-center">
  Dining Room
</div>
    {/* Row 2, Col 2
    <div className="flex flex-row justify-center h-[200px] items-center p-2 gap-2 bg-[#F4B5A4] text-white rounded-[15px] aspect-[3/4] text-sm text-center">
    Cupboard
    </div> */}
  </div>
</div>
</div>
 {/* <div className="flex absolute items-center w-[302px] gap-9 h-[130px] justify-center items-center p-[5px] bg-[#F4B5A4] text-white rounded-[15px] text-sm text-center">
  Decor
</div> */}

</div>


  );
};

export default BedroomCategory;
