import React from 'react';
import {Line} from 'react-chartjs-2';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const SingleCityTable = ({city, CityNames, data, currentYearData}) => {

    const useStyles = makeStyles({
        table: {
          minWidth: 650,
        },
      });

      const classes = useStyles();


    if(!data.length || !currentYearData.length){
       return 'Loading...';
     }


    //add city names to the data
    currentYearData.forEach(function(city){
        let NameoftheCity = CityNames[city.key[1]];
        city.key.push(NameoftheCity);
        city.values[0] = Number(city.values[0]);
  })
    

    function createYearlyData(kaupunki, asukasluku, muutos, vuosi) {
        return { kaupunki, asukasluku, muutos, vuosi };
      }

    function createMonthlyData(kuukausi, kaupunki, asukasluku) {
        return { kuukausi, kaupunki, asukasluku };
      }

    var CityName = city;

    //only selected city
    const SelectedCity = [];
    const SelectedMonthlyCity = [];

    //for yearly data
    data.forEach(function(city){
        let name = city.key[2];
        
            if(name === CityName){
                let NewRow = createYearlyData(city.key[2], city.values[0], city.values[1], city.key[1])
                SelectedCity.push(NewRow);
            } 
        });
    
    //for monthly data

    currentYearData.forEach(function(city){
        let name = city.key[4];
        
        
            if(name === CityName){
                let NewRow = createMonthlyData(city.key[0], city.key[4], city.values[0])
                SelectedMonthlyCity.push(NewRow);
            } 
        });


    return(
        <div>
        <h3>Kuluneen vuoden ennakkotiedot</h3>
            <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Kuukausi</TableCell>
              <TableCell>Asukasluku</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {SelectedMonthlyCity.map((row) => (
              <TableRow key={row.kuukausi} hover>
                <TableCell component="th" scope="row">
                  {row.kuukausi}
                </TableCell>
                <TableCell>{row.asukasluku}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    
      <h3>Viimeiset 30 vuotta</h3>
      <Line
            data={{
                labels: SelectedCity.map(({vuosi}) => vuosi),
                datasets: [{
                    data: SelectedCity.map(({asukasluku}) => asukasluku),
                    label: 'Asukasluku',
                    borderColor: '#0062ff',
                    fill: true,
                },
                {
                    data: SelectedCity.map(({muutos}) => muutos),
                    label: 'Muutos',
                    borderColor: 'rgba(255, 0, 0, 0.5)',
                    fill: true,
                }
            ],
            }}
        />
        </div>
        
    )
}

export default SingleCityTable