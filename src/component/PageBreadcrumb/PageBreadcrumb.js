import React, {useEffect, useState} from "react";
import './PageBreadcrumb.css';

import Breadcrumb from 'react-bootstrap/Breadcrumb'

function PageBreadcrumb({title}) {
    const [item, setItem] = useState()
    useEffect(()=>{
                setItem(
                    <Breadcrumb>
                        <Breadcrumb.Item style={{textDecoration: 'none',border: 'none'}}>خانه /</Breadcrumb.Item>
                        <Breadcrumb.Item className="breadcrumbLink" active>{title}</Breadcrumb.Item>
                    </Breadcrumb>
                )
    },[title])
  return (
      <div className="breadcrumbBackColor pt-2">
          <div className="container">
            <div className="row">
                {item}
            </div>
          </div>
      </div>
  )
}

export default PageBreadcrumb;