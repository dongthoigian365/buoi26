import React, { useEffect,useState } from 'react'
import { Select } from 'antd'
import axios from 'axios'

const { Option } = Select;

const SelectOption = () => {
  const provinceData = ['Hà Nội', 'Hà Giang', 'Cao Bằng'];
  const cityData = {
    "Hà Nội": ['Hangzhou', 'Ningbo', 'Wenzhou'],
    "Hà Giang": ['Nanjing', 'Suzhou', 'Zhenjiang'],
  };

  const [city, setCity] = useState([])
  const [cities, setCities] = useState(cityData[provinceData[0]]);
  const [secondCity, setSecondCity] = useState(cityData[provinceData[0]][0]);

  const handleProvinceChange = value => {
    setCities(cityData[value]);
    setSecondCity(cityData[value][0]);
  };

  const onSecondCityChange = value => {
    setSecondCity(value);
  };

  // useEffect(() => {
  //   axios.get('http://localhost:3000/provinces')
  //   .then(response => {
  //     setProvinceData1(response.data)
  //     console.log(provinceData1)
  //   })
  // }, []) 
  
  useEffect(() => {
    axios.get('http://localhost:3000/provinces')
    .then(response => {
      setCity(response.data)
    })
  }, [])

  console.log(city.map(item => item.name))


  return (
    <>
      <Select defaultValue={provinceData[0]} style={{ width: 120 }} onChange={handleProvinceChange}>
        {provinceData.map(province => (
          <Option key={province}>{province}</Option>
        ))}
      </Select>
      <Select style={{ width: 120 }} value={secondCity} onChange={onSecondCityChange}>
        {cities.map(city => (
          <Option key={city}>{city}</Option>
        ))}
      </Select>
    </>
  );
};

export default  SelectOption
