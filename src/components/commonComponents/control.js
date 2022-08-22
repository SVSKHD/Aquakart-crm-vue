import GreetCard from "../commonComponents/greetCard"
import StockCard from "../commonComponents/StockCard"
import AQdialog from "../commonComponents/AqDialog"

export default (app) =>{
app.component('greetCard' , GreetCard)
app.component('stockCard', StockCard)
app.component('aqDialog' , AQdialog)
}