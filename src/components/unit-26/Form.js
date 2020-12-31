import React, { useEffect, useState } from 'react'
import { Form, Input, Button, Row, Col, Select, Upload  } from 'antd'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import axios from 'axios'


const MyForm = () => {
  const [form] = Form.useForm()
  const [provinces, setProvinces] = useState([])
  const [province, setProvince] = useState(null)
  const [districts, setDistricts] = useState([])
  const [district, setDistrict] = useState(null)
  const [wards, setWards] = useState([])
  const [imageUrl, setImageUrl] = useState('')
  const [loading, setLoading] = useState(false)

  function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }
  

  const onFinish = (values) => {
    console.log(values)
  }

  const validateName = (rule, value) => {
    if (value.indexOf('a') !== -1) {
      return Promise.reject('Khong dc nhap chu a')
    }

    return Promise.resolve
  }

  const validateUserName = (rule, value) => {
    const regex = /[^a-z0-9_]/g
    const match = regex.test(value)
    if (match) {
      return Promise.reject('User name chi dc xuat hien ki tu tu a-z 0-9 va dau _')
    }

    return Promise.resolve
  }

  const fetchAllProvinces  = () => {
    axios.get('http://localhost:8000/provinces')
    .then(response => {
      setProvinces(response.data)
    })
  }

  const fetchDistrictsByProvinceId = id => {
    axios.get(`http://localhost:8000/districts?provinceId=${id}`)
    .then(response => {
      setDistricts(response.data)
    })
  }

  const fetchWardsByDistrictId = id => {
    axios.get(`http://localhost:8000/wards?districtId=${id}`)
    .then(response => {
      setWards(response.data)
    })
  }


  const setCurrentProvince = value => {
    setProvince(value)
    setDistrict(null)
    setDistricts([])
    fetchDistrictsByProvinceId(value)
    form.setFieldsValue({
      district: null
    })
    form.setFieldsValue({
      ward: null
    })
  }

  const setCurrentDistrict = value => {
    setDistrict(value)
    fetchWardsByDistrictId(value)
    form.setFieldsValue({
      ward: null
    })
  }

  const beforeUpload = () => {

  }
  
  const handleChange = (info) => {
    if (info.file.status === 'uploading') {
      setLoading(true)
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl => {
        setImageUrl(imageUrl)
        setLoading(false)
      }
        
      )
    }
  }

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  useEffect(() => {
     fetchAllProvinces()
  }, [])

  const submitForm = async () => {
    const payload = await form.getFieldsValue()
    console.log(payload)
  }

  const customRequest = (info) => {
    getBase64(info.file, imageUrl => {
      setImageUrl(imageUrl)
      console.log(imageUrl)
      setLoading(false)
    })
  }

  return (
    <>
      <Row gutter={16}>
        <Col className='gutter-row' span={12} offset={6}>
        <h1>Tao form</h1>

          <Form form={form} name="control-hooks" onFinish={onFinish} onSubmit={submitForm} >
            <Form.Item 
              name='name' 
              label='Name'
              rules={[
                { required: true, message: 'Please input your name' },
                { validator: validateName }
              ]}
            >
              <Input />
               
            </Form.Item>
            <Form.Item 
              name='username' 
              label='User Name'
              rules={[
                { required: true, message: 'Please input your username' },
                { max: 12, message: 'Ten khong dc qua 12 ki tu' },
                { validator: validateUserName }
              ]}
            >
              <Input />
            </Form.Item>

            
            <Form.Item 
              name='province' 
              label='Province'
              rules={[
                { required: true, message: 'Hay chon mot tinh' }              
              ]}
            >
              <Select onChange={setCurrentProvince}>
                {
                  provinces.map(province => {
                    return <Select.Option 
                      key={province.id}
                      value={province.id}>
                        {province.name}
                      </Select.Option>
                  })
                }
              </Select>
            </Form.Item>

            <Form.Item 
              name='district' 
              label='District'
              rules={[
                { required: true, message: 'Hay chon mot huyen' }              
              ]}
            >
              <Select disabled={!province} onChange={setCurrentDistrict} >
                {
                  districts.map(district => {
                    return <Select.Option 
                      key={district.id}
                      value={district.id}>
                        {district.name}
                      </Select.Option>
                  })
                }
              </Select>
            </Form.Item>

            <Form.Item 
              name='ward' 
              label='Ward'
              rules={[
                { required: true, message: 'Hay chon mot xa' }              
              ]}
            >
              <Select disabled={!district} >
                {
                  wards.map(ward => {
                    return <Select.Option 
                      key={ward.id}
                      value={ward.id}>
                        {ward.name}
                      </Select.Option>
                  })
                }
              </Select>
            </Form.Item>
            <Form.Item 
              name='avatar' 
              label='Avatar'
              rules={[
                { required: true }
              ]}
            >
              <Upload
                name="avatar"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
                beforeUpload={beforeUpload}
                onChange={handleChange}
                customRequest={customRequest}
              >
                {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
              </Upload>
                      
            </Form.Item>

            <Button type='primary' onClick={submitForm}>Submit</Button>
          </Form>

        </Col>
      </Row>
    </>
  )
}

export default MyForm
