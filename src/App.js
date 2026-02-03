import { TaskProvider } from './context/TaskContext';
import AppHeader from './components/AppHeader/AppHeader';
import TaskInput from './components/TaskInput/TaskInput';
import TaskSearch from './components/TaskSearch/TaskSearch';
import TaskList from './components/TaskList/TaskList';
import Card from './components/Card/Card';
import Pagination from './components/Pagination/Pagination';
import './App.css'

function App() {
  return (
    <TaskProvider>
      <div className="app">
        <Card>
          <AppHeader />
          <TaskInput />
          <TaskSearch />
          <TaskList />
          <Pagination />
        </Card>
      </div>
    </TaskProvider>
  );
}

export default App;