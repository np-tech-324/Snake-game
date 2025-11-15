const board = document.querySelector('.board')

const blockHeight = 50
const blockwidth = 50

const rows = Math.floor(board.clientHeight / blockHeight)
const cols = Math.floor(board.clientWidth / blockwidth)

const blocks = [];
const snake = [
    {
        x: 1,
        y: 3
    },
    {
        x: 1,
        y: 4
    },
    {
        x: 1,
        y: 5
    },

]

// for(let i = 0; i < rows*cols;i++){
//     let block = document.createElement('div')
//     block.classList.add("block")
//     board.appendChild(block)
// }

for(let row = 0;row < rows; row++){
    for(let col = 0; col < cols; col++){
        const block = document.createElement('div')
        block.classList.add("block")
        board.appendChild(block);
        block.innerHTML = `${row}-${col}`
        blocks[`${row}-${col}`] = block;
        // console.log(block);
    }
}

function render(){
    snake.forEach(segment =>{
        blocks[`${segment.x}-${segment.y}`].classList.add("fill")
    })
}

setInterval(() => {
    

    render()
}, 300);