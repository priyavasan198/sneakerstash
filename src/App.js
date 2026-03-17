import './App.css';
import Sample from './Sample'

function App(){
    const arr=[
    {colour:"red",fruit:"apple",price:100},
    {colour:"yellow",fruit:"banana",price:60},
    {colour:"green",fruit:"gauva",price:75}
    ]
    return(
        <div>
            
            <Sample test={arr}/>
            hello
        </div>
    );
}
export default App;
