import './App.css'
import { Table, Tag, Skeleton } from 'antd'
import { useFetchData } from './hooks/useFetchData'


const columns = [
  {
    title: 'Titulo',
    key: 'title',
    dataIndex: 'title'
  },
  {
    title: 'Description',
    key: 'description',
    dataIndex: 'description'
  },
  {
    title: 'Detail',
    key: 'detail',
    dataIndex: 'detail',
    render: (records = []) => (
      <>
        {console.log(records)}
        { Array.isArray(records) ? records.map((tag) => {
          
          return (
            <Tag key={tag.id} color={'magenta'}>
              {tag.name.toUpperCase()}
            </Tag>
          );
        }) : <div>Hello</div>}
      </>
    ),
  }
]

const App = () => {

  const [products, load] = useFetchData()

  return (
    <div className="App" style={{width: '100%', border: '1px solid red'}}>
      <h1>Hello world!</h1>
      {
        load ? <Skeleton active/> : 
        <Table columns={columns} 
        dataSource={products}
        scroll={{x: 'auto'}}
        />
      }
    </div>
  )
}

export default App
