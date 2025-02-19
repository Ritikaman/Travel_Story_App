import React from 'react'
import moment from "moment/moment";
import { MdOutlineClose } from 'react-icons/md';

const FilterInfoTitle = ({FilterType,FilterDates,onClear}) => {

    const DateRangeChip = ({date}) =>{
        const startDate = date?.from 
        ? moment(date?.from).format("DD MMM YYYY")
        :"N/A";

        const endDate = date?.to ? moment(date?.to).format("DD MMM YYYY"):"N/A";

        return(
            <div className='flex items-center gap-2 bg-slate-100 px-3 py-2 rounded'>
                <p className='text-xs font-medium'>
                    {startDate} - {endDate}
                </p>

                <button onClick={onClear}>
                    <MdOutlineClose/>
                </button>
            </div>
        );
    };
  return (
    FilterType && (
    <div className='mb-5'>
        {FilterType === "search" ? (
            <h3 className='text-lg font-medium'>Search Results</h3>
        ):(
            <div className='flex items-center gap-2'>
                <h3 className='text-lg font-medium'>Travel Stories from</h3>
                <DateRangeChip date={FilterDates}/>
            </div>
        )}
    </div>
    )
  )
}

export default FilterInfoTitle