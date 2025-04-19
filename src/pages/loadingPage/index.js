
import React from 'react'
import "./index.scss"
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

const LoadingPage = ({type = "full", className}) => {
  return (
    <div className={`loadingPopup ${"loadingPopup-" + type} ${className}`}>
      <span className='title-very-small'><Spin indicator={<LoadingOutlined spin style={{ fontSize: 100 }} />} size="large" /></span>
    </div>
  )
}

export default LoadingPage