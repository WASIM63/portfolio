
import React from 'react'
import {gallery} from '@/contents/gallery';
import Template1 from '../components/galleryFormats/template1';

const Gallery = () => {
  return (
  <div>
        {gallery.map((moment,index)=>(
            <Template1 moment={moment} key={index} />
        ))}
  </div>
  );
}

export default Gallery