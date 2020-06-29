import axios from 'axios';


//Data for Finland
export const fetchCurrentYearData = async () =>{
    try {
        const params = {
          "query": [
            {
              "code": "Alue",
              "selection": {
                "filter": "all",
                "values": [
                  "KU*"
                ]
              }
            },
            {
              "code": "Sukupuoli",
              "selection": {
                "filter": "item",
                "values": [
                  "SSS"
                ]
              }
            },
            {
              "code": "Ikä",
              "selection": {
                "filter": "item",
                "values": [
                  "SSS"
                ]
              }
            }
          ],
          "response": {
            "format": "json"
          }
        }
    const response = await axios.post('https://pxnet2.stat.fi/PXWeb/api/v1/fi/StatFin/vrm/vamuu/statfin_vamuu_pxt_11lj.px', params)
    const data = response.data.data;
    
    
    return data;
        
    } catch (error) {
        console.log('data error');
        console.log(error);
    }
}

//fetch cities information

export const fetchCityData = async () =>{
  try {
      const params = {
        "query": [
          {
              "code": "Alue",
              "selection": {
                "filter": "all",
                "values": [
                  "KU*"
                ]
              }
            },
            
            {
              "code": "Tiedot",
              "selection": {
                "filter": "item",
                "values": [
                  "vaesto",
                  "kokmuutos",
                  "kokmuutos_p"
                ]
              }
            },
          
          ],
            "response": {
              "format": "json"
            }
      }
  const response = await axios.post('https://pxnet2.stat.fi/PXWeb/api/v1/fi/StatFin/vrm/vaerak/statfin_vaerak_pxt_11ra.px', params)
  const data = response.data.data;

  const metaDataResponse = await axios.get('https://pxnet2.stat.fi/PXWeb/api/v1/fi/StatFin/vrm/vaerak/statfin_vaerak_pxt_11ra.px');
  
  const metaData = metaDataResponse.data.variables[0];


  var CityNames = {};
  var key;
  var valueText;
  for(var i = 0; i < metaData.values.length; i++){
    if(metaData.values[i].startsWith("KU")){
      key = metaData.values[i];
      valueText = metaData.valueTexts[i]
      CityNames[key] = valueText;
    }
  }
  
 
  //add city names to the data
  data.forEach(function(city){
    let NameoftheCity = CityNames[city.key[0]];
    city.key.push(NameoftheCity);
    city.key[1] = Number(city.key[1]);
    city.values[0] = Number(city.values[0]);
    city.values[1] = Number(city.values[1]);
    city.values[2] = Number(city.values[2]);
  })
  
  
  return {data: data,
          cityNames: CityNames};
      
  } catch (error) {
      console.log('data error');
      console.log(error);
  }
}
