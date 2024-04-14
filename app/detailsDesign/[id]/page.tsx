import React from 'react'

const Page = (props: any) => {
  return (
    <div>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
  );
}

export default Page;