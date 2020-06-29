import React from 'react';
import styles from './App.module.css';
import {fetchCurrentYearData, fetchCityData} from './api';
import CityTable from './Components/Tables/CityTable';
import SingleCityTable from './Components/Tables/SingleCityTable';
import CitySelect from './Components/CitySelect/CitySelect';


class App extends React.Component {

    state = {
        CurrentYearData: {},
        CityData: {},
        CityNames: {},
        City: ""
    }


    async componentDidMount(){
        const FetchedFinData = await fetchCurrentYearData();
        const FetchedCityData = await fetchCityData();

        this.setState({CurrentYearData: FetchedFinData});
        this.setState({CityData: FetchedCityData.data});
        this.setState({CityNames: FetchedCityData.cityNames});
    }

    handleCityChange = (city) =>{
        this.setState({City: city});
    }


    render(){
        const CData = this.state.CurrentYearData;
        const Data = this.state.CityData;
        const CityNames = this.state.CityNames;
        const CityName = this.state.City

        if(CityName){
            return(
                <div className={styles.container}>
                    <CitySelect CityNames={CityNames} handleCityChange={this.handleCityChange} />
                    <SingleCityTable city={CityName} CityNames={CityNames} data={Data} currentYearData={CData}/>
                </div>
            )
        }
        return(
            <div className={styles.container}>
                <CitySelect CityNames={CityNames} handleCityChange={this.handleCityChange} />
                <CityTable data={Data} />
            </div>
        )
    }
}

export default App;