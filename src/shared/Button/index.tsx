import React from 'react'

const Button = ({buttonName}:{buttonName: string}) => {
  return (
		<button className='text-white bg-blue-700 rounded-lg h-12 font-semibold w-full mt-3' type='submit'>
			{buttonName}
		</button>
  );
}

export default Button