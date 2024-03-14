import { useEffect, useState } from 'react';
import { Bowler } from '../types/Bowler';

function BowlerList() {
  const [bowlerData, setBowlerData] = useState<Bowler[]>([]);
  const [teamData, setTeamData] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const fetchBowlerData = async () => {
      const rsp = await fetch('http://localhost:5092/bowlingleague');
      const b = await rsp.json();
      setBowlerData(b);
    };

    const fetchTeamData = async () => {
      const rsp = await fetch('http://localhost:5092/teams');
      const teams = await rsp.json();
      // Assuming teams is an array of objects with teamId as key and teamName as value
      const teamDataMap: { [key: string]: string } = {};
      teams.forEach((team: { teamId: string | number; teamName: any }) => {
        teamDataMap[team.teamId] = team.teamName;
      });
      setTeamData(teamDataMap);
    };

    fetchBowlerData();
    fetchTeamData();
  }, []);

  return (
    <>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Bowler Name</th>
            <th>Team Name</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {bowlerData.map((b) => (
            <tr key={b.bowlerId}>
              <td>
                {b.bowlerFirstName} {b.bowlerMiddleInit} {b.bowlerLastName}
              </td>
              <td>{teamData[b.teamId as unknown as string]}</td>
              <td>{b.bowlerAddress}</td>
              <td>{b.bowlerCity}</td>
              <td>{b.bowlerState}</td>
              <td>{b.bowlerZip}</td>
              <td>{b.bowlerPhoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default BowlerList;
