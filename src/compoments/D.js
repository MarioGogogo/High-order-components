import React ,{Compoment}from 'react'


function d(WrappedCompoment) {
  return  class D extends Compoment{
      render(){
         return <div>
            我是高阶组件
          <WrappedCompoment/>
         </div>
      }

  };

}

export default d;
