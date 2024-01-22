/*   import React, {useState, useRef, useMemo, useCallback} from 'react';
  import Test from './components/Test';
  import Test2 from './components/Test2';
  import Test3 from './components/Test3';
  import Test4 from './components/Test4';
  import Test5 from './components/Test5';
  import Test6 from './components/Test6';
  import Test7 from './components/Test7';
  import './App.css';

  function countActiveUsers(users){
    console.log('활성 사용자 수를 세는 중...');
    return users.filter(user => user.active).length;
  }

  function App() {
    const name = 'Minkyu';
    const style = {
      backgroundColor: 'black',
      color: 'aqua',
      fontSize: '48px',
      fontWeight: 'bold',
      padding: '1rem',
    }

    const [inputs, setInputs] = useState({
      username: '',
      email: ''
    });
    const {username, email} = inputs;
    const onChange = useCallback(
      e => {
        const {name, value} = e.target;
        setInputs(inputs =>({...inputs,
          [name]: value})
        );
      }, [inputs]);

    const [users,setUsers] = useState([
      {
        id: 1,
        username: 'velopert',
        email: 'public.velopert@gmail.com',
        active: true
      },
      {
        id: 2,
        username: 'tester',
        email: 'tester@example.com',
        active: false
      },
      {
        id: 3,
        username: 'liz',
        email: 'liz@example.com',
        active: false
      }
    ]);

    const nextId = useRef(4);
    const onCreate = useCallback(() => {
      const user = {
        id: nextId.current,
        username,
        email
      };
      setUsers(users => users.concat(user));
      setInputs({
        username: '',
        email: ''
      });
      nextId.current += 1;
    }, [username, email]);

    const onRemove = useCallback(id => {
      setUsers(users => users.filter(user => user.id !== id));
    }, []);

    const onToggle = useCallback(id => {
      setUsers(users => users.map(user => user.id === id ? {...user, active: !user.active} : user))
    }, []);

    const count = useMemo(() => countActiveUsers(users), [users]);
      return(
        <>
        {<Test2>
          <Test name={name} color="red" isSpecial={true}/>
          <Test color="pink"/> 
        </Test2>
        <Test3/>
        <Test4/>
      <Test5/>}
      <Test7
      username={username}
      email={email}
      onChange={onChange}
      onCreate={onCreate}
    />
    <Test6 users={users} onRemove={onRemove} onToggle={onToggle}/>
    <div>활성 사용자 수: {count}</div>
    </> 
  );
}

export default App;*/