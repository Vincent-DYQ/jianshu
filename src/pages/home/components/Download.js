import React, { PureComponent } from 'react';
import {
  DownloadWrapper
} from '../style';

class Download extends PureComponent {
  render() {
    return (
      <DownloadWrapper>
        <img className='qrcode' src='https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png' alt=''/>
        <div className='info'>
          <p className='title'>下载简书手机App></p>
          <p className='description'>随时随地发现和创作内容</p>
        </div>
      </DownloadWrapper>
    )
  }
}

export default Download;