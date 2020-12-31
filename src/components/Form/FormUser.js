import React from 'react'
import { Form, Input, Button, Upload, message } from 'antd'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'
import SelectOption from './SelectOption'
import 'antd/dist/antd.css'

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
}

class Avatar extends React.Component {
  state = {
    loading: false,
  };

  handleChange = info => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl =>
        this.setState({
          imageUrl,
          loading: false,
        }),
      );
    }
  };

  render() {
    const { loading, imageUrl } = this.state;
    const uploadButton = (
      <div>
        {loading ? <LoadingOutlined /> : <PlusOutlined />}
        <div style={{ marginTop: 8 }}>Upload</div>
      </div>
    );
    return (
      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        beforeUpload={beforeUpload}
        onChange={this.handleChange}
      >
        {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
      </Upload>
    );
  }
}


const FormUser = () => {

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 8,
    },
  };

  const validateMessages = {
    required: '${label} is required!' ,
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };

  
  const onFinish = (values) => {
    console.log(values);
  };  

  return (
    <>
      <Form {...layout} name="nest-messages" onFinish={onFinish}  validateMessages={validateMessages}>
        <Form.Item
          name={'name'}
          label="Name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input maxLength='32' />
        </Form.Item>
        <Form.Item
          name={'username'}
          label="User Name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>        
        <Form.Item
          name={'address'}
          label="Address"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <SelectOption />
        </Form.Item>
        <Form.Item
          name={'avatar'}
          label="Avatar"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Avatar />
        </Form.Item>
        <Form.Item
          name={'email'}
          label="Email"
          rules={[
            {
              required: true,
              type: 'email'
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={'password'}
          label="Password"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input.Password minLength='6' />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  )

}

export default FormUser
