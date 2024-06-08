
// import React from 'react';
// import { RxDashboard } from "react-icons/rx";
// import { HiMenu } from "react-icons/hi";
// import { useFilterContext } from './context/filter-context';

// export const Sort = () => {
//   const { grid_view, setListView, setGridView, sorting } = useFilterContext();

//   const handleSortChange = (e) => {
//     sorting(e.target.value);
//   };

//   return (
//     <div className='flex justify-between'>
//       <div>
//         <button className={grid_view ? 'bg-black text-white text-lg mr-4 p-1 rounded-md' : 'text-lg mr-4'} onClick={setGridView}>
//           <RxDashboard />
//         </button>
//         <button className={!grid_view ? 'bg-black text-white text-lg mr-4 p-1 rounded-md' : 'text-lg mr-4'} onClick={setListView}>
//           <HiMenu />
//         </button>
//       </div>
//       <div>
//         <form>
//           <label htmlFor="sort"></label>
//           <select name="sort" id="sort" className='p-2' onChange={handleSortChange}>
//             <option value="lowest">Price(lowest)</option>
//             <option value="highest">Price(highest)</option>
//             <option value="a-z">a-z</option>
//             <option value="z-a">z-a</option>
//           </select>
//         </form>
//       </div>
//     </div>
//   );
// };
import React from 'react';
import { RxDashboard } from "react-icons/rx";
import { HiMenu } from "react-icons/hi";
import { useFilterContext } from './context/filter-context';

export const Sort = () => {
    const { grid_view, setListView, setGridView, sorting } = useFilterContext();

    const handleSortChange = (e) => {
        sorting(e.target.value);
    };

    return (
        <div className='flex justify-between items-center'>
            <div className='lg:ml-3 ml-0'>
                <button className={grid_view ? 'bg-black text-white text-lg mr-4 p-1 rounded-md' : 'text-lg mr-4'} onClick={setGridView}>
                    <RxDashboard />
                </button>
                <button className={!grid_view ? 'bg-black text-white text-lg mr-4 p-1 rounded-md' : 'text-lg mr-4'} onClick={setListView}>
                    <HiMenu />
                </button>
            </div>
            <div>
                <form>
                    <label htmlFor="sort" className='sr-only'>Sort</label>
                    <select name="sort" id="sort" className='p-2 border rounded' onChange={handleSortChange}>
                        <option value="lowest">Price(lowest)</option>
                        <option value="highest">Price(highest)</option>
                        <option value="a-z">a-z</option>
                        <option value="z-a">z-a</option>
                    </select>
                </form>
            </div>
        </div>
    );
};
