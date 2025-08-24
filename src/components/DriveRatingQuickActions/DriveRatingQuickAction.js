import React from 'react'
import DriveSafeRating from '../Charts/DriveSafeRating'
import DonutScore from '../Charts/DonutScore'
import QuickActions from '../Actions/QuickActions'

const DriveRatingQuickAction = () => {
            const handleDownload = (reportName) => {
    alert(`Downloading ${reportName}...`);

  };
  return (
      <>
          <div className='space'>
              <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-3 ">
                  <div className="col-span-1 bg-white rounded-lg   p-3 rounded border" >
                      <div>
                          <DriveSafeRating
                              rank={12}
                              lastYearRank={16}
                              changePercent={7}
                          />
                          {/* <DriveSafeRating2 
                    rank={12}
                    lastYearRank ={lastYearRank}
                    changePercent={changePercent}  
                />  */}
                      </div>
                  </div>
                  <div className="col-span-2  rounded-lg px-3  bg-white rounded border ">
                      <DonutScore
                          driverScore={700}
                          vehicleScore={450}
                          behaviourScore={780}
                          totalScore={500}
                      />
                  </div>

                  <div className="col-span-1 rounded-lg rounded border  bg-white ">
                      <QuickActions
                          actions={[
                              { label: "Download Health Report", onClick: () => handleDownload("Health Report 1") },
                              { label: "Download Health Report", onClick: () => handleDownload("Health Report 2") },
                              { label: "Download Health Report", onClick: () => handleDownload("Health Report 3") },
                          ]}
                      />
                  </div>
              </div>
          </div>
      </>
  )
}

export default DriveRatingQuickAction
