      import React from 'react';
      const connect = (Component)=> {
        class Connected extends React.Component{
          constructor(){
            super();
            this.state = store.getState();
          }
          componentWillUnmount(){
            this.unsubscribe();
          }
          componentDidMount(){
            this.unsubscribe = store.subscribe(() => this.setState(store.getState()));
          }
          render(){
            return (
              <Component {...this.state } {...this.props }/>
            );
          }
        }
        return Connected;
      }




     // ReactDOM.render(<App />, document.querySelector('#root'));