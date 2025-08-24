import React from 'react'
import '../App.css'
import Sidebar from '../components/Sidebar/Sidebar'
import Topbar from '../components/Topbar/Topbar'
import PrimaryFilter from '../components/Filters/PrimaryFilter'
import StatCard from '../components/Stats/StatCard'
import DriveSafeRating from '../components/Charts/DriveSafeRating'
import DonutScore from '../components/Charts/DonutScore'
import QuickActions from '../components/Actions/QuickActions'


import '../assets/css/home.css'

import icon1 from "../assets/images/svg/driver.svg"
import LiveFleetTracking from '../components/LiveFleetTracking/LiveFleetTracking'
import { violations } from '../Data/LocalData'
import ViolationCards from '../components/ViolationListing/ViolationCards'
import ViolationTracker from '../components/ViolationTracker/ViolationTracker'
import ViolationTrackerGraph from '../components/ViolationTrackerGraph/ViolationTrackerGraph'
import FitnessAssessment from '../components/FitnessAssessment/FitnessAssessment '
import DriverHabits from '../components/DriverHabits/DriverHabits'
import HealthAssessmentSummary from '../components/HealthAssessmentSummary/HealthAssessmentSummary'
import HealthAssessmentTable from '../components/HealthAssessmentTable/HealthAssessmentTable'
const Home = () => {

    const handleDownload = (reportName) => {
    alert(`Downloading ${reportName}...`);
    // Here you can trigger file download logic
  };
  return (
    <div className="app-shell bg-[#f6f7fb]">
      <Sidebar />
      <div style={{height: '100vh', overflow:'auto'}}>  
      <Topbar className="sticky-top"/>
      <main className="app-content px-4 pb-5 " >
        
        {/* <PrimaryFilter /> */}
        <div className='pt-4'>
          <div className="text-xl font-semibold mb-3">Overview</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard title="No of Drivers" value="1200"  color="#5a4fcf" icon={icon1} />
            <StatCard title="Fleet Size" value="350 Buses" color="#f39a0b" />
            <StatCard title="No of Accidents" value="195" color="#16934a" />
            <StatCard title="No of Deaths" value="12" color="#1a9950" />
            <StatCard title="No of Injuries" value="245" color="#e47851" />
            <StatCard title="Financial Claims" value="17.5 Crore" color="#36b46e" />
            <StatCard title="Duty Disruptions" value="175 Hrs" color="#0b7582" />
            <StatCard title="Increase in insurance burden" value="57.0 Lacs" color="#0c3b4c" />
          </div>
        </div>
        <div className='space'>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 ">
          <div className="col-span-1 bg-white rounded-lg p-4 shadow-md p-3">
            <div className=''>
            <DriveSafeRating /> 
            </div>
          </div>
          <div className="col-span-2 rounded-lg px-3  bg-white rounded border "> 
              <DonutScore
                driverScore={780}
                vehicleScore={450}
                behaviourScore={880}
                totalScore={500}
              />
            </div>
          
          <div className="col-span-1 ">
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
      
        <div className="LiveFleetTracking space">
        <LiveFleetTracking data={fleetData} />
      </div>

        <div className="ViolationCards-listing space">
          <ViolationCards violations={violations} />
        </div>

        <div className='space'>
              <ViolationTracker/>
        </div>
        <div className='space'>
          <ViolationTrackerGraph/>
        </div>
        <div className='space'>
          <FitnessAssessment/>
        </div>
        <div className='space'>
          <DriverHabits/>
        </div>
        <div className='space'>
          <HealthAssessmentSummary/>
        </div>
        <div className='space'>
          <HealthAssessmentTable/>
        </div>
        <div className='space'>
          {/* <AgeGroupSegregation/> */}
        </div>
        
      </main>
      </div>
    </div>
  )
}

export default Home