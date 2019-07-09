import React, { Component } from "react";
import Btn from './Btn';

class Discover extends Component {
    state = {
        input:''
    }
    
    handleClick = e => {
        e.preventDefault();
        // console.log('iam sending fetc')
        let latin = new Array('Ya', 'ya', 'Yu', 'yu', 'Ch', 'ch', 'Sh', 'sh', 'Sh', 'sh', 'Zh', 'zh', 'A', 'a', 'B', 'b', 'V', 'v', 'G', 'g', 'D', 'd', 'E', 'e', 'E', 'e', 'Z', 'z', 'I', 'i', 'J', 'j', 'K', 'k', 'L', 'l', 'M', 'm', 'N', 'n', 'O', 'o', 'P', 'p', 'R', 'r', 'S', 's', 'T', 't', 'U', 'u', 'F', 'f', 'H', 'h', 'C', 'c', 'Y', 'y', '`', '`', '\'', '\'', 'E', 'e');

        let cyril = new Array('Я', 'я', 'Ю', 'ю', 'Ч', 'ч', 'Ш', 'ш', 'Щ', 'щ', 'Ж', 'ж', 'А', 'а', 'Б', 'б', 'В', 'в', 'Г', 'г', 'Д', 'д', 'Е', 'е', 'Ё', 'ё', 'З', 'з', 'И', 'и', 'Й', 'й', 'К', 'к', 'Л', 'л', 'М', 'м', 'Н', 'н', 'О', 'о', 'П', 'п', 'Р', 'р', 'С', 'с', 'Т', 'т', 'У', 'у', 'Ф', 'ф', 'Х', 'х', 'Ц', 'ц', 'Ы', 'ы', 'Ь', 'ь', 'Ъ', 'ъ', 'Э', 'э');

                let transinput = this.state.input;
                for (let i = 0; i < latin.length; i++) {
                    let reg = new RegExp(latin[i], "g");
                    transinput = transinput.replace(reg, cyril[i]);
                }
        console.log(this.setState({input: transinput}))
            }
   
render() { 
    return (
        <div>
            <header>
            <h1>Discover</h1>
            <input type="text" placeholder="Type your word" onChange={e => this.setState({ input: e.target.value})} />
            </header>
            <Btn onClick = {this.handleClick} input={this.state.input} /> 
            </div>
    )}

    }
export default Discover;