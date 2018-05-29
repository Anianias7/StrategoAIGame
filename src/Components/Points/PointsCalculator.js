class PointsCalculator {



    constructor(row, col, board){
        this.row = row;
        this.col = col;
        this.board = board;
        this.checkRow = this.board[this.row].every(el => el.playerNo !== -1);
        this.checkCol = this.board.map(row => row[this.col]).every(el => el.playerNo !== -1);
        this.findDiagonals = this.diagonals().filter(diag => diag.findIndex(elem => elem.rowNo === this.row && elem.colNo === this.col) !== -1);
        this.checkDiag = this.findDiagonals.map(diag => diag.every(el => this.board[el.rowNo][el.colNo].playerNo !== -1));
    }


    diagonals = () => this.findColsDiagonal(this.board).concat(this.findColsDiagonalMinus(this.board))
        .concat(this.findRowsDiagonal(this.board, "PLUS"))
        .concat(this.findRowsDiagonal(this.board, "MINUS"));


    calculatePoints = () => {
        const rowPoints = this.checkRow ? this.board.length : 0;
        const colPoints = this.checkCol ? this.board.length : 0;
        const diagPoints = this.checkDiag.reduce((acc, val, i) => val? acc+ this.findDiagonals[i].length : acc, 0);
        return rowPoints + colPoints + diagPoints;
    };


    findColsDiagonal = (board) => {
        let startRow = 0;
        let colNo = 0;
        let rowNo = 0;
        let diag = [];
        let diagonals = [];
        while (colNo < board.length - 1) {
            let _colNo = colNo;
            while (rowNo < board.length && _colNo < board.length && _colNo > -1) {
                diag.push({rowNo, colNo: _colNo});
                _colNo++;
                rowNo++;
            }
            colNo++;
            rowNo = startRow;
            diagonals.push(diag);

            diag = [];
        }
        return diagonals;
    };


    findColsDiagonalMinus = (board) => {
        let startRow = 0;
        let colNo = board.length - 1;
        let rowNo = 0;
        let diag = [];
        let diagonals = [];
        while (colNo > 0) {
            let _colNo = colNo;
            while (rowNo < board.length && _colNo > -1) {
                diag.push({rowNo, colNo:_colNo});
                _colNo--;
                rowNo++;
            }
            colNo--;
            rowNo = startRow;
            diagonals.push(diag);
            diag = [];
        }
        return diagonals;
    };


    findRowsDiagonal = (board, sign) => {
        let startCol;
        let colNo;
        let rowNo = 1;
        let diag = [];
        let diagonals = [];
        if (sign === "PLUS") {
            startCol = 0;
            colNo = 0;
        }
        else {
            startCol = board.length - 1;
            colNo = board.length - 1;
        }
        while (rowNo < board.length - 1) {
            let _rowNo = rowNo;
            while (colNo > -1 && colNo < board.length && _rowNo < board.length) {
                diag.push({rowNo:_rowNo, colNo});
                if (sign === "PLUS") {
                    colNo++;
                }
                else {
                    colNo--;
                }
                _rowNo++;
            }
            rowNo++;
            colNo = startCol;
            diagonals.push(diag);
            diag = [];
        }
        return diagonals;
    };
}

export default PointsCalculator;











