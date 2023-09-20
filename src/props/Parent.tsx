import { Child } from './Child';

const Parent = () => {
  return <Child color='red' onClick={() => console.log('Clicked')} >
    <span> test </span>
     </Child>
}


export default Parent;