const board = document.querySelector('.board')

const blockHeight = 30
const blockwidth = 30

const rows = Math.floor(board.clientHeight / blockHeight)
const cols = Math.floor(board.clientWidth / blockwidth)

// for(let i = 0; i < rows*cols;i++){
//     let block = document.createElement('div')
//     block.classList.add("block")
//     board.appendChild(block)
// }

for(let row = 0;row < rows; row++){
    for(let col = 0; col < cols; col++){
        let block = document.createElement('div')
        block.classList.add("block")
        board.appendChild(block)
        
        // block.innerHTML = `${row}-${col}`
    }
}