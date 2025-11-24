import React from 'react'

function Dashboard({userSignedIn, userTeam}) {

  const pointsTotal = userTeam.reduce((total, rider) => {
    return total + rider.points;
  }, 0);
  
  return (
    <div>
      <section className='flex flex-col items-center'>
        <h1 className='font-fasterone text-red-700 text-4xl lg:text-7xl text-shadow-lg/25'>Dashboard</h1>
        <p className='font-fasterone text-sky-700 text-2xl text-shadow-lg/50' >----a snapshot of your team and standings----</p>
      </section>

      <section className='flex flex-col items-center mt-1 mb-3'>
        <h2 className='font-fasterone text-yellow-400 text-3xl text-shadow-lg/25 mb-2.5'>Your Current Team</h2>
        <table className='table-auto border-green-700 border-4 border-separate border-spacing font-roboto text-center'>
          <thead className='bg-yellow-400 w-full'>
            <tr className='border-yellow-600 border-3'>
                <th className='border-green-600 border-2'>
                    Rider + Country
                </th>
                <th className='border-green-600 border-2'>
                    Team
                </th>
                <th className='border-green-600 border-2'>
                    Points
                </th>
            </tr>
          </thead>
          <tbody className='w-full bg-yellow-200'>
            {userTeam.length > 0 ? (
                userTeam.map(rider => (
                  <tr>
                    <td>
                      {rider.name} - {rider.country}
                    </td>
                    <td>
                      {rider.team}
                    </td> 
                    <td>
                      {rider.points}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td>Your Team Is Empty</td>
                  <td></td>
                  <td></td>
                </tr>
                  )
              }
          </tbody>
          <tfoot className='w-full bg-yellow-200'>
            <tr className='font-bold'>
              <td></td>
              <td>Total Points</td>
              <td>{pointsTotal}</td>
            </tr>
          </tfoot>
        </table>
      </section>

      <section className='flex flex-col items-center'>
        <h2 className='font-fasterone text-yellow-400 text-3xl text-shadow-lg/25 mb-2.5'>STANDINGS</h2>
        <table className='table-auto border-green-700 border-4 border-separate border-spacing font-roboto text-center'>
         <thead className='bg-yellow-400 w-full'>
            <tr className='border-yellow-600 border-3'>
                <th className='border-green-600 border-2'>
                    Team Name
                </th>
                <th className='border-green-600 border-2'>
                    Points
                </th>
            </tr>
          </thead>
          <tbody>
          </tbody>     
        </table>
      </section>
        


    </div>
  )
}

export default Dashboard;