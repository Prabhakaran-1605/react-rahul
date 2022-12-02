import Message from './Components/Message'
import Navbar from './Navbar/Navbar'
import Product from './Product/Product'
import Digital from './Digital/Digital'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
let App = () => {
    return <div>
        <Router>
            <Navbar />
            <Switch>
                <Route path="/product" component={Product} />
                <Route path="/digital" component={Digital} />
            </Switch>

        </Router>
    </div>
}
export default App