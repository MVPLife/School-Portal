import React from 'react'
import ViewScore from '@/src/client/components/my_account/MainSection/ViewScore';
import type { NextPage } from 'next';

const ViewscorePage: NextPage = (props) => {
  return (
          <ViewScore {...props}/>

  );
}

export default ViewscorePage;
